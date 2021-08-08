from flask import Flask, render_template, request, url_for, redirect
import string
import random
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        num = int(request.form.get("pass-len"))
        char = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
        password = "".join(random.choice(char)for _ in range(num))
        return render_template('index.html', password_gen = password)
    return render_template('index.html',  password_gen = "Password")
    
if __name__ == '__main__':
    app.run(debug=True, port=2000)