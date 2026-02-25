/**
 * Rate limiting simple en mémoire (pour une instance)
 * En production, utiliser Redis ou Upstash pour multi-instance
 */
const requests = new Map();
const WINDOW_MS = 60 * 60 * 1000; // 1 heure
const MAX_REQUESTS = 5;

export function checkRateLimit(ip) {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record) {
    requests.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (now - record.firstRequest > WINDOW_MS) {
    requests.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  record.count++;
  if (record.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}
