import React from "react";
import { useDispatch } from "react-redux";
import { deletePosts, getPosts } from "../Store/posts/postsReducer";
import { Link } from "react-router-dom";

const GetPosts = ({ posts }) => {
  const dispatch = useDispatch();

  const getPost = () => {
    dispatch(getPosts());
  };
  const deletePost = (id) => {
    dispatch(deletePosts(id));
  };
  return (
    <div>
      <button
        style={{ width: 100, height: 100, fontSize: 20 }}
        className="ownbtn"
        onClick={getPost}
      >
        GET
      </button>
      <div className="posts">
        {posts.map((p) => {
          return (
            <div key={p.id}>
              <div>Name: {p.title}</div>
              <div>{p.price}$</div>
              <div>description: {p.description}</div>
              <Link to={`/GET/products/${p.id}`}>
                <img alt={`${p.title}`} src={p.images[0]} />
              </Link>
              <div>
                <button
                  style={{ width: 200, height: 100 }}
                  onClick={() => {
                    deletePost(p.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetPosts;
