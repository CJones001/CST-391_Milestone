import { Restaurant } from './restaurants/restaurant.model';
import { Foods } from './foods/foods.model';

// Example data
const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tasty Bites",
    address: "123 Food St",
    cuisineType: "Italian",
    menu: [
      { id: 1, name: "Pizza", description: "Cheesy delight", price: 10, restaurantId: 1 },
      { id: 2, name: "Pasta", description: "Creamy Alfredo", price: 12, restaurantId: 1 }
    ]
  },
  {
    id: 2,
    name: "Sushi World",
    address: "456 Ocean Ave",
    cuisineType: "Japanese",
    menu: [
      { id: 3, name: "Sushi Roll", description: "Fresh salmon roll", price: 15, restaurantId: 2 },
      { id: 4, name: "Ramen", description: "Spicy miso ramen", price: 14, restaurantId: 2 }
    ]
  }
];

// Function to display restaurants in HTML
function displayRestaurants() {
  const restaurantList = document.getElementById("restaurant-list");
  if (!restaurantList) return;

  restaurantList.innerHTML = restaurants.map(restaurant =>
    `<li onclick="selectRestaurant(${restaurant.id})">${restaurant.name} - ${restaurant.cuisineType}</li>`
  ).join('');
}

// Function to display food menu
function selectRestaurant(id: number) {
  const selectedRestaurant = restaurants.find(r => r.id === id);
  const menuList = document.getElementById("menu-list");
  if (!menuList || !selectedRestaurant) return;

  menuList.innerHTML = selectedRestaurant.menu.map(food =>
    `<li>${food.name} - $${food.price} <button onclick="addToOrder(${food.id})">Add</button></li>`
  ).join('');
}

// Function to add an item to the order (stub)
function addToOrder(foodId: number) {
  console.log(`Added food item ${foodId} to order`);
}

displayRestaurants();

// Expose functions globally
(window as any).selectRestaurant = selectRestaurant;
(window as any).addToOrder = addToOrder;
