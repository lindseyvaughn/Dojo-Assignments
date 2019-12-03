package com.codingdojo.models;

import java.util.Random;

public class BankAccount {
	private String accountNumber;
	private double checking;
	private double savings;
	
	public static int numberOfAccountsPerUser = 0;
	public static double allTheMoneys = 0.0;
	
	public BankAccount() {
		this.accountNumber = generateAccountNumber();
		
		numberOfAccountsPerUser ++;
	}
	
	private String generateAccountNumber() {
		String account = "";
		Random r = new Random();
		for(int i = 0 ; i < 10 ; i ++) {
			account += String.valueOf(r.nextInt(9));
		}
		return account;
		
	}
	
	public double deposit(String accountType, double amount) {
		if(accountType.equals("checking")) {
			this.checking += amount;
			allTheMoneys += amount;
			return this.checking;
		} else {
			this.savings += amount;
			allTheMoneys += amount;
			return this.savings;
		} 
	}
	
	public double withdraw(String accountType, double amount) {
		if(accountType.equals("checking")) {
			if(amount <= this.checking) {
				this.checking -= amount;
				allTheMoneys -= amount;
				return this.checking;
			} else {
				return this.checking;
			}
		} else {
			if(amount <= this.savings) {
				this.savings -= amount;
				allTheMoneys -= amount;
				return this.savings;
			} else {
				return this.savings;
			}
		}
	}
	
	// ------------ Getters/Setters ------------ //

	public String getAccountNumber() { 
		return this.accountNumber;
	}

	public double getSavings() {
		return this.savings;
	}

	public static int getNumberOfAccounts() {
		return numberOfAccountsPerUser;
	}

	public static double getAllTheMoneys() {
		return allTheMoneys;
	}

	public double getChecking() {
		return this.checking;
	}

	
}