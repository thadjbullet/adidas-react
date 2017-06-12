export const transformInputValues = json => ({
  currency: json.currency,
  description: json.description,
  id: json.id,
  images: json.images,
  title: json.title,
  price: `${(json.price / 100).toFixed(2)}`,
  sizes: json.sizes,
  sale: Math.random() > 0.7,
});

export const formatPrice = ({ price, currency }) => {
  const currencies = {
    USD: `$${price}`,
    EUR: `€${price}`,
    RUB: `${price}₽`,
  };
  return currencies[currency];
};

export const imageLink = (id, fileName, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export const fetchSizes = (products) => {
  const sizes = Array.from(
    new Set(products.reduce((newArr, arr) => [...newArr, ...arr.sizes], [])),
  );
  return sizes.sort();
};
