export const restaurantQueries = {
    
    readRestaurants: 
    `SELECT id as restaurantId, name, location, category, avgWaitTime 
    FROM food_delivery.restaurant`,

    readRestaurantById: 
    `SELECT id as restaurantId, name, location, category, avgWaitTime 
    FROM food_delivery.restaurant 
    WHERE id = ?`,

    createRestaurant:
    `INSERT INTO food_delivery.restaurant (name, location, category, avgWaitTime) VALUES (?, ?, ?, ?)`,

    updateRestaurant:
    `UPDATE food_delivery.restaurant SET name = ?, location = ?, category = ?, avgWaitTime = ? 
    WHERE id = ?`,

    deleteRestaurant:
    `DELETE FROM food_delivery.restaurant WHERE id = ?`

}
