package com.codingdojo.mvc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.mvc.models.Book;
import com.codingdojo.mvc.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
		
	}
	public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
        public Book updateBook(Long id,String title, String description, String language, int pages) {
            Book book = findBook(id);
            book.setTitle(title);
            book.setDescription(description);
            book.setLanguage(language);
            book.setNumberOfPages(pages);
            bookRepository.save(book);
            return book;
        }
        public void deleteBook(Long id) {
            Book book = findBook(id);
            bookRepository.delete(book);
        }
        public Book updateBook(Book b) {
            return bookRepository.save(b);
        }
        
    }

