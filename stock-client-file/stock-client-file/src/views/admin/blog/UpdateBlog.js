import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UpdateBlogForm } from "../../../components";
import { getBlog, updateBlog } from "../../../api/blog";
import { useSelector } from "react-redux";

const UpdateBlog = ({ history }) => {
  const initialValues = {
    blog_title: "",
    blog_content: "",
    blog_category: "",
    user: "",
    country: "",
  };
  const [values, setValues] = useState(initialValues);
  const { user } = useSelector((state) => ({ ...state }));
  const { id } = useParams();

  useEffect(() => {
    loadBlog(id);
  }, []);
  const loadBlog = (id) => {
    getBlog(id)
      .then((res) => {
        setValues(res.data);
        console.log(values);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(user.token, id, values)
      .then((res) => {
        history.push("/admin/all-blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="mb-5">
        <h3>Update Blog</h3>
      </div>
      <div className="col">
        <UpdateBlogForm
          handleSubmit={handleSubmit}
          values={values}
          setValues={setValues}
        />
      </div>
    </div>
  );
};

export default UpdateBlog;
