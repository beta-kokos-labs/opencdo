from flask import Flask, render_template, jsonify, url_for, redirect

app=Flask(__name__)
app.config['SERVER_NAME'] = 'example.com'

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/', subdomain = 'sites')
def sites():
    return render_template('sites.html')



if __name__ == '__main__':
    app.run(debug=True)