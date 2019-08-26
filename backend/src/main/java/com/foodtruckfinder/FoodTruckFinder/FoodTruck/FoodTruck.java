package com.foodtruckfinder.FoodTruckFinder.FoodTruck;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.foodtruckfinder.FoodTruckFinder.User.User;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
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
    private List<User> user = new ArrayList<User>();


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getReview() {
        return review;
    }

    public void setReview(Long review) {
        this.review = review;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }
}