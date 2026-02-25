/**
 * Vérifie le token reCAPTCHA v3 côté serveur
 * @param {string} token - Token reCAPTCHA du client
 * @returns {Promise<{success: boolean, score?: number}>}
 */
export async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    // En dev sans clé secrète : accepter les tokens de test
    if (token === 'test-token' || !token) return { success: true };
    return { success: false };
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });
    const data = await res.json();
    return {
      success: data.success === true,
      score: data.score,
    };
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return { success: false };
  }
}
