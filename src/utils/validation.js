// Email validation
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Phone validation (French format)
export const validatePhone = (phone) => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone);
};

// SIREN validation (9 digits)
export const validateSIREN = (siren) => {
    const sirenRegex = /^\d{9}$/;
    return sirenRegex.test(siren.replace(/\s/g, ''));
};

// Required field validation
export const validateRequired = (value) => {
    return value && value.trim().length > 0;
};

// Form validation
export const validateForm = (formData, requiredFields) => {
    const errors = {};

    requiredFields.forEach(field => {
        if (!validateRequired(formData[field])) {
            errors[field] = 'Ce champ est requis';
        }
    });

    // Email specific validation
    if (formData.email && !validateEmail(formData.email)) {
        errors.email = 'Email invalide';
    }

    // Phone specific validation
    if (formData.phone && !validatePhone(formData.phone)) {
        errors.phone = 'Numéro de téléphone invalide';
    }

    // SIREN specific validation
    if (formData.siren && !validateSIREN(formData.siren)) {
        errors.siren = 'SIREN invalide (9 chiffres requis)';
    }

    // RGPD consent validation
    if (requiredFields.includes('consent') && !formData.consent) {
        errors.consent = 'Vous devez accepter la politique de confidentialité';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
