import json

locations_file = "locations.json"
users_file = "users.json"

def get_locations_data():
    with open(locations_file, "r") as infile:
        return json.load(infile)

def set_locations_data(data):
    with open(locations_file, "w") as outfile:
        json.dump(data, outfile)

def get_users_data():
    with open(users_file, "r") as infile:
        return json.load(infile)

def set_users_data(data):
    with open(users_file, "w") as outfile:
        json.dump(data, outfile)