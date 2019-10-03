print a random integer between 0 to 100
import random
def randInt(min=0, max=100):
    num = random.random()* 100
    return num
print(randInt())

import random
def randInt(min=0, max=100):
    num = random.random()* 50
    return num
print(randInt())

print(randInt(max=10))
should print a random integer between 50 to 100
import random, math
def randInt(min=  0 , max=  100 ):
    num = random.random()
    return math.floor(num*(max-min)+min)

print(randInt(min=50))
# should print a random integer between 50 and 500
import random, math
def randInt(min=  0, max=  500 ):
    num = random.random()
    return math.floor(num*(max-min)+min)

print(randInt(min=50, max=500))




