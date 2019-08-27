package com.foodtruckfinder.FoodTruckFinder.FoodTruck;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "food_truck")
public class FoodTruck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "truck_id")
    private long id;

    @Column(name = "name")
    private  String name;

    @Column(name = "email")
    private  String email;

    @JsonIgnore
    @Column(name = "password")
    private  String password;

    @Column(name = "subtitle")
    private  String subtitle;

    @Column(name = "description")
    private  String description;

    @Column(name = "review")
    private  Double review;

    @Column(name = "img")
    private  String img;

}