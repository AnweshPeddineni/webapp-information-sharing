import axios from "axios";

export const createTransaction = async (authtoken, values, id) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/transaction/new`,
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

export const getTransactions = async (id) => {
  console.log(id);
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/${id}/transactions`
  );
};

export const getAllTransactions = async (id) => {
  console.log("finding!!!");
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/transaction/all`
  );
};

export const getTransaction = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_API}/transaction/${id}`
  );
};

export const updateTransaction = async (authtoken, id, values) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/transaction/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const removeTransaction = async (authtoken, id) => {
  return await axios.delete(
    `${process.env.REACT_APP_BACKEND_API}/transaction/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );
};
