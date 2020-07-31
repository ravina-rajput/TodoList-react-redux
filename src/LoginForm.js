import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./styles.css";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Values: ", values);
        }, 500);
      }}
      // yup validation
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required(" No Password Given")
          .min(8, "password is too short and should be strong")
          .matches(/(?=.*[0-9])/, "Password should contain a number")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.firstName}
              placeholder="enter your firstName"
              className={errors.firstName && touched.firstName && "error"}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.lastName}
              placeholder="enter your lastName"
              className={errors.lastName && touched.lastName && "error"}
            />
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.email}
              placeholder="enter your email"
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <label htmlFor="firstName">Password</label>
            <input
              type="text"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.password}
              placeholder="enter password"
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
