import e, { Request, RequestHandler, Response } from 'express';
import { OkPacket } from 'mysql';
import { Food } from '../foods/foods.model';
import * as RestaurantDao from './restaurant.dao';
import * as FoodsDao from '../foods/foods.dao';
import { Restaurant } from './restaurant.model';

export const getAllRestaurants: RequestHandler = async (req: Request, res: Response) => {
  try {
    let restaurants = await RestaurantDao.readRestaurants();
    res.status(200).json(restaurants);

  }
  catch (err) {
    console.error(err);
    res.status(500).json({
        message: 'There was an error when fetching restaurants'
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
            message: 'There was an error when fetching restaurant'
        });
    }
};

export const createRestaurant: RequestHandler = async (req: Request, res: Response) => {
    try{
        const {name, location, category, avgWaitTime} = req.body;
        const result = await RestaurantDao.createRestaurant(name, location, category, avgWaitTime);
        res.status(201).json(result);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when creating restaurant'
        });
    }
};

export const updateRestaurant: RequestHandler = async (req: Request, res: Response) => {
    try{
        const {name, location, category, avgWaitTime} = req.body;
        const id = parseInt(req.params.id);
        const result = await RestaurantDao.updateRestaurant(name, location, category, avgWaitTime, id);
        res.status(200).json(result);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when updating restaurant'
        });
    }
};

export const deleteRestaurant: RequestHandler = async (req: Request, res: Response) => {
    try{
        let id = parseInt(req.params.id as string);

        console.log('id', id);
        if(!Number.isNaN(id)){
            const response = await RestaurantDao.deleteRestaurant(id);

            res.status(200).json(response);
        } else {
            throw new Error('Invalid id');
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when deleting restaurant'
        });
    }
};

export const getRestaurantMenu: RequestHandler = async (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        const menu = await FoodsDao.readFoods(id);
        res.status(200).json(menu);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when fetching menu'
        });
    }
};

export const addFoodToRestaurant: RequestHandler = async (req: Request, res: Response) => {
    try{
        const {name, calories, price, restaurantId} = req.body;
        const result = await FoodsDao.createFood(name, calories,  price, restaurantId);
        res.status(201).json(result);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when creating food'
        });
    }
}

export const getAllFoods: RequestHandler = async (req: Request, res: Response) => {
    try{
        const foods = await FoodsDao.getAllFoods();
        res.status(200).json(foods);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: 'There was an error when fetching foods'
        });
    }
}