import { useState } from "react";
import { likePost } from "../PostService";

export default function PostInList({ post }) {
  const p = post;
  const [likes, setLikes] = useState(post.likesCount);

  const handleLikes = (p) => {
    setLikes(likes + 1);
    likePost(p.id);
  };

  return (
    <div key={"post_" + p.id}>
      <p> {p.text}</p>
      <div>
        <span>Likes: </span>
        <span id="like-count">{likes}</span>
      </div>

      <button onClick={() => handleLikes(p)}>Like</button>
      <p>{p.date}</p>
      <hr />
    </div>
  );
}
