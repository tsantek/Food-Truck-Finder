package com.foodtruckfinder.FoodTruckFinder.FoodTruckLocation;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "food_truck_location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private long id;

    @Column(name = "lat")
    private  String lat;

    @Column(name = "lng")
    private  String lng;

    @Column(name = "location")
    private  String location;

    @Column(name = "location_date")
    private  String location_date;

    @Column(name = "location_time_start")
    private  String location_time_start;

    @Column(name = "location_time_end")
    private  String location_time_end;

    @Column(name = "truck_id")
    private  Long truck_id;

    @CreationTimestamp
    private Date time;

}
