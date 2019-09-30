# 1. TASK: print "Hello World"
print( "Hello World" )
# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print( "Hello", name, "!" )	# with a comma
print( "Hello" + name + "!" )	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print( "Hello", name, "!" )	# with a comma
#print( "Hello" + name + "!" )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print( "I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print( f'I love to eat {fave_food1} and {fave_food2}.')# with an f string
#2a Store your name in a variable, and then use it to print the string “Hello {{your name}}!” using a comma in the print function 
name="Lindsey"
print("hello", name, "!")
#2b Store your name in a variable, and then use it to print the string “Hello {{your name}}!” using a + in the print function 
name="Lindsey"
print( "hello " +  name + "!")
#3a Store your favorite number in a variable, and then use it to print the string “Hello {{num}}!” using a comma in the print function 
name= 27
print( "hello", name, "!")
#3b Store your favorite number in a variable, and then use it to print the string “Hello {{num}}!” using a + in the print function
name= 27
print("hello " + str(name) + "!")
#4a Store 2 of your favorite foods in variables, and then use them to print the string “I love to eat {{food_one}} and {{food_two}}.” with the format method 
fave_food1 = "burrito"
fave_food2 = "pasta"
print( "I love to eat {} and {}.".format(fave_food1, fave_food2))
#4b Store 2 of your favorite foods in variables, and then use them to print the string “I love to eat {{food_one}} and {{food_two}}.” with f-strings 
fave_food1 = "burrito"
fave_food2 = "pasta"
print(f'I love to eat {fave_food1} and {fave_food2}.'