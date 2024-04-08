import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doPasswordReset,
} from "../../firebase/auth";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ClipLoader } from "react-spinners";
import logo from "../../assets/imgs/logo.png";
import "../../assets/css/Login.css";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        handleAuthError(error.code);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        handleAuthError(error.code);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAuthError = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-credential":
        setErrorMessage("Wrong email or password.");
        break;
      case "auth/invalid-email":
        setErrorMessage("The email you entered is invalid.");
        break;
      case "auth/missing-password":
        setErrorMessage("Please enter the password.");
        break;
      default:
        setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    try {
      await doPasswordReset(email);
      setResetSuccess(true);
      setErrorMessage("");
      window.alert(
        "t('Password reset email sent. Check your email for instructions.')"
      );
    } catch (error) {
      setErrorMessage("Error sending reset password email. Please try again.");
      window.alert(
        "t('Error sending password reset email. Please try again.')"
      );
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"../Dashboard"} replace={true} />}
      <div className="container">
      <MDBContainer fluid >
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard

            className="Main"
              
              style={{ borderRadius: "1rem", maxWidth: "400px",  backgroundColor:  '#010117', marginLeft: '35%' }}
            >
              <div className="logo">
                <img className="img" src={logo} alt="logo" />
                <h2>Account Login</h2>
              </div>

              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isLoading && (
                  <ClipLoader color="#ffffff" loading={isLoading} size={30} />
                )}{" "}
                {/* Display spinner while loading */}
                {errorMessage && (
                  <p className="text-danger mb-3">{errorMessage}</p>
                )}
                {resetSuccess && (
                  <p className="text-success mb-3">
                    Reset password email sent successfully!
                  </p>
                )}
                <p className="small mb-3 pb-lg-2">
                  <a
                    href="#!"
                    className="text-white-50"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </a>
                </p>
                <button
                  className="btn btn-outline-light mx-2 px-5"
                  size="lg"
                  style={{ marginBottom: "20px" }}
                  onClick={onSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Login"}
                </button>
                <div>
                  <p className="mb-0" style={{color: 'white'}}>
                    Don't have an account?{" "}
                    <Link to={"/register"} className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    </>


    
  );
};

export default Login;
