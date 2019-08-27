package com.foodtruckfinder.FoodTruckFinder.FoodTruck;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface FoodTruckRepository extends CrudRepository <FoodTruck, Long> {
    @Query("SELECT food_truck FROM FoodTruck food_truck WHERE food_truck.email = ?1 AND food_truck.password = ?2")
    FoodTruck findByEmailPassword(String email, String md5DigestAsHex);
}
