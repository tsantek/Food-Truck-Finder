package com.foodtruckfinder.FoodTruckFinder.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Collection<User> findAll();
}