import axios from "axios";

export const createBlog = async (authtoken, values, id) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/blog/new`,
    {
      values,
      user: id,
    },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getBlogs = async (id) => {
  console.log(id);
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/${id}/blogs`);
};

export const getAllBlogs = async () => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/blog/all`);
};

export const getBlog = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/blog/${id}`);
};

export const updateBlog = async (authtoken, id, values) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/blog/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const removeblog = async (authtoken, id) => {
  return await axios.delete(`${process.env.REACT_APP_BACKEND_API}/blog/${id}`, {
    headers: {
      authtoken,
    },
  });
};
