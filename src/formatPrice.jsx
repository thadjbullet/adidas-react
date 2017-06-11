export default ({ price, currency }) => {
  switch (currency) {
    case 'USD':
      return `$${(price / 100).toFixed(2)}`;
    case 'EURO':
      return `€${(price / 100).toFixed(2)}`;
    case 'RUB':
      return `₽${(price / 100).toFixed(2)}`;
    default:
      return `${(price / 100).toFixed(2)}`;
  }
};
