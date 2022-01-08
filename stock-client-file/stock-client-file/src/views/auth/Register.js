import React, { useState } from "react";
// import { auth } from "../../firebase";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import { createUser } from "../../api/auth";

// import data from "./data.json";
// import DropdownTreeSelect from "react-dropdown-tree-select";
import "./form.css";
// import Country from "./country";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Register = ({ history }) => {
  const [values, setValues] = useState({
    password: "",
    username: "",
    phonenumber: "",
    email: "",
    country: "",
    region: "",
    city: "",
    profession: "",
    request: true,
    response: false,
  });

  // const [email, setEmail] = useState("");
  // const { user } = useSelector((values) => ({ ...values }));

  // useEffect(() => {
  //   if (user && user.token) {
  //     props.history.push("/");
  //   }
  // }, []);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const {
    password,
    username,
    phonenumber,
    email,
    country,
    region,
    city,
    profession,
    request,
    response,
  } = values;

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };
  // const onChange = (currentNode, selectedNodes) => {
  //   console.log("path::", currentNode.path);
  // };

  const selectCountry = (val) => {
    setValues({ ...values, country: val });
  };

  const selectRegion = (val) => {
    setValues({ ...values, region: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({
    //   password,
    //   username,
    //   phonenumber,
    //   email,
    //   country,
    //   region,
    //   city,
    //   profession,
    // });
    if (!values.country || !values.email) {
      toast.error("every field is important");
    } else {
      createUser(values)
        .then((res) => {
          if (res.data) {
            console.log("Success");
            history.push("/");
          }
        })
        .catch((err) => {
          console.log("Error thrown");
          toast.error("email already registered!");
        });
    }

    // const config = {
    //   url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
    //   handleCodeInApp: true,
    // };

    // await auth.sendSignInLinkToEmail(email, config);
    // toast.success(
    //   `Email is sent to ${email}, Click the link to complete your registration`
    // );

    // // Save email to local storage
    // window.localStorage.setItem("emailForRegistration", email);

    // // Clear email values
    // setValues("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange("email")}
            placeholder="Your email"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={handleChange("username")}
            placeholder="Your username"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange("password")}
            placeholder="Your password"
            autoFocus
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Country</label>
            <CountryDropdown
              className="form-control"
              value={country}
              onChange={(val) => selectCountry(val)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Region</label>
            <RegionDropdown
              className="form-control"
              country={country}
              value={region}
              onChange={(val) => selectRegion(val)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={handleChange("city")}
              placeholder="Your city"
              autoFocus
            />
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1">Select Profession</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={handleChange("profession")}
            >
              <option>Salaried employee</option>
              <option>Business owner</option>
              <option>Student</option>
              <option>Others..</option>
              <option></option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Phone No</label>
          <input
            type="number"
            className="form-control"
            value={phonenumber}
            onChange={handleChange("phonenumber")}
            placeholder="Your phonenumber"
            autoFocus
          />
        </div>
        <button type="submit" className="btn btn-raised btn-info  btn-block">
          Register
        </button>
      </form>
    );
  };

  return (
    <div className="container login-signupform p-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Sign Up</h3>
              {registerForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
