import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export function createPost(text) {
  const url = `${API_URL}/api/posts/`;
  return axios.post(url, { text: text });
}

export function likePost(id) {
  const url = `${API_URL}/api/posts/${id}/like`;
  return axios.get(url);
}
