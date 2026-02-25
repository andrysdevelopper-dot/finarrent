/**
 * Génère un numéro de référence unique : FIN-AAAA-NNNNN
 */
export function generateReference() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 99999)
    .toString()
    .padStart(5, '0');
  return `FIN-${year}-${random}`;
}
