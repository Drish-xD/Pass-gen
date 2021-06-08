from flask import Flask, render_template
from password import pass_gen

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    output = pass_gen()
    return render_template('index.html', password_gen=output)


if __name__ == '__main__':
    app.run(debug=True, port=8000)