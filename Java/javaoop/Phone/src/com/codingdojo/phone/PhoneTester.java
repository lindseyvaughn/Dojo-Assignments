package com.codingdojo.phone;

public class PhoneTester {

	public static void main(String[] args) {
		Galaxy s9 = new Galaxy("S9", 99, "Verizon", "Ring Ring Ring!");
		Iphone ix = new Iphone("X", 80, "ATT", "Zing!");
		
		s9.displayInfo();
		System.out.println(s9.ring());
		System.out.println(s9.unlock());
		
		ix.displayInfo();
		System.out.println(ix.ring());
		System.out.println(ix.unlock());

	}

}
