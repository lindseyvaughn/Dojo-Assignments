#1
def biggie(arr):
    for i in range(0,len(arr),1):
        if(arr[i]>0):
            arr[i]= 'big'
    return arr
print(biggie([1,-4,0,6,-3]))
#2
def count(arr):
    count=0
    for i in range(0, len(arr),1):
        if(arr[i]>0):
            count+=1
    arr[len(arr)-1]=count
    return arr
print(count([-1,4,0,6,-8]))
#3 
def sum(arr):
    sum=0
    for i in range(0,len(arr),1):
        sum+=arr[i]
    return sum
print(sum([1,2,3,4,5]))
#4
def average(arr):
    sum=0
    for i in range(0,len(arr),1):
        sum+=arr[i]
    return (sum/len(arr))
print(average([1,2,3,4,5]))
#5
def length(arr):
    return len(arr)
print(length([1,2,3,4,5]))
#6 
def minimum(arr):
    return min
print(minimum([4,-3,0,7,-6]))
#7 
def maximum(arr):
    return max(arr)
print(maximum([4,-3,0,7,-6]))
#8 
import statistics
def ultAnalysis(arr):
    return "sumTotal:", sum(arr), "max:", max(arr), "min:", min(arr),"avg:", statistics.mean(arr)
print(ultAnalysis([37,2,1,-9]))
#9 Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
def revList(arr):
    for i in range(int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-(i+1)]
        arr[len(arr)-(i+1)] = temp
    return arr
print(revList([1,2,3,4,5]))