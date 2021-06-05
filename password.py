import string
import random

def pass_gen():
    char = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
    try:
        length = int(input("Enter the length of password : "))
        password = "".join(random.sample(char, length))
        print(password)
    except:
        print("Oops! That's not the valid number. Please try again.")
        pass_gen()  
pass_gen()