import { Foods } from "../foods/foods.model";

export interface Restaurant {
    id: number;
    name: string;
    address: string;
    cuisineType: string;
    menu: Foods[]; // Array of food items available at the restaurant
  }
  