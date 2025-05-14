# def rev(num):
#     reverse=""
#     while num>0:
#         reverse+=str(num%10)
#         num=num//10
#     return reverse
# print(rev(123))

def str(num):
    orgnum=num
    reversenum=0
    while num>0:
        digit=num%10
        reversenum=reversenum*10+digit
        num=num//10
    return reversenum==orgnum
num1=int(input("Enter a number: "))
if str(num1):
    print(f"{num1} is a palindrome")
else:
    print(f"{num1} is not a palindrome")
