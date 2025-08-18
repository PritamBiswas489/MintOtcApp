export const maskCardNumber = (cardNumber: string): string => {
  const last4 = cardNumber?.slice(-4);
  return last4 ? `•••• ${last4}` : '';
};
export const formatExpiry = (exp: string): string => {
  const clean = exp.replace(/[^\d]/g, ''); // remove non-numeric chars
  if (clean.length === 4) {
    return `${clean.substring(0, 2)}/${clean.substring(2)}`;
  }
  return exp;
};
export const maskCard = (cardNumber?: string, last4?: string) => {
  const l4 = (last4 ?? cardNumber?.slice(-4) ?? '').replace(/\s/g, '');
  return l4 ? `•••• •••• •••• ${l4}` : 'N/A';
};
export const formatMaskedCardFromApi = (raw: string, maskChar = '•') => {
  if (!raw) return '';

  // keep only digits and asterisks (API already masked)
  const s = String(raw).replace(/[^\d*]/g, '');
  const m = s.match(/^(\d+)(\*+)(\d{2,4})$/);
  if (!m) {
    // fallback: group digits in 4s if pattern is unexpected
    const digits = s.replace(/\D/g, '');
    return digits.replace(/(.{4})/g, '$1 ').trim();
  }

  const [, head, stars, tail] = m;
  const headFirst4 = head.slice(0, 4);
  const headRest = head.slice(4); // often 2 digits (BIN/IIN = 6)

  const parts = [];
  if (headFirst4) parts.push(headFirst4);
  if (headRest) parts.push(headRest);
  parts.push(maskChar.repeat(stars.length));
  parts.push(tail);
  return parts.join(' ');
};