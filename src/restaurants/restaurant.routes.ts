import { Router } from 'express';
import * as RestaurantController from './restaurants.controller';

const router = Router();

router.get('/restaurants', RestaurantController.getAllRestaurants);

router.get('/restaurants/:id', RestaurantController.getRestaurantById);

router.post('/restaurants', RestaurantController.createRestaurant);

router.put('/restaurants/:id', RestaurantController.updateRestaurant);

router.delete('/restaurants/:id', RestaurantController.deleteRestaurant);

router.get('/restaurants/:id/menu', RestaurantController.getRestaurantMenu);

router.post('/restaurants/menu', RestaurantController.addFoodToRestaurant);

router.get('/restaurants/foods', RestaurantController.getAllFoods);

export default router;