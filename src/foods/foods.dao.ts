import { execute } from '../services/mysql.connector';
import { Food } from './foods.model';
import { foodQueries } from './foods.queries';

export const getAllFoods = async (): Promise<Food[]> => {
  return await execute<Food[]>(foodQueries.getAllFoods, []);
};