import React from "react";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div className="container d-flex gap-5">
      <Card style={{ width: "20rem" }} className="me-3">
        <Card.Body>
          <Card.Title>
            1. What is the Difference between authorization and authentication?
          </Card.Title>
          <Card.Text>
            The Difference between authorization and authentication is giving
            below:
            <p className="mt-3">
              <span className="fw-bold">1)</span> The method of characteristic a
              user to provide access to a system is called Authentication. On
              the other hand, the process of giving permission to access the
              resources is said to be Authorization.
            </p>
            <p>
              <span className="fw-bold">2)</span> The user or client and server
              are verified in the authentication. While authorization verified
              that if the user is allowed through the outlined terms, rules, and
              policies.
            </p>
            <p>
              <span className="fw-bold">3)</span> Authentication mainly
              performed before the authorization. But authorization happened
              once generally when the user is successfully authenticated.
            </p>
            {/*   <p>
              <span className="fw-bold">4.</span>
            </p>
            <p>
              <span className="fw-bold">5.</span>
            </p> */}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }} className="me-3">
        <Card.Body>
          <Card.Title>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Google Firebase Authentication makes it easier to urge your users
            signed in while not having to know the complexities behind
            implementing own authentication system. It offers a simple obtaining
            started expertise, non-compulsory UX components designed to
            attenuate user friction, and is made on open standards and backed by
            Google infrastructure. Firebase offers multiple ways that of
            authenticating users. One will make a choice from email
            authentication, and federate identity provider integration as
            Google, Facebook, or Twitter or one can implement authentication on
            a custom server. By Firebase Authentication, one'll be able to
            source entire authentication system to Firebase in order that one'll
            be able to focus on building nice options for their app. That’s the
            reason behind of using Firebase.
            <br />
            <b>
              There are other options for implementing authentication than
              Firebase is giving below:{" "}
            </b>
            Okta, OneLogin, JumpCloud, Microsoft Azure Active Directory,
            CyberArk Identity, Auth0, Rippling, SecureAuth Identity Platform,
            and ForgeRock.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            3. What other services does firebase provide other than
            authentication?
          </Card.Title>
          <Card.Text>
            Firebase is initially developed by Firebase inc and later attained
            by Google. It provides totally different forms of services that
            assist to develop high-quality web applications and mobile to grow
            client’s business.
            <br />
            There are many services which Firebase provides.
            <b>
              These services are giving below other than authentication service:
            </b>
            Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google
            Analytics, Predictions, Cloud Messaging, Dynamic Links, and Remote
            Config.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
