#1
def countdown(num):
  for x in range(num, -1, -1):
    print (x)
countdown(5)
#2
def print_and_return(arr):
    print(arr[0])
    return(arr[1])
print(print_and_return([1,4]))
#3
def first_plus_length(arr):
        return arr[0] + len(arr)
print(first_plus_length([2,3,-1,0,5]))
#4
def second(arr):
    newarr=[]
    if(len(arr)<2):
        return False 
    else:
        for i in range(0, len(arr), 1):
            if(arr[i]>arr[1]):
                newarr.append(arr[i])
    return newarr
print (second([2,2,-1,0,8]))
print (second ([9]))
#5
def length(s,v):
    arr=[]
    for i in range(0,s,1):
        arr.append(v)
    return arr
print(length(5,9))
