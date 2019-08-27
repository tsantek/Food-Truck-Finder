package com.foodtruckfinder.FoodTruckFinder.FoodTruck;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/v1/foodtruck")
public class FoodTruckController {

    @Autowired
    public  final FoodTruckRepository foodTruckRepository;

    public FoodTruckController(FoodTruckRepository foodTruckRepository) {
        this.foodTruckRepository = foodTruckRepository;
    }

    @GetMapping
    public Iterable<FoodTruck> list(){
        return foodTruckRepository.findAll();
    }

    @PostMapping
    public FoodTruck addNewFoodTruckUser(@RequestBody FoodTruck foodTruck){
        foodTruck.setPassword(DigestUtils.md5DigestAsHex(foodTruck.getPassword().getBytes()));
        foodTruckRepository.save(foodTruck);
        return foodTruck;
    }

    @DeleteMapping("/delete/{truck_id}")
    public String deleteUser(@PathVariable Long truck_id){
        foodTruckRepository.deleteById(truck_id);
        return "Truck deleted";
    }

    @PatchMapping("/{id}")
    public FoodTruck update(@PathVariable Long id, @RequestBody FoodTruck userUpdates) {
        FoodTruck user = foodTruckRepository.findById(id).get();
        user.setName(userUpdates.getName());
        user.setEmail(userUpdates.getEmail());
        if (userUpdates.getPassword() != null)
            user.setPassword(DigestUtils.md5DigestAsHex(userUpdates.getPassword().getBytes()));
        user.setImg(userUpdates.getImg());
        user.setDescription((userUpdates.getDescription()));
        user.setSubtitle(userUpdates.getSubtitle());
        return foodTruckRepository.save(user);
    }

    @PatchMapping("/review/{id}/{score}")
    public FoodTruck update(@PathVariable Long id, @PathVariable Double score) {
        FoodTruck user = foodTruckRepository.findById(id).get();
        System.out.println(user.getReview());
        if(user.getReview() == null){
            user.setReview(score);
        }else {
            user.setReview((user.getReview() + score) / 2);
        }

        return foodTruckRepository.save(user);
    }

    @PostMapping("/authenticate")
    public Map<String, Object> authenticate(@RequestBody FoodTruck user) {
        FoodTruck authenticatedUser = foodTruckRepository.findByEmailPassword(user.getEmail(), DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        HashMap<String, Object> result = new HashMap<>();
        result.put("authenticated", authenticatedUser != null);
        if (authenticatedUser != null)
            result.put("user", authenticatedUser);
        return result;
    }
}
