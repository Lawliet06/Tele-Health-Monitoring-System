import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from "../../firebase/auth"; // Import doSendEmailVerification
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import Material UI icons
import "../../assets/css/Login.css";
import CountryOptions from "../../assets/countries";
import logo from "../../assets/imgs/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState(null); // For date of birth
  const [country, setCountry] = useState("malawi"); // Add this line
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To toggle confirm password visibility
  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isRegistering) {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      setIsRegistering(true);
      try {
        const dobString = dob.toLocaleDateString("en-US");
        await doCreateUserWithEmailAndPassword(
          email,
          password,
          firstName,
          lastName,
          phone,
          address,
          gender,
          dobString,
          country
        );
        setIsRegistering(false);
        alert(
          "Registration successful. A confirmation email has been sent to your email address."
        );
        await doSendEmailVerification(); // Send confirmation email
      } catch (error) {
        setIsRegistering(false);
        handleAuthError(error);
      }
    }
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        setErrorMessage(
          "Email is already in use. Please use a different email."
        );
        break;
      case "auth/weak-password":
        setErrorMessage(
          "Password is too weak. Please use a stronger password."
        );
        break;
      case "auth/invalid-email":
        setErrorMessage("Please enter a valid email address.");
        break;
      default:
        setErrorMessage("SignUp Failed: " + error.message);
        break;
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="../Home" replace={true} />}

      <div className="Main2">
        <form className="container" onSubmit={onSubmit}>
          <div className="card">
            <div className="logo2">
              <img className="img" src={logo} alt="logo" />
              <h1>Patient Registration Form</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      First Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Last Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Confirm Password <span className="errmsg">*</span>
                    </label>
                    <TextField
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-6" style={{width: '60%'}}>
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      {CountryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label>Gender</label>
                    <br></br>

                    <input
                      type="radio"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="Male"
                      className="app-check"
                    />
                    <label>Male</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="Female"
                      className="app-check"
                    />
                    <label>Female</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <DatePicker
                      selected={dob}
                      onChange={(date) => setDob(date)}
                      className="form-control"
                      placeholderText="MM/DD/YYYY"
                    />
                  </div>
                </div>
              </div>
              {errorMessage && (
                <span className="text-danger font-weight-bold">
                  {errorMessage}
                </span>
              )}
            </div>

            <div className="card-footer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isRegistering}
                  style={{ marginRight: "10px" }}
                >
                  {isRegistering ? "Registering..." : "Register"}
                </button>{" "}
                <Link to={"/"} className="btn btn-danger">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
