/* @flow */

export const transformInputValues = (json: {
  currency: string,
  description: string,
  id: string,
  images: Array<any>,
  price: number,
  title: string,
  sizes: Array<any>,
}): Object => ({
  currency: json.currency,
  description: json.description,
  id: json.id,
  images: json.images,
  title: json.title,
  price: `${(json.price / 100).toFixed(2)}`,
  sizes: json.sizes,
  sale: Math.random() > 0.7,
});

export const formatPrice = ({ price, currency }: { price: string, currency: string }): string => {
  const currencies: { USD: string, EUR: string, RUB: string } = {
    USD: `$${price}`,
    EUR: `€${price}`,
    RUB: `${price}₽`,
  };
  return currencies[currency];
};
export const imageLink = (id: string, fileName: string, height: string) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;
export const getSizes = (products: Array<Object>): Array<Object> => {
  const sizes: Array<Object> = Array.from(
    new Set(products.reduce((newArr: Array<any>, arr: Object) => [...newArr, ...arr.sizes], [])),
  );
  return sizes.sort((a: any, b: any) => a - b);
};
