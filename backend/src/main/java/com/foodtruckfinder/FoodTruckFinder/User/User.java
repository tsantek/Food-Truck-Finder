package com.foodtruckfinder.FoodTruckFinder.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;


@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @Column(name = "name")
    private  String name;

    @Column(name = "email")
    private  String email;

    @JsonIgnore
    @Column(name = "password")
    private  String password;

    @Column(name = "img")
    private  String img;

}