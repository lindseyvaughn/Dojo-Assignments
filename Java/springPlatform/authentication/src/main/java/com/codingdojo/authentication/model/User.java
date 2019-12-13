package com.codingdojo.authentication.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.springframework.scheduling.config.Task;


//imports removed for brevity
@Entity
@Table(name="users")
public class User {
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 

 @Size(min=1, message="Please enter a name")
 private String name;
 

 @Email(message="Email Not Valid")
 private String email;
 

 @Size(min = 8, message = "Password must be atleast 8 characters")
 private String password;
 

 @Transient
 private String passwordConfirmation;
 

 @Column(updatable=false)
 private Date createdAt;
 private Date updatedAt;
 

 @OneToMany(mappedBy="creator", fetch=FetchType.LAZY)
 private List<Task> tasks;
 

 @OneToMany(mappedBy="assignee", fetch=FetchType.LAZY)
 private List<Task> assigned_tasks;
 

 public User() {}
 

 

public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}

public String getName() {
	return name;
}


public void setName(String name) {
	this.name = name;
}


public String getPassword() {
	return password;
}


public void setPassword(String password) {
	this.password = password;
}


public String getPasswordConfirmation() {
	return passwordConfirmation;
}


public void setPasswordConfirmation(String passwordConfirmation) {
	this.passwordConfirmation = passwordConfirmation;
}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}




public List<Task> getTasks() {
	return tasks;
}


public void setTasks(List<Task> tasks) {
	this.tasks = tasks;
}


public List<Task> getAssigned_tasks() {
	return assigned_tasks;
}


public void setAssigned_tasks(List<Task> assigned_tasks) {
	this.assigned_tasks = assigned_tasks;
}


@PrePersist
 protected void onCreate(){
     this.createdAt = new Date();
 }
 @PreUpdate
 protected void onUpdate(){
     this.updatedAt = new Date();
 }
}
