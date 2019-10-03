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

class User: 

    def __init__ (self,name,email):
        self.name = name 
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
        return self
    def make_deposit(self,amount):
        self.account.make_deposit (amount) 
        return self
    def make_withdrawl(self,amount):
        self.account.make_withdrawl (amount) 
        return self
    def display_account_info(self):
        print(f"user:{self.name}, balance:{self.balance}")
        return self
    def transfer_money(self,other_user,amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        return self

lin= User("Lindsey Vaughn","lindsey.l.vaughn@gmail.com")
tae= User("Dante", "tae.d.d@gmail.com")
lo=User("lauren", "lo.d.d@gmail.com")

lin.make_deposit(100).make_deposit(100).make_deposit(103).make_withdrawl(60).yield_interest().display_account_info()

tae.make_deposit(200).make_deposit(200).make_withdrawl(50).make_withdrawl(50).make_withdrawl(50).make_withdrawl(50).display_account_info()

lo.make_deposit(50).make_deposit(20).make_withdrawl(20).make_withdrawl(5).make_withdrawl(20).make_withdrawl(40).display_account_info()