package com.codingdojo.dojosandninja.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojosandninja.models.Dojo;



@Repository
public interface DojoRepository extends CrudRepository <Dojo, Long> {
////Retrieves ALL the Dojo's from the database
	List<Dojo>findAll();
////Retrieves one Dojo's by ID from the database
	Optional<Dojo> findById(Long id);


}
