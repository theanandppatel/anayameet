import requests
import json

API_KEY = "anayameet_default_secret"
ANAYAMEET_URL = "https://anayameet.herokuapp.com/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    ANAYAMEET_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
