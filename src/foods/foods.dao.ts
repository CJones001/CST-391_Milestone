import { execute } from '../services/mysql.connector';
import { Food } from './foods.model';
import { foodQueries } from './foods.queries';

export const getAllFoods = async () => {
  return execute<Food[]>(foodQueries.getAllFoods, []);
};

export const readFoods = async (restaurantId: number) => {
    return execute<Food[]>(foodQueries.readFood, [restaurantId]);
}

export const createFood = async (name: string, calories: number, price: number, restaurantId: number) => {
    return execute(foodQueries.createFood, [name, calories, price, restaurantId]);
}