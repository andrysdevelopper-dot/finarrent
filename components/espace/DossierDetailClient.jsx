'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const STATUS_LABELS = {
  en_attente: { label: 'Reçu', color: 'bg-amber-100 text-amber-800', icon: 'fa-regular fa-clock' },
  en_cours: { label: 'Analyse', color: 'bg-blue-100 text-blue-800', icon: 'fa-solid fa-magnifying-glass' },
  documents_manquants: { label: 'Documents manquants', color: 'bg-orange-100 text-orange-800', icon: 'fa-solid fa-file' },
  devis_envoye: { label: 'Devis envoyé', color: 'bg-cyan-100 text-cyan-800', icon: 'fa-solid fa-file-invoice' },
  devis_accepte: { label: 'Devis accepté', color: 'bg-indigo-100 text-indigo-800', icon: 'fa-solid fa-check' },
  signature_en_attente: { label: 'Signature en attente', color: 'bg-purple-100 text-purple-800', icon: 'fa-solid fa-pen' },
  signe: { label: 'Signé', color: 'bg-teal-100 text-teal-800', icon: 'fa-solid fa-signature' },
  transmis: { label: 'Transmis', color: 'bg-sky-100 text-sky-800', icon: 'fa-solid fa-paper-plane' },
  validee: { label: 'Accepté', color: 'bg-green-100 text-green-800', icon: 'fa-solid fa-check-circle' },
  refusee: { label: 'Refusé', color: 'bg-red-100 text-red-800', icon: 'fa-solid fa-xmark-circle' },
  finalise: { label: 'Finalisé', color: 'bg-emerald-100 text-emerald-800', icon: 'fa-solid fa-flag-checkered' },
};

const PRODUCT_LABELS = {
  PRET_PRO: 'Prêt professionnel',
  CREDIT_BAIL: 'Crédit-bail',
  LOA: 'LOA',
  RC_PRO: 'RC Professionnelle',
};

export default function DossierDetailClient({ dossier, user }) {
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState(dossier.documents || []);

  const handleFileUpload = async (file, type) => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('applicationId', dossier.id);
    formData.append('type', type);

    try {
      const res = await fetch('/api/documents/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setDocuments((prev) => [...prev, data.document]);
      } else {
        alert(data.error || "Erreur lors de l'envoi");
      }
    } catch (err) {
      alert("Erreur technique lors de l'envoi");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/espace"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary font-medium text-sm"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Retour à mes dossiers
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-black text-secondary text-lg">{dossier.reference}</span>
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${STATUS_LABELS[dossier.status]?.color}`}
                    >
                      {STATUS_LABELS[dossier.status]?.label || dossier.status}
                    </span>
                  </div>
                  <h1 className="text-2xl font-black text-primary">{dossier.companyName}</h1>
                  <p className="text-gray-500 text-sm mt-1">
                    {PRODUCT_LABELS[dossier.productType] || dossier.productType} •{' '}
                    {new Date(dossier.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-secondary">{dossier.amount || '-'}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Montant demandé</p>
                </div>
              </div>
            </div>

            {/* Infos */}
            <div className="p-8 sm:p-10 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Entreprise</h3>
                <p className="font-bold text-primary">{dossier.companyName}</p>
                <p className="text-sm text-gray-500">SIREN : {dossier.siren}</p>
                <p className="text-sm text-gray-500">Secteur : {dossier.sector}</p>
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Contact</h3>
                <p className="font-bold text-primary">
                  {dossier.firstName} {dossier.lastName}
                </p>
                <p className="text-sm text-gray-500">{dossier.email}</p>
                <p className="text-sm text-gray-500">{dossier.phone}</p>
              </div>
              {dossier.equipmentType && (
                <div className="sm:col-span-2">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Équipement</h3>
                  <p className="text-primary">{dossier.equipmentType}</p>
                </div>
              )}
              {dossier.description && (
                <div className="sm:col-span-2">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Message</h3>
                  <p className="text-gray-600 p-4 bg-gray-50 rounded-xl">{dossier.description}</p>
                </div>
              )}
            </div>

            {/* Documents */}
            <div className="p-8 sm:p-10 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-black text-primary flex items-center gap-2">
                  <i className="fa-solid fa-file-lines text-secondary"></i>
                  Documents ({documents.length})
                </h3>
                <label
                  className={`cursor-pointer px-6 py-3 bg-secondary text-white font-black rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2 text-sm ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  {uploading ? 'Envoi...' : 'Ajouter un document'}
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e.target.files[0], 'AUTRE')}
                  />
                </label>
              </div>

              {documents.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-secondary/5 hover:border-secondary/20 border border-transparent transition-all"
                    >
                      <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                        <i className="fa-solid fa-file-pdf text-xl"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-primary truncate">{doc.originalName}</p>
                        <p className="text-xs text-gray-400 uppercase">{doc.type}</p>
                      </div>
                      <i className="fa-solid fa-external-link text-gray-300"></i>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                  <i className="fa-solid fa-folder-open text-4xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 font-medium">Aucun document pour le moment</p>
                  <p className="text-sm text-gray-400 mt-1">Ajoutez vos pièces (KBIS, RIB, bilans...)</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
