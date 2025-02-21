import { Food } from "../foods/foods.model";

export interface Restaurant {
    id: number;
    name: string;
    address: string;
    cuisineType: string;
    menu: Food[]; // Array of food items available at the restaurant
  }
  