import React, { useState } from "react";

const AddEventForm = ({ handleSubmit, editEvent }) => {
  const initialValues = {
    title: "",
    description: "",
    start: "",
    end: "",
  };

  const [values, setValues] = useState(editEvent ? editEvent : initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(values);
  };

  return (
    <form onSubmit={onSubmit} className="new-event-form">
      <div className="mb-3">
        <label htmlFor="new-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={values.title}
          name="title"
          onChange={handleChange}
          className="form-control"
          id="new-title"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="new-description" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="description"
          value={values.content}
          onChange={handleChange}
          className="form-control"
          id="new-description"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-time-label" htmlFor="start">
          Start
        </label>
        <input
          type="time"
          name="start"
          value={values.start}
          className="form-control mb-3"
          id="start"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-time-label" htmlFor="end">
          End
        </label>
        <input
          type="time"
          name="end"
          value={values.end}
          className="form-control mb-3"
          id="end"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddEventForm;
