package com.foodtruckfinder.FoodTruckFinder.Favorites;


import com.foodtruckfinder.FoodTruckFinder.FoodTruck.FoodTruck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/favorites")
public class FavoriteController {

        @Autowired
        private  final FavoriteRespository favoriteRespository;

        public FavoriteController(FavoriteRespository favoriteRespository) {
            this.favoriteRespository = favoriteRespository;
        }

        @GetMapping
        public Iterable<Favorite> list(){
            return favoriteRespository.findAll();
        }

        @PostMapping
        public Favorite addNewFoodTruckUser(@RequestBody Favorite favorite){
            return favoriteRespository.save(favorite);
        }

        @DeleteMapping("/delete/{favorite_id}")
        public String deleteUser(@PathVariable Long favorite_id){
            favoriteRespository.deleteById(favorite_id);
            return "Truck deleted";
        }
}
