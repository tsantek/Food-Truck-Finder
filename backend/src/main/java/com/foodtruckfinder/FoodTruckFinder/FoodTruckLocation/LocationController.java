package com.foodtruckfinder.FoodTruckFinder.FoodTruckLocation;

import com.foodtruckfinder.FoodTruckFinder.FoodTruck.FoodTruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/location")
public class LocationController {

    @Autowired
    private final LocationRepository locationRepository;
    private final FoodTruckRepository foodTruckRepository;

    public LocationController(LocationRepository locationRepository, FoodTruckRepository foodTruckRepository) {
        this.locationRepository = locationRepository;
        this.foodTruckRepository = foodTruckRepository;
    }

    @GetMapping
    public ArrayList<Location> getUsersWithFavorites() {
        return (ArrayList<Location>) locationRepository.findAll();
    }

    @PostMapping("/{truck_id}")
    public Location addLocation(@PathVariable Long truck_id, @RequestBody Location location){
            location.setTruck_id(truck_id);
            return locationRepository.save(location);
    }

    @DeleteMapping("/delete/{location_id}")
    public void deleteLocation(@PathVariable Long location_id){
        locationRepository.deleteById(location_id);
    }
}
