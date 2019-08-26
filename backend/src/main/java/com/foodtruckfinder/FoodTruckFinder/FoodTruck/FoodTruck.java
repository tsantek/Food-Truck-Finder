package com.foodtruckfinder.FoodTruckFinder.FoodTruck;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.foodtruckfinder.FoodTruckFinder.User.User;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


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

    @Column(name = "description")
    private  String description;

    @Column(name = "review")
    private  Long review;

    @Column(name = "img")
    private  String img;




    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "favorites", joinColumns = {
            @JoinColumn(name = "truck_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "user_id",
                    nullable = false, updatable = false) })
    @JsonBackReference
    private List<User> user;

}