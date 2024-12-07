import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Sign Up Successful");
          resetForm();
        }}
      >
        <Form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </Form>
      </Formik>
      <div className="navigate-login">
        <button className="btn login-btn"  onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
