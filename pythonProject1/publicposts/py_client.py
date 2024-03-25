import requests

get_response = requests.get('http://127.0.0.1:8000/api/posts/1/like_post')
print(get_response.text)