export const formatPrice = (price: number) => 
  price.toLocaleString(
    'pt-br',
    { 
      style: 'currency', 
      currency: 'BRL', 
      minimumFractionDigits: 2 
    })