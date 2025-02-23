import { execute } from '../services/mysql.connector';
import { Restaurant } from './restaurant.model';
import { restaurantQueries } from './restaurants.queries';

export const readRestaurants = async () => {
    return execute<Restaurant[]>(restaurantQueries.readRestaurants, []);
}

export const readRestaurantById = async (id: number) => {
    return execute<Restaurant[]>(restaurantQueries.readRestaurantById, [id]);
}

export const createRestaurant = async (name: string, location: string, category: string, avgWaitTime: number) => {
    return execute(restaurantQueries.createRestaurant, [name, location, category, avgWaitTime]);
}

export const updateRestaurant = async (name: string, location: string, category: string, avgWaitTime: number, id: number) => {
    return execute(restaurantQueries.updateRestaurant, [name, location, category, avgWaitTime, id]);
}

export const deleteRestaurant = async (id: number) => {
    return execute(restaurantQueries.deleteRestaurant, [id]);
}

