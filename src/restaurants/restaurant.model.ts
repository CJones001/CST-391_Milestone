import { Food } from "../foods/foods.model";

export interface Restaurant {
    id: number;
    name: string;
    location: string;
    category: string;
    avgWaitTime: number;
  }
  