from flask import Flask, jsonify
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/api/data',  methods=['GET'])
def get_data():

    # data = { "members": ['M1', 'M2', 'M3' ]}
    data = [
    {
        "userId": 1,
        "name": "Eve Lee",
        "number": 82263406,
    }
    ]
    return data


if __name__ == "__main__":
    app.run(debug=True)