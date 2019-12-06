package com.codingdojo.languages.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.languages.models.Language;
import com.codingdojo.languages.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
		
	}
	public List<Language> allLanguages() {
        return languageRepository.findAll();
    }
	// creates a language
    public Language createLanguage(Language b) {
        return languageRepository.save(b);
    }
 // retrieves a language
    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }
    public Language updateLanguage(Long id,String name, String creator, String version) {
        Language language = findLanguage(id);
        language.setName(name);
        language.setCreator(creator);
        language.setVersion(version);
        languageRepository.save(language);
        return language;
    }
    public void deleteLanguage(Long id) {
        Language language = findLanguage(id);
        languageRepository.delete(language);
    }
    public Language updateLanguage(Language b) {
        return languageRepository.save(b);
    }
    

}
