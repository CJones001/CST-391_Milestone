export const foodQueries = {

    getAllFoods: 'SELECT * FROM food_delivery.foods',
  
    getFoodById: 'SELECT * FROM foods WHERE id = ?',
  
    getFoodsByRestaurantId: 'SELECT * FROM foods WHERE restaurantId = ?',
  
    createFood: 'INSERT INTO food_delivery.foods (name, calories, price, restaurantId) VALUES (?, ?, ?, ?)',
  
    updateFood: 'UPDATE foods SET name = ?, calories = ?, price = ?, restaurantId = ? WHERE id = ?',
  
    deleteFood: 'DELETE FROM foods WHERE id = ?',

    readFood: 'SELECT * FROM foods WHERE id = ?'
}