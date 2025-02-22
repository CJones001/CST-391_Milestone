import { Request, RequestHandler, Response } from 'express';
import { OkPacket } from 'mysql';
import { Food } from '../foods/foods.model';
import * as FoodDao from '../foods/foods.dao';