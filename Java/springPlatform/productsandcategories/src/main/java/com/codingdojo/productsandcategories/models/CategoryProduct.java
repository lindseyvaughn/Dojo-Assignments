package com.codingdojo.productsandcategories.models;

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

@Entity
@Table(name="categories_products")
public class CategoryProduct {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
    private Long id;
	
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_id")
    private product product;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id")
    private category category;
    
    public CategoryProduct() {
        
    }
    @PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public product getProduct() {
		return product;
	}
	public void setProduct(product product) {
		this.product = product;
	}
	public category getCategory() {
		return category;
	}
	public void setCategory(category category) {
		this.category = category;
	}
}