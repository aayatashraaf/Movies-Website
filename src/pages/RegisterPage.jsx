import { Link, useNavigate } from "react-router-dom";
import "../Styles/Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(""); 
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Too Short!")
        .max(15, "Too Long!")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .matches(
          /^[A-Z][a-zA-Z0-9]{7}$/,
          "Password must be 8 characters, start with capital, letters/numbers only"
        )
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("registeredUser", JSON.stringify(values));
      setSuccessMessage(`Account created successfully`);
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 4000);
    },
  });
  return (
    <div className="container loginContainer">
      <div className="register">
        <div className="newAccount">
          <h1>Create New Account</h1>
        </div>
        {successMessage && (
          <p className="successMessage">{successMessage}</p>
        )}
        <form onSubmit={formik.handleSubmit}>
          {/* Username */}
          <label>
            Username
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </label>
          <p className="invalidInputError my-2">
            {formik.touched.username && formik.errors.username
              ? formik.errors.username
              : ""}
          </p>
          {/* Email */}
          <label>
            Email Address
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          <p className="invalidInputError my-2">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </p>
          {/* Password */}
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </label>
          <p className="invalidInputError my-2">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </p>
          <input type="submit" value="Sign up" className="loginSubmit" />
          <p className="mt-2 mb-0">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;



