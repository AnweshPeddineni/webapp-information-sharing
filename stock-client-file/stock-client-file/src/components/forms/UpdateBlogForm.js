import React from "react";
import { Radio } from "antd";
const UpdateBlogForm = ({ handleSubmit, values, setValues }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group col-md-4">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="blog_title"
          value={values.blog_title}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="form-group col-md-4">
        <label className="d-block mb-3">Select Country</label>

        <Radio.Group
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          value={values.country}
          name="country"
        >
          <Radio value={"INDIAN"} className="mr-4">
            India Subscriber
          </Radio>
          <Radio value={"USA"} className="mr-4">
            USA subscriber
          </Radio>
          <Radio value={"Non Subscriber"}>Non Subscriber</Radio>
        </Radio.Group>
      </div>
      <div className="form-group col-md-4">
        <label className="d-block mb-3">Add Category</label>
        <input
          className="form-control"
          type="text"
          name="blog_category"
          value={values.blog_category}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </div>
    </div>
    <div className="form-group">
      <label>Content</label>
      <textarea
        rows={8}
        name="blog_content"
        value={values.blog_content}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
    </div>
    <button className="btn btn-outline-primary">Save</button>
  </form>
);

export default UpdateBlogForm;
