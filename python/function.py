def swap (a,b):
    a,b=b,a
    return a,b
x= int(input("enter a number"))
y=int(input("enter a number"))
x,y=swap(x,y)
a, b = swap(10, 20)
print("first number=",x)
print("second number=",y)
print("first number=",a)
print("second number=",b)


