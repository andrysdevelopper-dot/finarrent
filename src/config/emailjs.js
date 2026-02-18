// EmailJS Configuration - Templates distincts pour chaque type de demande
export const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  // Template pour demandes de financement et assurance (contact form)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  // Template pour inscription newsletter
  templateNewsletter: import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};
