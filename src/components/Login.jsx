import React from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

import { InputText } from "primereact/inputtext";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validate: (data) => {
      let errors = {};
      if (!data.name) {
        errors.name = "Name is required.";
      }
      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      formik.resetForm();
    },
  });

  console.log(formData);

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className='p-error'>{formik.errors[name]}</small>
      )
    );
  };
  return (
    <div className='card justify-content-center max-w-23rem m-auto'>
      <h5 className='text-center'>Login</h5>
      <form onSubmit={formik.handleSubmit} className='p-fluid'>
        <div className='field'>
          <span className='p-float-label'>
            <InputText
              id='name'
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              autoFocus
              className={classNames({ "p-invalid": isFormFieldValid("name") })}
            />
            <label
              htmlFor='name'
              className={classNames({ "p-error": isFormFieldValid("name") })}
            >
              Name*
            </label>
          </span>
          {getFormErrorMessage("name")}
        </div>
        <div className='field'>
          <span className='p-float-label p-input-icon-right'>
            <InputText
              id='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              className={classNames({ "p-invalid": isFormFieldValid("email") })}
            />
            <label
              htmlFor='email'
              className={classNames({ "p-error": isFormFieldValid("email") })}
            >
              Email*
            </label>
          </span>
          {getFormErrorMessage("email")}
        </div>
        <Button type='submit' label='Submit' className='mt-2' />
      </form>
    </div>
  );
};

export default Login;
