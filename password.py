import string
import random

def pass_gen():
    char = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
    try:
        password = "".join(random.sample(char, 8))
        return password
    except:
        print("Oops! That's not the valid number. Please try again.")
        pass_gen() 

# l = int(input())
output = pass_gen()
print(output)