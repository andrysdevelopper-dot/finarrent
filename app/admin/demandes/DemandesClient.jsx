'use client';

import { useState, useEffect } from 'react';

const STATUS_LABELS = {
  en_attente: { label: 'En attente', color: 'bg-amber-100 text-amber-800' },
  en_cours: { label: 'En cours', color: 'bg-blue-100 text-blue-800' },
  documents_manquants: { label: 'Documents manquants', color: 'bg-orange-100 text-orange-800' },
  devis_envoye: { label: 'Devis envoyé', color: 'bg-cyan-100 text-cyan-800' },
  devis_accepte: { label: 'Devis accepté', color: 'bg-indigo-100 text-indigo-800' },
  signature_en_attente: { label: 'Signature en attente', color: 'bg-purple-100 text-purple-800' },
  signe: { label: 'Signé', color: 'bg-teal-100 text-teal-800' },
  transmis: { label: 'Transmis', color: 'bg-sky-100 text-sky-800' },
  validee: { label: 'Validée', color: 'bg-green-100 text-green-800' },
  refusee: { label: 'Refusée', color: 'bg-red-100 text-red-800' },
  finalise: { label: 'Finalisé', color: 'bg-emerald-100 text-emerald-800' },
};

const REQUEST_TYPE_LABELS = {
  financement: 'Financement',
  assurance: 'Assurance',
};

export default function DemandesClient() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editNotes, setEditNotes] = useState('');

  useEffect(() => {
    fetchDemandes();
  }, []);

  const fetchDemandes = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/demandes');
      if (!res.ok) throw new Error('Erreur chargement');
      const data = await res.json();
      setDemandes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/admin/demandes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Erreur mise à jour');
      const updated = await res.json();
      setDemandes((prev) => prev.map((d) => (d.id === id ? updated : d)));
    } catch (err) {
      alert(err.message);
    }
  };

  const updateNotes = async (id) => {
    try {
      const res = await fetch(`/api/admin/demandes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminNotes: editNotes }),
      });
      if (!res.ok) throw new Error('Erreur mise à jour');
      const updated = await res.json();
      setDemandes((prev) => prev.map((d) => (d.id === id ? updated : d)));
      setEditingId(null);
      setEditNotes('');
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <i className="fa-solid fa-spinner fa-spin text-4xl text-secondary"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
        {error}
      </div>
    );
  }

  if (demandes.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
        Aucune demande pour le moment.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {demandes.map((d) => (
        <div
          key={d.id}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-bold text-secondary">{d.reference}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${STATUS_LABELS[d.status]?.color || 'bg-gray-100'}`}>
                    {STATUS_LABELS[d.status]?.label || d.status}
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                    {REQUEST_TYPE_LABELS[d.requestType] || d.requestType}
                  </span>
                </div>
                <h3 className="text-lg font-black text-primary uppercase">{d.companyName}</h3>
                <div className="flex flex-col gap-1 mt-1 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-user-tie text-[10px] opacity-40"></i>
                    {d.firstName} {d.lastName}
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-[10px] opacity-40"></i>
                    {d.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-[10px] opacity-40"></i>
                    {d.phone}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-primary">{formatDate(d.createdAt)}</div>
                {d.user ? (
                   <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 text-[10px] font-black rounded-lg border border-green-100 mt-2">
                    <i className="fa-solid fa-circle-check"></i>
                    CLIENT AUTHENTIFIÉ
                   </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-50 text-gray-400 text-[10px] font-black rounded-lg border border-gray-100 mt-2">
                    <i className="fa-solid fa-ghost"></i>
                    PROSPECT ANONYME
                   </span>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
              <div><div className="text-[10px] font-black text-gray-400 uppercase">SIREN</div> <div className="font-bold text-primary">{d.siren}</div></div>
              <div><div className="text-[10px] font-black text-gray-400 uppercase">Secteur</div> <div className="font-bold text-primary">{d.sector}</div></div>
              <div><div className="text-[10px] font-black text-gray-400 uppercase">Montant</div> <div className="font-bold text-secondary italic">{d.amount}</div></div>
              <div><div className="text-[10px] font-black text-gray-400 uppercase">Équipement</div> <div className="font-bold text-primary">{d.equipmentType || '-'}</div></div>
            </div>

            {/* Documents Section */}
            {d.documents?.length > 0 && (
              <div className="mb-6">
                <div className="text-[10px] font-black text-gray-400 uppercase mb-3">Pièces jointes ({d.documents.length})</div>
                <div className="flex flex-wrap gap-3">
                  {d.documents.map(doc => (
                    <a 
                      key={doc.id} 
                      href={doc.path} 
                      target="_blank" 
                      className="flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:border-secondary hover:shadow-sm transition-all text-sm group"
                    >
                      <i className="fa-solid fa-file-pdf text-red-500 text-base"></i>
                      <span className="font-bold text-primary group-hover:text-secondary">{doc.originalName}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {d.message && (
              <div className="mb-6">
                 <div className="text-[10px] font-black text-gray-400 uppercase mb-2">Message prospect</div>
                 <p className="text-sm text-gray-600 p-4 bg-white border border-gray-100 rounded-2xl italic">"{d.message}"</p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-700">Changer le statut :</span>
              {['en_attente', 'en_cours', 'documents_manquants', 'devis_envoye', 'devis_accepte', 'signature_en_attente', 'signe', 'transmis', 'validee', 'refusee', 'finalise'].map((s) => (
                <button
                  key={s}
                  onClick={() => updateStatus(d.id, s)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    d.status === s
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {STATUS_LABELS[s].label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              {editingId === d.id ? (
                <div>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Notes internes..."
                    className="input-field py-2 text-sm mb-2"
                    rows="2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateNotes(d.id)}
                      className="btn-primary py-2 text-sm"
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={() => { setEditingId(null); setEditNotes(''); }}
                      className="btn-outline py-2 text-sm"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-sm font-medium text-gray-700">Notes : </span>
                  <span className="text-sm text-gray-600">{d.adminNotes || 'Aucune'}</span>
                  <button
                    onClick={() => { setEditingId(d.id); setEditNotes(d.adminNotes || ''); }}
                    className="ml-2 text-sm text-secondary hover:underline"
                  >
                    Modifier
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
