package com.codingdojo.authentication.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="tasks")
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	

	@Size(min=1, message="Please enter a name for your task")
	private Long task_name;
	

	private Boolean completed;
	

	private String priority;
	

	@Column(updatable=false)
	private Date createdAt;
	private Date updatedAt;
	

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="creator_id")
	private User creator;
	

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="assignee_id")
	private User assignee;

	public Task() {}

	public Task(Long id, Long task_name, Boolean completed, User creator, User assignee, String priority) {
		this.id = id;
		this.task_name = task_name;
		this.completed = completed;
		this.creator = creator;
		this.assignee = assignee;
		this.priority = priority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTask_name() {
		return task_name;
	}

	public void setTask_name(Long task_name) {
		this.task_name = task_name;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public User getAssignee() {
		return assignee;
	}

	public void setAssignee(User assignee) {
		this.assignee = assignee;
	}
	

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
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

