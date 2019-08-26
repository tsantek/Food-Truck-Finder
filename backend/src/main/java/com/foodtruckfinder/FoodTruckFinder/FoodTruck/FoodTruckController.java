package com.foodtruckfinder.FoodTruckFinder.FoodTruck;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
        foodTruckRepository.save(foodTruck);
        return foodTruck;
    }

    @DeleteMapping("/delete/{truck_id}")
    public String deleteUser(@PathVariable Long truck_id){
        foodTruckRepository.deleteById(truck_id);
        return "Truck deleted";
    }




}
