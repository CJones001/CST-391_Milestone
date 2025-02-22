export const restaurantQueries = {
    
    readRestaurants: 
    `SELECT * FROM restaurant`,

    readRestaurantById: 
    `SELECT * FROM restaurant 
    WHERE id = ?`,

    createRestaurant:
    `INSERT INTO restaurant (name, location, category, avgWaitTime) VALUES (?, ?, ?, ?)`,

    updateRestaurant:
    `UPDATE restaurant SET name = ?, location = ?, category = ?, avgWaitTime = ? 
    WHERE id = ?`,

    deleteRestaurant:
    `DELETE FROM restaurant WHERE id = ?`

}
