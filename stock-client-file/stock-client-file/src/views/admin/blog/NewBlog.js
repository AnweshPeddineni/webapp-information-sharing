import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CreateBlog from "../../../components/forms/CreateBlog";
import { createBlog } from "../../../api/blog";

const NewBlog = () => {
  const initialvalues = {
    blog_title: "",
    blog_content: "",
    blog_category: "",
    blog_image: "",
    user: "",
  };
  const [values, setValues] = React.useState(initialvalues);
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    createBlog(user.token, values, user._id)
      .then((res) => {
        setValues(initialvalues);
        toast.success(`"${res.data.blog_title}" is created`);
      })
      .catch((err) => {
        // setLoading(false);
        toast.error(err.response.data);
        console.log(err);
      });
  };
  return (
    <div>
      <div className="blog-header mb-5">
        <h3>Create Blog</h3>
      </div>
      <CreateBlog
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewBlog;
