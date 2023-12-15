import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Checkout.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits'),
  address: Yup.string()
    .required('Address is required')
    .max(255, 'Address must be less than 255 characters'),
});

const ErrorMessageComponent = ({ message }) => (
  <p className={styles.errorMessage}>{message}</p>
);

const CheckoutForm = () => (
    
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      // Process form submission here
      console.log('Form submitted:', values);
      // Submit data to your backend API
      // ...
      setSubmitting(false);
      resetForm();
      window.location.href = '/success';
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <Form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Checkout</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" placeholder="First Name" />
          {errors.firstName && touched.firstName && <ErrorMessageComponent message={errors.firstName} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" placeholder="Last Name" />
          {errors.lastName && touched.lastName && <ErrorMessageComponent message={errors.lastName} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email && <ErrorMessageComponent message={errors.email} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" type="tel" placeholder="Phone Number" />
          {errors.phoneNumber && touched.phoneNumber && <ErrorMessageComponent message={errors.phoneNumber} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" placeholder="Address" />
          {errors.address && touched.address && <ErrorMessageComponent message={errors.address} />}
        </div>
        <div className={styles.navigation}>
            <NavLink to={ROUTES.CART}>
            Go back
            </NavLink>
            <button type="submit" disabled={isSubmitting}>
                Continue
            </button>
        </div>
      </Form>
    )}
  </Formik>
);

const Checkout = () => {
    const navigation = useNavigate();
  return (
    <section className={styles.checkout}>
      <CheckoutForm />
    </section>
  );
};

export default Checkout;