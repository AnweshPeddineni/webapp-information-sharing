import React, { useState, useEffect } from "react";
import { getAllBlogs, removeblog } from "../../api/blog";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogTable = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    getAllBlogs()
      .then((res) => {
        setBlogs(res.data);
        console.log(blogs);
      })
      .catch((err) => {
        // history.push("/");
        toast.error("Some error in fetching the data");
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Delete?")) {
      removeblog(user.token, id)
        .then((res) => {
          toast.success(`"${res.data.blog_title}" is deleted`);
          loadBlogs(user._id);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    }
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Category</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <tr>
                <td>{blog.createdAt}</td>
                <td>{blog.blog_title}</td>
                <td>{blog.blog_category}</td>
                <td>{blog.country}</td>
                <td>
                  <Link to={`/admin/blog/edit/${blog._id}`}>
                    <i className="fas fa-edit"></i>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemove(blog._id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
