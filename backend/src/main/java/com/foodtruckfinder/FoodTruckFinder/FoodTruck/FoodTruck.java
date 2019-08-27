package com.foodtruckfinder.FoodTruckFinder.FoodTruck;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.foodtruckfinder.FoodTruckFinder.User.User;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


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