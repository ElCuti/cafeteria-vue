const COFFEE_PRICES = {
  1: 2.0,
  2: 3.5,
  3: 4.0,
  4: 3.5,
  5: 2.5,
  6: 2.0,
  7: 3.0,
  8: 4.0,
  9: 3.5,
  10: 4.0,
  11: 4.5,
  12: 3.0,
  13: 2.5,
  14: 3.5,
  15: 4.5,
  16: 5.0,
  17: 5.0,
  18: 3.0,
  19: 3.5,
  20: 3.0,
  55: 2.0,
};

const DEFAULT_COFFEE_PRICE = 3.0;

export function getCoffeePrice(id) {
  return COFFEE_PRICES[id] ?? DEFAULT_COFFEE_PRICE;
}