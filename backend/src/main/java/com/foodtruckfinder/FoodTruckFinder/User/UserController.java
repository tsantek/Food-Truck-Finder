package com.foodtruckfinder.FoodTruckFinder.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private  final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<Collection<User>> getUsersWithFavorites() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{user_id}")
    public String deleteUser(@PathVariable Long user_id){
        userRepository.deleteById(user_id);
        return "User deleted";
    }

    @PatchMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User userUpdates) {
        User user = userRepository.findById(id).get();
        user.setName(userUpdates.getName());
        user.setEmail(userUpdates.getEmail());
        if (userUpdates.getPassword() != null)
            user.setPassword(DigestUtils.md5DigestAsHex(userUpdates.getPassword().getBytes()));
        user.setImg(userUpdates.getImg());
        return userRepository.save(user);
    }


    @PostMapping("/authenticate")
    public Map<String, Object> authenticate(@RequestBody User user) {
//        get authenticated
        User authenticatedUser = userRepository.findByEmailPassword(user.getEmail(), DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        HashMap<String, Object> result = new HashMap<>();
//        push to result autenticated
        result.put("authenticated", authenticatedUser != null);
        if (authenticatedUser != null)
            result.put("user", authenticatedUser);
        return result;
    }
}