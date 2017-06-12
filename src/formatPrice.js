export default ({ price, currency }) => {
  switch (currency) {
    case 'USD':
      return `$${price}`;
    case 'EURO':
      return `€${price}`;
    case 'RUB':
      return `${price}₽`;
    default:
      return `${price}`;
  }
};
