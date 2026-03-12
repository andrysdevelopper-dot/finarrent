import { z } from 'zod';

// ─── ENUMS ────────────────────────────────────────────────
export const ProductTypeEnum = z.enum([
  'PRET_PRO',
  'CREDIT_BAIL',
  'LOA',
  'LLD',
  'LEASING_OPS',
  'RC_PRO',
]);

export const ApplicationStatusEnum = z.enum([
  'PENDING',
  'REVIEWING',
  'DOCUMENTS_NEEDED',
  'QUOTE_SENT',
  'QUOTE_ACCEPTED',
  'PENDING_SIGNATURE',
  'SIGNED',
  'TRANSMITTED',
  'APPROVED',
  'REJECTED',
  'COMPLETED',
]);

export const DocumentTypeEnum = z.enum(['KBIS', 'RIB', 'CNI', 'BILAN', 'CONTRAT', 'AUTRE']);
export const PartnerTypeEnum = z.enum(['BANK', 'INSURANCE', 'LEASING']);
export const RoleEnum = z.enum(['CLIENT', 'ADMIN', 'PARTNER']);

// ─── APPLICATION ──────────────────────────────────────────
export const CreateApplicationSchema = z.object({
  productType: ProductTypeEnum,
  amount: z.number().min(1000).max(10_000_000).optional(),
  duration: z.number().int().min(12).max(84).optional(),
  equipmentType: z.string().max(200).optional(),
  siren: z
    .string()
    .regex(/^\d{9}$/, 'SIREN invalide (9 chiffres requis)')
    .optional(),
  companyName: z.string().min(1, 'Raison sociale requise').max(200).optional(),
  legalForm: z.string().max(100).optional(),
  sector: z.string().max(100).optional(),
  description: z.string().max(2000).optional(),
});

export const UpdateApplicationSchema = z.object({
  status: ApplicationStatusEnum.optional(),
  comment: z.string().max(500).optional(),
  adminNotes: z.string().max(5000).optional(),
  partnerId: z.string().cuid('ID partenaire invalide').optional().nullable(),
  quoteDetails: z.record(z.string(), z.unknown()).optional(),
  transmittedAt: z.string().datetime().optional(),
});

// ─── DOCUMENT ─────────────────────────────────────────────
export const UploadDocumentSchema = z.object({
  applicationId: z.string().cuid('ID dossier invalide'),
  type: DocumentTypeEnum.default('AUTRE'),
});

// ─── MESSAGE ──────────────────────────────────────────────
export const CreateMessageSchema = z.object({
  applicationId: z.string().cuid('ID dossier invalide'),
  content: z.string().min(1, 'Message requis').max(5000),
  isAdminOnly: z.boolean().default(false),
});

// ─── PARTENAIRE ───────────────────────────────────────────
export const CreatePartnerSchema = z.object({
  name: z.string().min(1, 'Nom requis').max(200),
  type: PartnerTypeEnum,
  contactEmail: z.string().email('Email invalide'),
  notes: z.string().max(1000).optional(),
});

export const UpdatePartnerSchema = CreatePartnerSchema.partial().extend({
  isActive: z.boolean().optional(),
});

// ─── COMMISSION ───────────────────────────────────────────
export const CreateCommissionSchema = z.object({
  applicationId: z.string().cuid(),
  partnerId: z.string().cuid(),
  amount: z.number().positive('Montant requis'),
  rate: z.number().min(0).max(100, 'Taux invalide (0-100%)'),
});

// ─── SYNC USER ────────────────────────────────────────────
export const SyncUserSchema = z.object({
  sub: z.string().min(1),
  email: z.string().email(),
  name: z.string().optional(),
});

// ─── NEWSLETTER ───────────────────────────────────────────
export const NewsletterSchema = z.object({
  email: z.string().email('Email invalide'),
});

// ─── CONTACT ──────────────────────────────────────────────
export const ContactSchema = z.object({
  name: z.string().min(1, 'Nom requis').max(100),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Téléphone invalide')
    .optional(),
  subject: z.enum(['financement', 'assurance', 'suivi', 'partenariat', 'autre']),
  message: z.string().min(10, 'Message trop court').max(3000),
});

// ─── SIMULATEUR ───────────────────────────────────────────
export const SimulateurSchema = z.object({
  amount: z.number().min(1000).max(10_000_000),
  duration: z.number().int().min(12).max(84),
  productType: ProductTypeEnum,
});

// ─── TYPES INFÉRÉS ────────────────────────────────────────
export type CreateApplicationInput = z.infer<typeof CreateApplicationSchema>;
export type UpdateApplicationInput = z.infer<typeof UpdateApplicationSchema>;
export type CreateMessageInput = z.infer<typeof CreateMessageSchema>;
export type CreatePartnerInput = z.infer<typeof CreatePartnerSchema>;
export type UpdatePartnerInput = z.infer<typeof UpdatePartnerSchema>;
export type ContactInput = z.infer<typeof ContactSchema>;
export type SimulateurInput = z.infer<typeof SimulateurSchema>;
