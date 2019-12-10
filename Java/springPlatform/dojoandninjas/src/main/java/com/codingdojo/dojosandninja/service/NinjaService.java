package com.codingdojo.dojosandninja.service;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninja.models.Ninja;
import com.codingdojo.dojosandninja.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepository;
	
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
		
	}

	public Ninja createNinja(@Valid Ninja createNinja) {
		return ninjaRepository.save(createNinja);		
	}

}
