import React from "react";
import { ROUTES } from "../routes/routes";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { posts } = useSelector(({ posts }) => posts);

  return (
    <>
      <Routes>
        {ROUTES.map(({ path, Element }) => {
          return (
            <Route key={path} path={path} element={<Element posts={posts} />} />
          );
        })}
      </Routes>
    </>
  );
};

export default AppRoutes;
