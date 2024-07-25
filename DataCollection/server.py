from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, db
import json
from datetime import datetime

app = Flask(__name__)

# Load Firebase config
with open('config.json') as config_file:
    config = json.load(config_file)

# Initialize Firebase
cred = credentials.Certificate(config)
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://agrisure-nikilteam-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

@app.route('/post_data', methods=['POST'])
def post_data():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    # Use the current time as the key
    current_time = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    ref = db.reference('/')
    ref.child(current_time).set(data)

    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
