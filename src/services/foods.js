import sizeList from "../data/size-list.json";
import toppingList from "../data/topping-list.json";
import pizzaList from "../data/pizza-list.json";

export const getSizes = () => {
  const result = sizeList.data;

  return result;
};

export const getToppingList = () => {
  const result = toppingList.data;

  return result;
};

export const getPizzaList = () => {
  const result = pizzaList.data;

  return result;
};
