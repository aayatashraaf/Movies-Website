import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(""); 
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
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
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (!storedUser) {
        setMessage("No registered account found. Please register first!");
        setType("error");
        setTimeout(() => {
          navigate("/register", { replace: true });
        }, 2000);
        return;
      }
      if (
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        const token = "token_" + Math.random().toString(36).substring(2, 12);
        login(token);
        localStorage.setItem("Login", token);
        setMessage("Login successful");
        setType("success");
        setTimeout(() => {
          navigate("/movies", { replace: true });
        }, 1000);
      } else {
        setMessage("Invalid email or password!");
        setType("error");
      }
    },
  });
  return (
    <div className="container loginContainer">
      <div className="login">
        <div className="welcome">
          <h1>Login</h1>
        </div>
        {message && <p className={`formMessage ${type}`}>{message}</p>}
        <form onSubmit={formik.handleSubmit} noValidate>
          {/* Email */}
          <label>
            Email
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          <p className="invalidInputError my-2">
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          </p>
          {/* Password */}
          <label>
            Password
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </label>
          <p className="invalidInputError my-2">
            {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
          </p>
          <input type="submit" value="Login" className="loginSubmit" />
          <p className="mt-2 mb-0">
            You don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;





