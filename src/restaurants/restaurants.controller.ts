import e, { Request, RequestHandler, Response } from 'express';
import { OkPacket } from 'mysql';
import { Food } from '../foods/foods.model';
import * as RestaurantDao from './restaurant.dao';
import * as FoodsDao from '../foods/foods.dao';
import { Restaurant } from './restaurant.model';

export const getAllRestaurants: RequestHandler = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantDao.readRestaurants();
    res.status(200).json(restaurants);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({
        message: 'There was an error when fetching albums'
      });
  }
};

export const getRestaurantById: RequestHandler = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        const restaurant = await RestaurantDao.readRestaurantById(id);
        res.status(200).json(restaurant);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when fetching album'
        });
    }
};

async function readFoods(restaurants: Restaurant[], res: Response<any, Record<string, any>>){
    for(let i = 0; i < restaurants.length; i++){
        try{
            const foods = await FoodsDao.readFoods(restaurants[i].id);
            restaurants[i].menu = foods;
        }
        catch(err){
            console.error(err);
            res.status(500).json({
                message: 'There was an error when fetching foods'
            });
        }
    }
}