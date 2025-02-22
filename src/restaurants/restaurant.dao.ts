import { execute } from '../services/mysql.connector';
import { Restaurant } from './restaurant.model';
import { restaurantQueries } from './restaurants.queries';

export const readRestaurants = async () => {
    return execute<Restaurant[]>(restaurantQueries.readRestaurants, []);
}

export const readRestaurantById = async (id: number) => {
    return execute<Restaurant[]>(restaurantQueries.readRestaurantById, [id]);
}