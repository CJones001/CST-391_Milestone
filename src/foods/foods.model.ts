export interface Foods {
    id: number;
    name: string;
    description: string;
    price: number;
    restaurantId: number; // Foreign key reference to the restaurant
  }
  