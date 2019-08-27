package com.foodtruckfinder.FoodTruckFinder.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Collection<User> findAll();
    @Query("SELECT users FROM User users WHERE users.email = ?1 AND users.password = ?2")
    User findByEmailPassword(String email, String password);
}