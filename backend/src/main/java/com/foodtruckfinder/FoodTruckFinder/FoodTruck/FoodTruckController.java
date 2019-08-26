package com.foodtruckfinder.FoodTruckFinder.FoodTruck;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
