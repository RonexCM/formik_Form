import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const USER_URL = "https://657ad086394ca9e4af12b9e0.mockapi.io/users";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchemaSignUp = Yup.object({
  name: Yup.string().min(5).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  // .matches(
  //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password doesn't match"),
});

const Registration: React.FC = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchemaSignUp,
      onSubmit: async (values, { resetForm }) => {
        console.log(
          "🚀 ~ file: Registration.jsx:37 ~ onSubmit: ~ values:",
          values
        );
        try {
          const response = await fetch(USER_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            resetForm();
          } else {
            const errorData = await response.json();
            console.error("Registration failed", errorData);
          }
        } catch (error) {
          console.error("Network error", error);
        }
      },
    });
  console.log(errors);
  return (
    <div className="container">
      <div className="form-details">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label>Username: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-errors">{errors.name}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-errors">{errors.email}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-errors">{errors.password}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="form-errors">{errors.confirmPassword}</p>
            ) : null}
            <br />
          </div>

          <button type="submit">Register</button>
        </form>
        <p className="login-button">
          Already have an account??<Link to="/LogIn">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
