import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import PostInList from "./PostInList";
import { createPost } from "../PostService";

export async function postsLoader() {
  const data = await axios
    .get("http://127.0.0.1:8000/api/posts")
    .then((res) => {
      return res.data;
    });
  return { data };
}

export default function Posts() {
  const posts = useLoaderData().data;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    createPost(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return !posts ? (
    <>
      <p>No posts</p>
    </>
  ) : (
    <div id="posts">
      {posts.map((p) => (
        <PostInList post={p} key={p.id}></PostInList>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleSubmit} onChange={(e) => handleChange(e)}>
        Send
      </button>
    </div>
  );
}
