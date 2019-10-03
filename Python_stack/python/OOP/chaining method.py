class User: 

    def __init__ (self,name,email):
        self.name = name 
        self.email = email
        self.balance = 0

    def make_deposit(self,amount):
        self.balance += amount 
        return self

    def make_withdrawl(self,amount):
        self.balance -= amount 
        return self
    def display_user_balance(self):
        print(f"user:{self.name}, balance:{self.balance}")
        return self

    def transfer_money(self,other_user,amount):
        self.balance -= amount
        other_user.balance += amount 
        return self 


#break 

lin= User("Lindsey Vaughn","lindsey.l.vaughn@gmail.com")
tae= User("Dante", "tae.d.d@gmail.com")
lo=User("lauren", "lo.d.d@gmail.com")

#break

lin.make_deposit(50).make_deposit(50).make_deposit(50).make_withdrawl(10).


lin.display_user_balance()

tae.make_deposit(10).make_deposit(10).make_withdrawl(5).make_withdrawl(5).


tae.display_user_balance()

lo.make_deposit(5).make_withdrawl(2).make_withdrawl(2).make_withdrawl(2).


lo.display_user_balance()

lin.transfer_money(lo,2)

lin.display_user_balance()