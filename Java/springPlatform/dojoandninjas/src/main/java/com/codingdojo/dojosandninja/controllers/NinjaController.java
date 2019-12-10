package com.codingdojo.dojosandninja.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.dojosandninja.models.Dojo;
import com.codingdojo.dojosandninja.models.Ninja;
import com.codingdojo.dojosandninja.service.DojoService;
import com.codingdojo.dojosandninja.service.NinjaService;

@Controller
public class NinjaController {
private final NinjaService ninjaService;
private final DojoService dojoService;

	
	public NinjaController(NinjaService ninjaService, DojoService dojoService) {
		//Creating an instance from the Ninja Service??		
				this.ninjaService = ninjaService;
				this.dojoService = dojoService;
	}
////Route for CREATING a new Dojo/////////////////////////////////////////////////////////////////////////////	
	@RequestMapping("/ninjas/new")
	public String newNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "/dojoandninjas/createNinja.jsp";
	}
////POST route for CREATING a new Ninja/////////////////////////////////////////////////////////////////////// 	
	@RequestMapping(value = "/ninja/process", method = RequestMethod.POST)
	public String create(@Valid @ModelAttribute("ninja") Ninja createNinja, BindingResult result) {
		if (result.hasErrors()) {
			return "/dojos_ninjas/createNinja.jsp";
		} else {
			ninjaService.createNinja(createNinja);
			return "redirect:/ninjas/new";
		}
	}
	

}
