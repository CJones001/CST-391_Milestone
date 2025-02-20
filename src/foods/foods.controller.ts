import { Request, RequestHandler, Response } from 'express';
import { Food } from './food.model';
import {OkPacket} from 'mysql';

export const getAllFoods: RequestHandler = (req: Request, res: Response) => {
  res.json({ message: "Get all foods" });
};