import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/createOrUpdateUser`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  ); 
};

export const createUser = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/register`, {
    values,
  });
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/currentUser`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/currentAdmin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
