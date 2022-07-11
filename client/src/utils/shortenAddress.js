export const shortenAddress = (address) =>
  address.slice(0, 5).toUpperCase() + "..." + address.slice(-5).toUpperCase();
