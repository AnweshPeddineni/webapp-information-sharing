import axios from "axios";

export const createEvent = async (authtoken, values, id) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/event/new`,
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

export const getEvents = async (id) => {
  console.log(id);
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/${id}/events`);
};

export const getAllEvents = async (id) => {
  console.log("finding!!!");
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/event/all`);
};

export const getEvent = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/event/${id}`);
};

export const updateEvent = async (authtoken, id, values) => {
  return await axios.put(
    `${process.env.REACT_APP_BACKEND_API}/event/${id}`,
    values,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const removeEvent = async (authtoken, id) => {
  return await axios.delete(
    `${process.env.REACT_APP_BACKEND_API}/event/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );
};
