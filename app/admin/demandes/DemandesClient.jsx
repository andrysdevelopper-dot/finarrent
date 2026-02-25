'use client';

import { useState, useEffect } from 'react';

const STATUS_LABELS = {
  en_attente: { label: 'En attente', color: 'bg-amber-100 text-amber-800' },
  en_cours: { label: 'En cours', color: 'bg-blue-100 text-blue-800' },
  validee: { label: 'Validée', color: 'bg-green-100 text-green-800' },
  refusee: { label: 'Refusée', color: 'bg-red-100 text-red-800' },
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
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_LABELS[d.status]?.color || 'bg-gray-100'}`}>
                    {STATUS_LABELS[d.status]?.label || d.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {REQUEST_TYPE_LABELS[d.requestType] || d.requestType}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary">{d.companyName}</h3>
                <p className="text-sm text-gray-600">
                  {d.firstName} {d.lastName} • {d.email} • {d.phone}
                </p>
              </div>
              <div className="text-right text-sm text-gray-500">
                {formatDate(d.createdAt)}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 text-sm">
              <div><span className="text-gray-500">SIREN:</span> {d.siren}</div>
              <div><span className="text-gray-500">Secteur:</span> {d.sector}</div>
              <div><span className="text-gray-500">Montant:</span> {d.amount}</div>
              <div><span className="text-gray-500">Équipement:</span> {d.equipmentType || '-'}</div>
            </div>

            {d.message && (
              <p className="text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-lg">{d.message}</p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-700">Changer le statut :</span>
              {['en_attente', 'en_cours', 'validee', 'refusee'].map((s) => (
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
