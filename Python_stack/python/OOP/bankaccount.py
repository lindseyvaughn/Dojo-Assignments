class BankAccount:
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def make_deposit(self,amount):
        self.balance += amount 
        return self

    def make_withdrawl(self,amount):
        self.balance -= amount 
        return self 

    def display_account_info(self):
        print(f"int_rate{self.int_rate}info:{self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
           self.balance = self.balance + self.balance * self.int_rate
        return self 

lin= BankAccount()
tae= BankAccount()

lin.make_deposit(100).make_deposit(100).make_deposit(103).make_withdrawl(60).yield_interest().display_account_info()



tae.make_deposit(200).make_deposit(200).make_withdrawl(50).make_withdrawl(50).make_withdrawl(50).make_withdrawl(50).display_account_info()

