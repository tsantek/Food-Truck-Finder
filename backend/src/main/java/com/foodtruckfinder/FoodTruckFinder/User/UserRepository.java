package com.foodtruckfinder.FoodTruckFinder.User;

import com.foodtruckfinder.FoodTruckFinder.FoodTruck.FoodTruck;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Collection<User> findAll();
}