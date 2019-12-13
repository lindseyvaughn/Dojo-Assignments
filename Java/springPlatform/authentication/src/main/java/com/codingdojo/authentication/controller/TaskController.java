package com.codingdojo.authentication.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.authentication.model.Task;
import com.codingdojo.authentication.model.User;

@Controller 
public class TaskController {
	@RequestMapping("/tasks/new")
	public String newTask(Model model, @ModelAttribute("task") Task task, HttpSession session) {
		List<User> users = userService.allUsers();
		model.addAttribute("users", users);
		Long userId = (Long) session.getAttribute("user_id");
		User u = taskService.findUserById(userId);
		model.addAttribute("user", u);
		return "/newTask.jsp";
	}
}
