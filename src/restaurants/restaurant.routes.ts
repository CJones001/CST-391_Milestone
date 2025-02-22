import { Router } from 'express';
import * as RestaurantController from './restaurants.controller';

const router = Router();

router.get('/restaurants', RestaurantController.getAllRestaurants);

router.get('/restaurants/:id', RestaurantController.getRestaurantById);

export default router;