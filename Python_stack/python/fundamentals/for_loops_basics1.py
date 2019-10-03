#1
def printint0to150():
    for i in range(0,151):
        print(i)
printint0to150()
#2 
def printmult5to1000():
    for i in range(1,1001,5):
        print(i)
printmult5to1000()
#3
def printint1to100():
    for i in range(1,101):
        if i % 5 == 0:
            print("coding")
        if i % 10 == 0:
            print("coding dojo")
printint1to100()
#4
def whoa():
    sum=0
    for i in range(1,500000,2):
        sum+=i
    print(sum)
whoa()
#5
def countdown():
    for i in range(2018,0,-4):
        print(i)
countdown()
#6
def flexiable():
    lownum=0
    highnum=10
    mult=2
    for i in range(0, highnum):
        if i%mult ==0:
            print(i)
flexiable()




