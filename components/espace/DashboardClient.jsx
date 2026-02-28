'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_LABELS = {
  en_attente: { label: 'Reçu', color: 'bg-amber-100 text-amber-800', icon: 'fa-regular fa-clock' },
  en_cours: { label: 'Analyse', color: 'bg-blue-100 text-blue-800', icon: 'fa-solid fa-magnifying-glass' },
  validee: { label: 'Accepté', color: 'bg-green-100 text-green-800', icon: 'fa-solid fa-check-circle' },
  refusee: { label: 'Refusé', color: 'bg-red-100 text-red-800', icon: 'fa-solid fa-xmark-circle' },
};

export default function DashboardClient({ user, dbUser, initialDemandes }) {
  const [demandes, setDemandes] = useState(initialDemandes);
  const [uploadingId, setUploadingId] = useState(null);
  const [greeting, setGreeting] = useState('Bonjour');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bonjour');
    else if (hour < 18) setGreeting('Bon après-midi');
    else setGreeting('Bonsoir');
  }, []);

  // Calcul du score de complétion du profil (simulation)
  const completionScore = dbUser.documents?.length > 0 ? 85 : 65;

  const handleFileUpload = async (demandeId, file, type) => {
    if (!file) return;
    
    setUploadingId(demandeId);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('demandeId', demandeId);
    formData.append('type', type);

    try {
      const res = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      
      if (data.success) {
        setDemandes(prev => prev.map(d => {
          if (d.id === demandeId) {
            return { ...d, documents: [...(d.documents || []), data.document] };
          }
          return d;
        }));
      } else {
        alert(data.error || 'Erreur lors de l’envoi');
      }
    } catch (err) {
      alert('Erreur technique lors de l’envoi');
    } finally {
      setUploadingId(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
                <img
                  src={user.picture || 'https://via.placeholder.com/64'}
                  alt={user.name}
                  className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-4xl font-black text-primary tracking-tight">
                  {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">{user.name?.split(' ')[0]}</span>
                </h1>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-1">Espace Client • ID #{dbUser.id.slice(-4).toUpperCase()}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(10,25,47,0.3)] hover:-translate-y-1 transition-all">
                Nouvelle demande
              </Link>
              <a href="/api/auth/logout?returnTo=/" className="w-14 h-14 flex items-center justify-center bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-500 shadow-sm border border-red-100">
                <i className="fa-solid fa-power-off text-xl"></i>
              </a>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Quick Start if no demandes */}
              {demandes.length === 0 && (
                <motion.div 
                  variants={itemVariants} 
                  className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl group"
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                      <h2 className="text-3xl font-black mb-4 leading-tight">Prêt à propulser vos projets ?</h2>
                      <p className="text-white/70 mb-8 max-w-md font-light text-lg">Votre premier financement n'attend que vous. Réponse de principe immédiate via notre simulateur.</p>
                      <Link href="/simulator" className="group/btn relative px-8 py-4 bg-accent text-white font-black rounded-2xl hover:scale-105 transition-all inline-flex items-center gap-3 overflow-hidden">
                        <span className="relative z-10">Simuler mon projet</span>
                        <i className="fa-solid fa-rocket relative z-10 animate-bounce-slow"></i>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </Link>
                    </div>
                    <div className="hidden md:flex w-40 h-40 bg-white/10 rounded-[32px] items-center justify-center border border-white/20 animate-float">
                      <i className="fa-solid fa-file-invoice-dollar text-7xl text-accent/50"></i>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* dossiers Section */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100"
              >
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-black text-primary flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <i className="fa-solid fa-folder-tree"></i>
                    </div>
                    Mes Dossiers en cours
                  </h2>
                  <div className="px-4 py-2 bg-gray-50 rounded-xl text-xs font-black text-gray-400 uppercase tracking-widest">{demandes.length} Total</div>
                </div>

                <div className="space-y-6">
                  {demandes.map(d => (
                    <motion.div 
                      key={d.id} 
                      whileHover={{ scale: 1.01 }}
                      className="group border border-gray-100 rounded-[32px] p-8 hover:shadow-2xl transition-all bg-gray-50/20 hover:bg-white relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex flex-wrap items-start justify-between gap-6 relative z-10 mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] bg-secondary/5 px-2 py-1 rounded-md">{d.reference}</span>
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase flex items-center gap-2 ${STATUS_LABELS[d.status]?.color} ring-4 ring-white shadow-sm`}>
                              <div className={`w-2 h-2 rounded-full animate-pulse ${STATUS_LABELS[d.status]?.color.replace('text-', 'bg-').replace('bg-', 'bg-')}`}></div>
                              {STATUS_LABELS[d.status]?.label}
                            </span>
                          </div>
                          <h3 className="font-black text-primary text-xl uppercase tracking-tight">{d.equipmentType || d.companyName}</h3>
                          <p className="text-gray-400 font-bold text-sm mt-1">{d.amount} • {new Date(d.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <label className={`cursor-pointer px-6 py-3 bg-white border-2 border-gray-100 text-primary text-xs font-black rounded-2xl hover:border-secondary hover:text-secondary hover:shadow-xl transition-all flex items-center gap-2 ${uploadingId === d.id ? 'opacity-50 pointer-events-none' : ''}`}>
                            <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
                            {uploadingId === d.id ? 'TRAITEMENT...' : 'UPLOADER'}
                            <input 
                              type="file" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(d.id, e.target.files[0], 'autre')}
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                          </label>
                        </div>
                      </div>

                      {/* Documents List */}
                      {d.documents?.length > 0 ? (
                        <div className="pt-6 border-t border-gray-100/50 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <AnimatePresence>
                          {d.documents.map(doc => (
                            <motion.a 
                              key={doc.id} 
                              href={doc.path} 
                              target="_blank" 
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-secondary transition-all group/doc hover:shadow-lg"
                            >
                              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center group-hover/doc:bg-secondary group-hover/doc:text-white transition-all transform group-hover/doc:rotate-12">
                                <i className="fa-solid fa-file-pdf text-xl"></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-black text-primary truncate uppercase">{doc.originalName}</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-0.5">{doc.type} • {(doc.fileSize / 1024 / 1024).toFixed(1)}MB</div>
                              </div>
                            </motion.a>
                          ))}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div className="py-4 text-center">
                          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Aucun document attaché pour le moment</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {/* Profile Completion Card (DYNAMIQUE) */}
              <motion.div variants={itemVariants} className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
                <h3 className="text-xl font-black text-primary mb-8 tracking-tight">Profil & Sécurité</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Complétion</span>
                  <span className="text-lg font-black text-secondary">{completionScore}%</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full mb-10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${completionScore}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-secondary to-accent"
                  ></motion.div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-xl shadow-inner border border-green-100/50">
                      <i className="fa-solid fa-shield-check"></i>
                    </div>
                    <div>
                      <div className="text-sm font-black text-primary uppercase tracking-tight">Identité Validée</div>
                      <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Via Auth0 Secure</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-inner border ${completionScore > 80 ? 'bg-green-50 text-green-500 border-green-100/50' : 'bg-amber-50 text-amber-500 border-amber-100/50'}`}>
                      <i className={`fa-solid ${completionScore > 80 ? 'fa-building-circle-check' : 'fa-circle-exclamation'}`}></i>
                    </div>
                    <div>
                      <div className="text-sm font-black text-primary uppercase tracking-tight">Dossier KBIS</div>
                      <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
                        {completionScore > 80 ? 'Document vérifié' : 'Action requise'}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-gray-50 text-gray-500 font-black rounded-2xl border-2 border-transparent hover:border-secondary hover:bg-white hover:text-secondary transition-all mt-10 uppercase text-xs tracking-[0.2em] shadow-sm">
                  Modifier mes infos
                </button>
              </motion.div>

               {/* Advisor Card */}
               <motion.div 
                 variants={itemVariants}
                 whileHover={{ y: -5 }}
                 className="bg-gradient-to-br from-[#0A2540] to-primary rounded-[40px] p-10 text-white relative shadow-2xl overflow-hidden"
               >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-[20px] flex items-center justify-center border border-white/20 backdrop-blur-xl animate-float">
                    <i className="fa-solid fa-headset text-3xl text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-xl tracking-tight">Expert dédié</h3>
                    <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mt-1">Analyseur de risques</p>
                  </div>
                </div>
                <p className="text-sm text-white/70 mb-10 font-light leading-relaxed relative z-10 italic">
                  "Votre demande est actuellement en cours d'analyse par notre comité. Prévoyez une réponse définitive sous 48h."
                </p>
                <Link href="/contact" className="w-full py-4 bg-accent hover:bg-white hover:text-primary text-white font-black rounded-2xl transition-all block text-center shadow-[0_15px_30px_rgba(16,185,129,0.3)] relative z-10 uppercase text-xs tracking-widest">
                  Contacter mon conseiller
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
