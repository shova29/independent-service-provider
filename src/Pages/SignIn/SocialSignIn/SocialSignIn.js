import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, loadingForGoogle, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, loadingForGithub, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger ms-5 mt-3 fw-bold">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (loadingForGoogle || loadingForGithub) {
    return <Loading></Loading>;
  }

  if (googleUser || githubUser) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mb-2 ms-5 me-5">
        <div
          style={{ height: "2px", backgroundColor: "lightseagreen" }}
          className="w-25 ms-5"
        ></div>
        <p className="mt-3 px-2">OR</p>
        <div
          style={{ height: "2px", backgroundColor: "lightseagreen" }}
          className="w-25 me-5"
        ></div>
      </div>
      {errorElement}
      <div className="d-flex ms-5 me-5 mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-white w-50 mx-auto me-3 mb-5 fw-bold shadow"
          style={{ border: "", borderRadius: "18px" }}
        >
          <FaGoogle className="icon f-3" />
          <span className="px-2 ms-5">Sign in with Google</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark w-50 mx-auto me-3 mb-5 fw-bold shadow "
          style={{ borderRadius: "18px" }}
        >
          <FaGithub className="icon f-3" />
          <span className="px-2 ms-5">Sign in with Github</span>
        </button>
      </div>
    </div>
  );
};
export default SocialSignIn;
