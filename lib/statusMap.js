/**
 * Source unique pour les mappings de statuts Application.
 * Importer depuis ce fichier dans toutes les routes API et pages.
 */

/** Enum DB → label legacy (affiché au client) */
export const STATUS_TO_LEGACY = {
  PENDING:           'en_attente',
  REVIEWING:         'en_cours',
  DOCUMENTS_NEEDED:  'documents_manquants',
  QUOTE_SENT:        'devis_envoye',
  QUOTE_ACCEPTED:    'devis_accepte',
  PENDING_SIGNATURE: 'signature_en_attente',
  SIGNED:            'signe',
  TRANSMITTED:       'transmis',
  APPROVED:          'validee',
  REJECTED:          'refusee',
  COMPLETED:         'finalise',
};

/** Label legacy → enum DB */
export const STATUS_TO_DB = Object.fromEntries(
  Object.entries(STATUS_TO_LEGACY).map(([db, legacy]) => [legacy, db])
);

/** Liste des valeurs legacy valides */
export const VALID_LEGACY_STATUSES = Object.keys(STATUS_TO_DB);

/** ProductType → catégorie simplifiée */
export const PRODUCT_TO_REQUEST = {
  PRET_PRO:    'financement',
  CREDIT_BAIL: 'financement',
  LOA:         'financement',
  RC_PRO:      'assurance',
};
