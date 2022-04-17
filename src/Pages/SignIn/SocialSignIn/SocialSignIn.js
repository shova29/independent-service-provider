import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
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
          <img src={""} alt="" />
          <span className="px-2">Sign in with Google</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark w-50 mx-auto me-3 mb-5 fw-bold shadow"
          style={{ borderRadius: "18px" }}
        >
          <img src={"githubLogo"} alt="" />
          <span className="px-2">Sign in with Github</span>
        </button>
      </div>
    </div>
  );
};
export default SocialSignIn;
