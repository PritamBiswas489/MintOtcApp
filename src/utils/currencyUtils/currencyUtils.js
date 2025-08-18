export const formatPrice = (price, currValue) => {
  // Perform currency conversion or formatting based on currSymbol and currValue
  // Example: Here, I'm assuming the price is in USD and needs to be converted to the selected currency
  if (currValue === 'INR') {
    // Convert USD to INR
    return (price * 74.5).toFixed(2);
  } else if (currValue === 'GBP') {
    // Convert USD to GBP
    return (price * 0.73).toFixed(2);
  } else if (currValue === 'EUR') {
    // Convert USD to EUR
    return (price * 0.84).toFixed(2);
  } else {
    // Return the price without any conversion or formatting
    return price;
  }
};

export const formatAmount = amount => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(num)) {
    return '0.00'; // Fallback if parsing fails
  }

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const currencyMeta = {
  ILS: {symbol: '₪'},
  USD: {symbol: '$'},
  EUR: {symbol: '€'},
  GBP: {symbol: '£'},
  INR: {symbol: '₹'},
  THB: {symbol: '฿'},
  JPY: {symbol: '¥'},
  CNY: {symbol: '¥'},
  AUD: {symbol: 'A$'},
  CAD: {symbol: 'C$'},
  // Add more currencies as needed
};

export const getCurrencySymbol = code => {
  return currencyMeta[code]?.symbol || code;
};

export const formatCurrency = (amount, code, masked) => {
  return masked ? '•••••' : `${getCurrencySymbol(code)}${formatAmount(amount)}`;
};

export const formatCurrencyAmount = (amount, code) => {
  return `${getCurrencySymbol(code)}${Number(amount).toFixed(2)}`;
};
