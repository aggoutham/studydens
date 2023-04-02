from flask import Flask, jsonify, request
import file

app = Flask(__name__)

'''
See all GET API
Return all locations
'''
@app.route("/locations")
def get_locations():
    return jsonify(file.get_locations_data())

'''
Not needed for now
'''
@app.route("/users")
def get_users():
    return jsonify(file.get_users_data())

'''
Not needed for now
'''
@app.route("/locations/add", methods=["POST"])
def add_location():
    data = file.get_locations_data()
    data.append(request.get_json())
    file.set_locations_data(data)
    return "", 204

'''
Not needed for now
'''
@app.route("/users/add", methods=["POST"])
def add_user():
    data = file.get_users_data()
    data.append(request.get_json())
    file.set_users_data(data)
    return "", 204

'''
Search, filter and location based GET API
request payload-
{
    "l_latitude": float,
    "l_longitude": float,
    "h_latitude": float,
    "h_longitude": float,
    "search": string,
    "type": string (indoor/outdoor),
    "capacity": int,
    "space": string (self/collaborative),
    "food_available": bool,
    "rating": float
}
'''
@app.route("/locations/searchfilter")
def get_specific_locations():
    data = file.get_locations_data()
    request_payload = request.get_json()
    specific_data = [d for d in data if request_payload["l_latitude"] <= d["latitude"] and d["latitude"] <= request_payload["h_latitude"] and request_payload["l_longitude"] <= d["longitude"] and d["longitude"] <= request_payload["h_longitude"]]
    if "type" in request_payload:
        specific_data = [d for d in specific_data if request_payload["type"] == d["type"]]
    if "capacity" in request_payload:
        specific_data = [d for d in specific_data if request_payload["capacity"] <= d["capacity"]]
    if "space" in request_payload:
        specific_data = [d for d in specific_data if request_payload["space"] == d["space"]]
    if "food_available" in request_payload:
        specific_data = [d for d in specific_data if request_payload["food_available"] == d["food_available"]]
    if "rating" in request_payload:
        specific_data = [d for d in specific_data if request_payload["rating"] <= d["rating"]]
    if "search" in request_payload:
        #TODO
        pass
    return jsonify(specific_data)

'''
Favorite locations GET API
request payload-
{
    "id": int
}
'''
@app.route("/user/favorites")
def get_favorites_locations():
    location_data = file.get_locations_data()
    user_data = file.get_users_data()
    request_payload = request.get_json()
    user = None
    for u in user_data:
        if request_payload["id"] == u["id"]:
            user = u
            break
    if u:
        return jsonify([d for d in location_data if d["id"] in u["favorites"]])
    return jsonify([])

'''
User progress GET API
request payload-
{
    "id": int
}
'''
@app.route("/user/progress")
def get_user_progress():
    data = file.get_users_data()
    request_payload = request.get_json()
    for u in data:
        if request_payload["id"] == u["id"]:
            return jsonify(u)
    return jsonify({})

'''
User friends GET API
request payload-
{
    "id": int
}
'''
@app.route("/user/friends")
def get_user_friends():
    data = file.get_users_data()
    request_payload = request.get_json()
    user = None
    for u in data:
        if request_payload["id"] == u["id"]:
            user = u
            break
    if u:
        return jsonify([d for d in data if d["id"] in u["friends"]])
    return jsonify([])

'''
User leaderboard GET API
request payload-
{
    "id": int
}
'''
@app.route("/user/leaderboard")
def get_user_leaderboard():
    data = file.get_users_data()
    request_payload = request.get_json()
    user = None
    for u in data:
        if request_payload["id"] == u["id"]:
            user = u
            break
    if u:
        specific_data = [d for d in data if d["id"] in u["friends"] or d["id"] == u["id"]]
        return jsonify(sorted([d for d in data if d["id"] in u["friends"] or d["id"] == u["id"]], key=lambda x: x["stars"], reverse=True))
    return jsonify([])