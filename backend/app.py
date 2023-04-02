from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import file
import recommender
import search_filter

glove_model = search_filter.load_glove_model()
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

'''
See all GET API
Return all locations
'''
@app.route("/locations")
@cross_origin()
def get_locations():
    return jsonify(file.get_locations_data())

'''
Not needed for now
'''
@app.route("/users")
@cross_origin()
def get_users():
    return jsonify(file.get_users_data())

'''
Not needed for now
'''
@app.route("/locations/add", methods=["POST"])
@cross_origin()
def add_location():
    data = file.get_locations_data()
    data.append(request.get_json())
    file.set_locations_data(data)
    return "", 204

'''
Not needed for now
'''
@app.route("/users/add", methods=["POST"])
@cross_origin()
def add_user():
    data = file.get_users_data()
    data.append(request.get_json())
    file.set_users_data(data)
    return "", 204

'''
Search, filter and location based POST API
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
@app.route("/locations/searchfilter", methods=["POST"])
@cross_origin()
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
        specific_data = search_filter.search_filter(request_payload["search"], specific_data, glove_model)
    return jsonify(specific_data), 200

'''
Favorite locations POST API
request payload-
{
    "id": int
}
'''
@app.route("/user/favorites", methods=["POST"])
@cross_origin()
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
        return jsonify([d for d in location_data if d["id"] in u["favorites"]]), 200
    return jsonify([]), 406

'''
User progress POST API
request payload-
{
    "id": int
}
'''
@app.route("/user/progress", methods=["POST"])
@cross_origin()
def get_user_progress():
    data = file.get_users_data()
    request_payload = request.get_json()
    for u in data:
        if request_payload["id"] == u["id"]:
            return jsonify(u), 200
    return jsonify({}), 406

'''
User friends POST API
request payload-
{
    "id": int
}
'''
@app.route("/user/friends", methods=["POST"])
@cross_origin()
def get_user_friends():
    data = file.get_users_data()
    request_payload = request.get_json()
    user = None
    for u in data:
        if request_payload["id"] == u["id"]:
            user = u
            break
    if u:
        return jsonify([d for d in data if d["id"] in u["friends"]]), 200
    return jsonify([]), 406

'''
User leaderboard POST API
request payload-
{
    "id": int
}
'''
@app.route("/user/leaderboard", methods=["POST"])
@cross_origin()
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
        return jsonify(sorted([d for d in data if d["id"] in u["friends"] or d["id"] == u["id"]], key=lambda x: x["stars"], reverse=True)), 200
    return jsonify([]), 406


'''
User add favorite PUT API
request payload-
{
    "user_id": int,
    "location_id": int,
    "save": bool
}
'''
@app.route("/user/addfavorite", methods=["PUT"])
@cross_origin()
def add_user_favorite():
    data = file.get_users_data()
    request_payload = request.get_json()
    index = -1
    for i in range(len(data)):
        if request_payload["user_id"] == data[i]["id"]:
            index = i
            break
    if index != -1:
        if request_payload["save"]:
            if request_payload["location_id"] not in data[index]["favorites"]:
                data[index]["favorites"].append(request_payload["location_id"])
                file.set_users_data(data)
        else:
            if request_payload["location_id"] in data[index]["favorites"]:
                data[index]["favorites"].remove(request_payload["location_id"])
                file.set_users_data(data)
        return "", 204
    return "", 406

'''
Edit location for adding a rating and a review PUT API
request payload-
{
    "id": int,
    "rating": float,
    "review": string
}
'''
@app.route("/location/addreviewrating", methods=["PUT"])
@cross_origin()
def edit_location():
    data = file.get_locations_data()
    request_payload = request.get_json()
    index = -1
    for i in range(len(data)):
        if request_payload["id"] == data[i]["id"]:
            index = i
            break
    if index != -1:
        data[index]["reviews"].append(request_payload["review"])
        data[index]["rating"] = round(((data[index]["rating"] + request_payload["rating"]) / data[index]["rating_count"]) * 2) / 2
        data[index]["rating_count"] += 1
        file.set_locations_data(data)
        return "", 204
    return "", 406

'''
Give a new location POST API
request payload-
{
    "id": int
}
'''
@app.route("/location/new", methods=["POST"])
@cross_origin()
def get_new_location():
    data = file.get_locations_data()
    request_payload = request.get_json()
    id = recommender.recommender(request_payload["id"])
    for d in data:
        if id == d["id"]:
            return jsonify(d), 200
    return jsonify({}), 406