export default (price, currency) =>
  (price !== undefined ? `${currency}${(price / 100).toFixed(2)}` : '$0.00');
