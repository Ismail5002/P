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
        className=" text-sky-300"
        onClick={getPost}
      >
        GET
      </button>
      <div className="">
        {posts.map((p) => {
          return (
            <div
              className="text-red-900 flex justify-center flex-col items-center "
              key={p.id}
            >
              <div className="text-red-900">Name: {p.title}</div>
              <div className="text-red-900">{p.price}$</div>
              <div className="text-red-900">description: {p.description}</div>
              <Link to={`/GET/products/${p.id}`}>
                <img
                  className=" w-[150px] h-[150px]"
                  alt={`${p.title}`}
                  src={p.images[0]}
                />
              </Link>
              <div>
                <button
                  style={{ width: 100, height: 70 }}
                  onClick={() => {
                    deletePost(p.id);
                  }}
                >
                  <p className="text-black-900">Delete</p>
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
