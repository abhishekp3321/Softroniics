def days(days1):
    years=days1 // 365
    remaining = days1 % 365
    weeks= remaining // 7
    days1= remaining % 7
    
    return years, weeks, days1
num =int(input("Enter the number of days: "))

years, weeks, days = days(num)
print(f"{years} years, {weeks} weeks, and {days} days")