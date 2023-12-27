import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
// import { USER_URL } from "./Registration";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchemaSignIn = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onSubmit = async (values) => {
  //   try {
  //     const response = await fetch(USER_URL);

  //     if (response.data.success) {
  //       const nameFromApi = response.data.name;
  //       const emailFromApi = response.data.email;
  //       const passwordFromApi = response.data.password;

  //       if (
  //         nameFromApi === values.name &&
  //         emailFromApi === values.email &&
  //         passwordFromApi === values.password
  //       ) {
  //         dispatch(addUser(values));
  //         navigate("/user");
  //       } else {
  //         alert("Credentials doesnot match");
  //       }
  //     }
  //   } catch {
  //     console.log("Error during login0");
  //   }
  // };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchemaSignIn,
      onSubmit: (values: FormValues) => {
        dispatch(addUser(values));
        navigate("/user");
      },
    });
  // console.log("🚀 ~ file: LoginForm.jsx:18 ~ LoginForm ~ errors:", errors)
  console.log("🚀 ~ file: LoginForm.jsx:18 ~ LoginForm ~ values:", values);
  return (
    <div className="container">
      <div className="login-form-details">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label>Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-errors">{errors.name}</p>
            ) : null}
          </div>

          <div className="input-block">
            <label>Email:</label>
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
          </div>

          <div className="input-block">
            <label>Password:</label>
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
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
