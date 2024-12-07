import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="login-container">
      <h2>Login</h2>
      {successMessage && <div aria-live="polite" className="success-message">{successMessage}</div>}
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSuccessMessage("Login Successful");
          resetForm();
        }}
      >
        <Form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="additional-options">
            
            
            <Link to="/signup" className="link">Sign Up</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
