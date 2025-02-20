import { Router } from "express";
import * as FoodsController from "./foods.controller";

const router = Router();

router('/foods').get(FoodsController.getAllFoods);