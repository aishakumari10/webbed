'''arr=[3,4,7,6]
i=0
j=len(arr)-1
while i<j:
    arr[i],arr[j]=arr[j],arr[i]'''

n=int(inpu('enter a number: '))
if n>1:
    if n//2==0:
        print("it is a prime number.")
    break
else:
    print("it is not a prime number.")