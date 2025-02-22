import { execute } from '../services/mysql.connector';
import { Food } from './foods.model';
import { foodQueries } from './foods.queries';

export const getAllFoods = async () => {
  return execute<Food[]>(foodQueries.getAllFoods, []);
};