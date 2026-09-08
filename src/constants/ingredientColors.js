const INGREDIENT_COLORS = {
  coffee: { bg: "#6F4E37", text: "#FFFFFF" },
  espresso: { bg: "#3E2723", text: "#FFFFFF" },
  "steamed milk": { bg: "#FFF8E7", text: "#212529" },
  milk: { bg: "#FFFFFF", text: "#212529" },
  "caramel syrup": { bg: "#D2691E", text: "#FFFFFF" },
  foam: { bg: "#F5F5DC", text: "#212529" },
  "hot water": { bg: "#ADD8E6", text: "#212529" },
  chocolate: { bg: "#5D4037", text: "#FFFFFF" },
  cocoa: { bg: "#7B3F00", text: "#FFFFFF" },
  tea: { bg: "#C0A062", text: "#FFFFFF" },
  ginger: { bg: "#C2A24F", text: "#212529" },
  cardamom: { bg: "#B8C06A", text: "#212529" },
  cinnamon: { bg: "#8B5A2B", text: "#FFFFFF" },
  "matcha powder": { bg: "#4CAF50", text: "#FFFFFF" },
  sugar: { bg: "#FFD700", text: "#212529" },
  ice: { bg: "#E0F7FA", text: "#212529" },
  "sparkling water": { bg: "#B3E5FC", text: "#212529" },
  syrup: { bg: "#D4A017", text: "#FFFFFF" },
  "whipped cream": { bg: "#FFFEF0", text: "#212529" },
  "caramel sauce": { bg: "#8B4513", text: "#FFFFFF" },
  "fresh oranges": { bg: "#FFA500", text: "#212529" },
  "lemon juice": { bg: "#FFEB3B", text: "#212529" },
  honey: { bg: "#F0C040", text: "#212529" },
};

const DEFAULT_INGREDIENT_COLOR = { bg: "#9E9E9E", text: "#FFFFFF" };

export function getIngredientColor(ingredient) {
  const key = String(ingredient).trim().toLowerCase().replace(/\*$/, "");
  return INGREDIENT_COLORS[key] ?? DEFAULT_INGREDIENT_COLOR;
}
