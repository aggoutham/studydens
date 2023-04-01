from flask import Flask, jsonify, request
import file

app = Flask(__name__)

@app.route("/locations")
def get_locations():
    return jsonify(file.get_locations_data())

@app.route("/users")
def get_users():
    return jsonify(file.get_users_data())

@app.route("/locations/add", methods=["POST"])
def add_location():
    data = file.get_locations_data()
    data.append(request.get_json())
    file.set_locations_data(data)
    return "", 204

@app.route("/users/add", methods=["POST"])
def add_user():
    data = file.get_users_data()
    data.append(request.get_json())
    file.set_users_data(data)
    return "", 204