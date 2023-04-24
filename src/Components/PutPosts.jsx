import React from "react";
import { useDispatch } from "react-redux";

import { putPosts } from "../Store/posts/postsReducer";

const PutPosts = ({ id }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    title: "",
    price: 0,
    description: "",
    images: "",
    categoryId: 1,
    id: id,
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putPosts(values));
    setValues({
      ...values,
      title: "",
      price: "",
      description: "",
      images: "",
    });
  };

  return (
    <section className="">
      <form className="">
        <div className="">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={values.email}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="">
          <input
            type="number"
            name="price"
            placeholder="price"
            value={values.name}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.password}
            autoComplete="off"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="">
          <input
            type="text"
            name="images"
            placeholder="ImageURL"
            value={values.images}
            autoComplete="off"
            onChange={(e) => {
              setValues({ ...values, images: [`${e.target.value}`] });
            }}
            required
          />
        </div>

        <button onClick={handleSubmit} className="">
          Update
        </button>
      </form>
    </section>
  );
};

export default PutPosts;
