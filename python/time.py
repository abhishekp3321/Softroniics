def time(seconds):
    hours = seconds // 3600
    minuties = seconds % 60
    seconds = seconds % 60
    return hours, minuties, seconds
num =int( input("Enter the number of seconds: "))
hours, minuties, seconds = time(num)
print(f"{hours} hours, {minuties} minuties, and {seconds} seconds")