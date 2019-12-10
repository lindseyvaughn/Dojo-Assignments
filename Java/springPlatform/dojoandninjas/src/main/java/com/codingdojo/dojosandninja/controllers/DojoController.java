package com.codingdojo.dojosandninja.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.dojosandninja.models.Dojo;
import com.codingdojo.dojosandninja.service.DojoService;


@Controller
public class DojoController {
	private final DojoService dojoService;
	
	public DojoController(DojoService dojoService) {
		this.dojoService = dojoService;
	}
////Route for CREATING a new Dojo/////////////////////////////////////////////////////////////////////////////	
	@RequestMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "/dojoandninjas/index.jsp";
	}
////POST route for CREATING a new Dojo//////////////////////////////////////////////////////////////////////// 
	@RequestMapping(value="/dojo/process", method= RequestMethod.POST)
	public String create(@Valid @ModelAttribute("dojo") Dojo createDojo, BindingResult result) {
		if(result.hasErrors()) {
			return "/dojoandninjas/index.jsp";
		} else {
			dojoService.createDojo(createDojo);
			return "redirect:/ninjas/new";
		}
		
	}
////Route for READING all Dojo's///////////////////////////////////////////////////////////////////////////////// 
//	@RequestMapping("/")
//	public String index(Model model) {
//		List<Dojo> dojos = dojoService.allDojos();
//		model.addAttribute("dojos", dojos);
//		return "/dojos_ninjas/readAll.jsp";
//	}
////Route for READING one Dojo by ID////////////////////////////////////////////////////////////////////////////	
	@GetMapping("/dojos/{dojo_id}")
	public String getDojo(@PathVariable("dojo_id") Long id, Model model) { 
		model.addAttribute("dojo", dojoService.findDojo(id));
		return "/dojoandninjas/readOne.jsp";
	}
//	

}
