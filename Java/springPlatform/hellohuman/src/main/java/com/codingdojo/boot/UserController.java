package com.codingdojo.boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@RequestMapping("/")
	public String usercontroller(@RequestParam(value="name", required=false) String name, @RequestParam(value="last_name", required=false) String last_name) {
		
		if (name == null) {
			return "Hello Human! Welcome to SpringBoot. ";
		}
		else {
			return "Hello " + name + " " + last_name +  "!" + "Welcome to SpringBoot";
		}
	}

}
