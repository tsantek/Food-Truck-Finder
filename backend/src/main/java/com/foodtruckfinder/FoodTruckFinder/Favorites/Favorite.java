package com.foodtruckfinder.FoodTruckFinder.Favorites;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "favorite")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id")
    private long favorite_id;


    @Column(name = "user_id")
    private long user_id;

    @Column(name = "truck_id")
    private long truck_id;
}
