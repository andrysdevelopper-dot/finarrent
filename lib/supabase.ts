import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Variables Supabase manquantes : NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY requis');
}

/** Client Supabase avec la clé service (côté serveur uniquement) */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
});

const BUCKET = 'documents';

/**
 * Upload un fichier dans Supabase Storage.
 * Retourne l'URL publique du fichier.
 */
export async function uploadDocument(
  file: Buffer,
  fileName: string,
  mimeType: string,
  userId: string,
  applicationId: string
): Promise<string> {
  const timestamp = Date.now();
  const sanitized = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path = `${userId}/${applicationId}/${timestamp}_${sanitized}`;

  const { error } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(path, file, {
      contentType: mimeType,
      upsert: false,
    });

  if (error) {
    throw new Error(`Erreur upload Supabase : ${error.message}`);
  }

  return path;
}

/**
 * Génère une URL signée (valide 1h) pour accéder à un document privé.
 */
export async function getSignedUrl(filePath: string, expiresIn = 3600): Promise<string> {
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .createSignedUrl(filePath, expiresIn);

  if (error || !data?.signedUrl) {
    throw new Error(`Erreur URL signée : ${error?.message}`);
  }

  return data.signedUrl;
}

/**
 * Supprime un fichier du bucket Supabase Storage.
 */
export async function deleteDocument(filePath: string): Promise<void> {
  const { error } = await supabaseAdmin.storage.from(BUCKET).remove([filePath]);
  if (error) {
    throw new Error(`Erreur suppression Supabase : ${error.message}`);
  }
}
