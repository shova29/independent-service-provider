import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { Button, Form } from "react-bootstrap";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateSignin = () => {
    navigate("/signin");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className="signup-form container w-50 mx-auto">
      <h2
        className="mb-3"
        style={{
          textAlign: "center",
          marginTop: "15px",
          color: "lightseagreen",
        }}
      >
        Please Sign-Up
      </h2>
      <Form onSubmit={handleSignUp} className="shadow">
        <Form.Group className="mb-3 px-5 pt-5" controlId="formBasicName">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicEmail">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-3 px-5" controlId="formBasicPassword">
          <Form.Control
            style={{ borderRadius: "18px", boxShadow: "8px 8px 6px" }}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group
          className="mt-4 mb-3 ms-5 d-flex"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />{" "}
          <label
            className={
              agree
                ? "ps-2 fw-bold text-success "
                : "ps-2 text-primary fw-bold "
            }
            htmlFor="terms"
          >
            Accept Genius Car Terms & Conditions
          </label>
        </Form.Group>

        <Button
          type="submit"
          disabled={!agree}
          style={{ backgroundColor: "rgb(27, 141, 97)", borderRadius: "18px" }}
          className="btn-outline shadow btn-lg mt-3 w-25 d-grid ms-5 py-1 text-center align-items-center mb-3 border-0"
        >
          Sign up
        </Button>
        <p className="ms-5">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-primary pe-auto fw-bold text-decoration-none"
            onClick={navigateSignin}
          >
            Please Signin
          </Link>
        </p>
        <SocialSignIn></SocialSignIn>
      </Form>
    </div>
  );
};

export default SignUp;
