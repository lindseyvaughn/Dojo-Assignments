package com.codingdojo.models;

public class BankAccountTest {
	public static void main(String[] args) {
		BankAccount b = new BankAccount();
		BankAccount b1 = new BankAccount();
		
		System.out.println(b.getAccountNumber());
		System.out.println(b1.getAccountNumber());
		
		b.deposit("checking", 150.0);
		b.deposit("savings", 300.0);
		
		b1.deposit("checking", 500.0);
		b1.withdraw("checking", 25.0);
		
		System.out.println(b.getChecking());
		System.out.println(b.getSavings());
		
		System.out.println(b1.getChecking());
		System.out.println(b1.getSavings());
		
		System.out.println(BankAccount.allTheMoneys);
		System.out.println(BankAccount.numberOfAccountsPerUser);
	}

}