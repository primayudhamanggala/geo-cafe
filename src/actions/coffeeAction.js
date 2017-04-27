import { ADD_COFFEE, EDIT_COFFEE, REMOVE_COFFEE } from './constants';


export const addCoffee = newCoffee => ({
  type: ADD_COFFEE,
  payload: newCoffee,
});

export const removeCoffee = coffeeId => ({
  type: REMOVE_COFFEE,
  payload: coffeeId,
});

export const editCoffee = editedCoffee => ({
  type: EDIT_COFFEE,
  payload: editedCoffee,
});
