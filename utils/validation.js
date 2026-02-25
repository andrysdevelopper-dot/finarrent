export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone) => /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone);
export const validateSIREN = (siren) => /^\d{9}$/.test((siren || '').replace(/\s/g, ''));
export const validateRequired = (value) => value && value.trim().length > 0;

export const validateForm = (formData, requiredFields) => {
  const errors = {};
  requiredFields.forEach(field => {
    if (!validateRequired(formData[field])) errors[field] = 'Ce champ est requis';
  });
  if (formData.email && !validateEmail(formData.email)) errors.email = 'Email invalide';
  if (formData.phone && !validatePhone(formData.phone)) errors.phone = 'Numéro de téléphone invalide';
  if (formData.siren && !validateSIREN(formData.siren)) errors.siren = 'SIREN invalide (9 chiffres requis)';
  if (requiredFields.includes('consent') && !formData.consent) errors.consent = 'Vous devez accepter la politique de confidentialité';
  return { isValid: Object.keys(errors).length === 0, errors };
};
