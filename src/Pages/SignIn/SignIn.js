import { async } from "@firebase/util";
import { EmailAuthProvider } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialSignIn from "./SocialSignIn/SocialSignIn";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = (
      <p className="text-danger ms-5 mt-3 fw-bold">Error: {error?.message}</p>
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateSignUp = (event) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Sent Password Reset Link to Your Email.");
    } else {
      alert("Please Enter Your Email Address");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-2 mb-3" style={{ color: "lightseagreen" }}>
        Please Sign-in
      </h2>
      <Form onSubmit={handleSubmit} className="shadow">
        <Form.Group className="mb-3 px-5 pt-5" controlId="formBasicEmail">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicPassword">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          variant="mx-auto w-25 d-block mt-5 mb-2"
          type="submit"
          style={{ backgroundColor: "rgb(27, 141, 97)", borderRadius: "18px" }}
          className="btn-lg shadow text-white mt-3 w-25 d-grid ms-5 py-1 text-center align-items-center mb-3 border-0"
        >
          Sign in
        </Button>
        {errorElement}
        <p className="ms-5 mt-4">
          New to Genius Car?{" "}
          <Link
            to="/signup"
            className="fw-bold text-primary pe-auto text-decoration-none"
            onClick={navigateSignUp}
          >
            Please SignUp
          </Link>
        </p>
        <p className="ms-5 mt-2">
          Forget Password?{" "}
          <button
            className="fw-bold btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <SocialSignIn></SocialSignIn>
      </Form>
    </div>
  );
};

export default SignIn;
