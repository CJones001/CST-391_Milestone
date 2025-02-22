import { execute } from '../services/mysql.connector';
import { Restaurant } from './restaurant.model';
import { restaurantQueries } from './restaurants.queries';

export const readRestaurants = async (): Promise<Restaurant[]> => {
  return await execute<Restaurant[]>(restaurantQueries.readRestaurants, []);
};
