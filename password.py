import string
import random

def pass_gen():

    char = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
    password = "".join(random.sample(char, random.randint(8, 16)))
    return password