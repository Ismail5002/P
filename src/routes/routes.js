import GetPosts from "../Components/GetPosts";
import PostPosts from "../Components/PostPosts";
import SinglePosts from "../Components/SinglePosts";

export const ROUTES = [
  { path: "/GET", Element: GetPosts },
  { path: "/POST", Element: PostPosts },
  { path: "/GET/products/:id", Element: SinglePosts },
];
