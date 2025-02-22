import { Request, RequestHandler, Response } from 'express';
import { OkPacket } from 'mysql';
import { Food } from '../foods/foods.model';
import * as RestaurantDao from './restaurant.dao';

export const getAllRestaurants: RequestHandler = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantDao.readRestaurants();
    res.status(200).json(restaurants);
  }
  catch (err) {
    console.error(err);
    res.status(500);
  }
};