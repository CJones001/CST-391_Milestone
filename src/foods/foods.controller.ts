import { Request, RequestHandler, Response } from 'express';
import { Food } from './foods.model';
import {OkPacket} from 'mysql';
import * as FoodDao from './foods.dao';

export const getAllFoods: RequestHandler = async (req: Request, res: Response) => {
  try {
    const foods = await FoodDao.getAllFoods();
    res.status(200).json(foods);
  }
    catch (err) {
        console.error(err);
        res.status(500);
    }
};