import axios from "axios";

export const createStock = async (authtoken, values, id) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/stock/new`,
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

export const getStocks = async (id) => {
  console.log(id);
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/${id}/stocks`);
};

export const getAllStocks = async (id) => {
  console.log("finding!!!");
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/all`);
};

export const getStock = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/${id}`);
};

export const updateStock = async (authtoken, id, values) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/stock/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const removeStock = async (authtoken, id) => {
  return await axios.delete(
    `${process.env.REACT_APP_BACKEND_API}/stock/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );
};
