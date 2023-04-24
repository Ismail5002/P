import React from "react";
import PutPosts from "./PutPosts";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getSinglePage } from "../Store/posts/postsReducer";

const SinglePosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getSinglePage(id));
  }, [dispatch, id]);

  return <PutPosts id={id} />;
};

export default SinglePosts;
