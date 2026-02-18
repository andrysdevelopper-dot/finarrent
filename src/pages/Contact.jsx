import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import SEO from '../components/utils/SEO';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../config/emailjs';
import { validateForm } from '../utils/validation';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import FAQItem from '../components/ui/FAQItem';

// Map numeric amount to contact form select value
const getAmountOption = (amount) => {
  if (!amount || amount < 3000) return '';
  if (amount <= 10000) return '3 000€ - 10 000€';
  if (amount <= 30000) return '10 000€ - 30 000€';
  if (amount <= 50000) return '30 000€ - 50 000€';
  if (amount <= 100000) return '50 000€ - 100 000€';
  if (amount <= 200000) return '100 000€ - 200 000€';
  if (amount <= 500000) return '200 000€ - 500 000€';
  return 'Plus de 500 000€';
};

const Contact = () => {
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const simulatorData = location.state?.fromSimulator;
  const fromInsurance = location.state?.fromInsurance;

  const [formData, setFormData] = useState({
    requestType: 'financement',
    companyName: '',
    siren: '',
    sector: '',
    amount: '',
    equipmentType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    website: '' // Honeypot - doit rester vide (anti-spam)
  });

  const [errors, setErrors] = useState({});

  // Pre-fill from Insurance page - set request type to assurance
  useEffect(() => {
    if (fromInsurance) {
      setFormData(prev => ({ ...prev, requestType: 'assurance' }));
    }
  }, [fromInsurance]);

  // Pre-fill from Simulator when arriving from /simulator
  useEffect(() => {
    if (simulatorData?.amount) {
      const simulationMsg = `Simulation : ${simulatorData.amount.toLocaleString()}€ sur ${simulatorData.duration} mois - Mensualité estimée : ${simulatorData.monthlyPayment?.toLocaleString()}€`;
      setFormData(prev => ({
        ...prev,
        requestType: 'financement',
        amount: getAmountOption(simulatorData.amount),
        message: prev.message || simulationMsg
      }));
    }
  }, [simulatorData]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot : si rempli = bot
    if (formData.website) {
      setSubmitStatus('success'); // Faux succès pour ne pas alerter le bot
      return;
    }

    // Validation
    const requiredFields = ['companyName', 'siren', 'sector', 'amount', 'firstName', 'lastName', 'email', 'phone', 'consent'];
    const validation = validateForm(formData, requiredFields);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      // reCAPTCHA v3 - protection anti-spam
      let recaptchaToken = '';
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('contact_form');
      }

      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        {
          to_name: 'Équipe Finassur',
          from_name: `${formData.firstName} ${formData.lastName}`,
          request_type: formData.requestType === 'financement' ? 'Demande de financement' : 'Demande d\'assurance',
          company_name: formData.companyName,
          siren: formData.siren,
          sector: formData.sector,
          amount: formData.amount,
          equipment_type: formData.equipmentType || 'Non précisé',
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'Aucun message supplémentaire',
          recaptcha_token: recaptchaToken
        },
        emailJSConfig.publicKey
      );

      setSubmitStatus('success');
      setFormData({
        requestType: 'financement',
        companyName: '',
        siren: '',
        sector: '',
        amount: '',
        equipmentType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
        website: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Contactez Finassur pour votre demande de financement professionnel. Formulaire sécurisé, réponse sous 48h."
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Contact</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Obtenez votre financement en 3 minutes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Remplissez notre formulaire sécurisé et recevez une réponse de principe sous 48h. Simple, rapide et sans engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Info */}
                <ScrollReveal>
                  <div>
                    <h2 className="text-4xl font-bold text-primary mb-6">Pourquoi nous choisir ?</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      Finassur vous accompagne dans tous vos projets de financement professionnel avec des solutions adaptées et un service personnalisé.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-gray-700 font-medium">Réponse de principe en 48h</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-gray-700 font-medium">Sans engagement et gratuit</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-gray-700 font-medium">Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-check text-white text-sm"></i>
                        </div>
                        <span className="text-gray-700 font-medium">Données 100% sécurisées</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6 border border-secondary/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fa-solid fa-shield-halved text-white text-xl"></i>
                        </div>
                        <div>
                          <div className="font-bold text-primary mb-2">Vos données sont protégées</div>
                          <p className="text-sm text-gray-600">
                            Nous utilisons un cryptage SSL et respectons le RGPD pour garantir la confidentialité de vos informations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 space-y-4">
                      <h3 className="text-xl font-bold text-primary mb-4">Besoin d'aide ?</h3>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-phone text-secondary text-xl"></i>
                        <div>
                          <div className="text-sm text-gray-600">Téléphone</div>
                          <a href="tel:0123456789" className="font-semibold text-gray-900 hover:text-secondary">
                            01 23 45 67 89
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-envelope text-secondary text-xl"></i>
                        <div>
                          <div className="text-sm text-gray-600">Email</div>
                          <a href="mailto:contact@finassur.fr" className="font-semibold text-gray-900 hover:text-secondary">
                            contact@finassur.fr
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fa-solid fa-clock text-secondary text-xl"></i>
                        <div>
                          <div className="text-sm text-gray-600">Horaires</div>
                          <div className="font-semibold text-gray-900">Lun-Ven 9h-18h</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Right Column - Form */}
                <ScrollReveal delay={0.2}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot - invisible aux utilisateurs */}
                      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                        <label htmlFor="website">Ne pas remplir</label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          tabIndex="-1"
                          autoComplete="off"
                        />
                      </div>

                      {/* Type de demande */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Type de demande *
                        </label>
                        <select
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="financement">Financement (crédit-bail, LOA, crédit pro)</option>
                          <option value="assurance">Assurance professionnelle</option>
                        </select>
                      </div>

                      {/* Company Info */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Raison sociale de l'entreprise *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Ex: SARL Entreprise Dupont"
                          className={`input-field ${errors.companyName ? 'border-red-500' : ''}`}
                        />
                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Numéro SIREN *
                        </label>
                        <input
                          type="text"
                          name="siren"
                          value={formData.siren}
                          onChange={handleChange}
                          placeholder="123 456 789"
                          className={`input-field ${errors.siren ? 'border-red-500' : ''}`}
                        />
                        {errors.siren && <p className="text-red-500 text-sm mt-1">{errors.siren}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Secteur d'activité *
                        </label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className={`input-field ${errors.sector ? 'border-red-500' : ''}`}
                        >
                          <option value="">Sélectionnez votre secteur</option>
                          <option>BTP & Construction</option>
                          <option>Médical & Santé</option>
                          <option>Informatique & Tech</option>
                          <option>Transport & Logistique</option>
                          <option>Industrie</option>
                          <option>Services</option>
                          <option>Autre</option>
                        </select>
                        {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Montant du projet *
                        </label>
                        <select
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          className={`input-field ${errors.amount ? 'border-red-500' : ''}`}
                        >
                          <option value="">Sélectionnez un montant</option>
                          <option>3 000€ - 10 000€</option>
                          <option>10 000€ - 30 000€</option>
                          <option>30 000€ - 50 000€</option>
                          <option>50 000€ - 100 000€</option>
                          <option>100 000€ - 200 000€</option>
                          <option>200 000€ - 500 000€</option>
                          <option>Plus de 500 000€</option>
                        </select>
                        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Type d'équipement
                        </label>
                        <select
                          name="equipmentType"
                          value={formData.equipmentType}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Sélectionnez le type d'équipement</option>
                          <option value="vehicule">Véhicule / Flotte</option>
                          <option value="informatique">Matériel informatique</option>
                          <option value="medical">Équipement médical</option>
                          <option value="btp">Matériel BTP / Engins</option>
                          <option value="industriel">Machines industrielles</option>
                          <option value="bureau">Mobilier de bureau</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      {/* Personal Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Jean"
                            className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Dupont"
                            className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jean.dupont@entreprise.fr"
                          className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="06 12 34 56 78"
                          className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Message (optionnel)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Décrivez votre projet..."
                          className="input-field"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <span>Envoyer ma demande</span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </>
                        )}
                      </button>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                          <i className="fa-solid fa-check-circle mr-2"></i>
                          Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 48h.
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                          <i className="fa-solid fa-exclamation-circle mr-2"></i>
                          Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
                        </div>
                      )}

                      {/* Consentement RGPD - obligatoire */}
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className={`mt-1 h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary ${errors.consent ? 'border-red-500' : ''}`}
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          J'accepte que mes données soient traitées conformément à la{' '}
                          <Link to="/privacy" className="text-secondary hover:underline font-medium">
                            politique de confidentialité
                          </Link>
                          {' '}pour traiter ma demande. *
                        </label>
                      </div>
                      {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Questions fréquentes</h2>
                <p className="text-xl text-gray-600">Retrouvez les réponses aux questions les plus courantes</p>
              </div>
              <div className="space-y-4">
                <FAQItem
                  question="Quel est le délai de réponse pour une demande de financement ?"
                  answer="Nous nous engageons à vous donner une réponse de principe sous 48h ouvrées. Une fois votre dossier complet, la validation définitive intervient généralement sous 5 à 7 jours."
                />
                <FAQItem
                  question="Ai-je besoin d'un apport pour financer mon équipement ?"
                  answer="Non, le crédit-bail et la LOA permettent de financer 100% du montant de votre équipement sans apport initial. Cela préserve votre trésorerie pour d'autres investissements."
                />
                <FAQItem
                  question="Quels types d'équipements puis-je financer ?"
                  answer="Nous finançons tous types d'équipements professionnels : véhicules, matériel informatique, machines industrielles, équipements médicaux, matériel BTP, etc. De 3 000€ à 500 000€."
                />
                <FAQItem
                  question="La simulation est-elle engageante ?"
                  answer="Non, la simulation en ligne est totalement gratuite et sans engagement. Elle vous donne une estimation indicative. Seule une étude personnalisée de votre dossier aboutira à une offre ferme."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
