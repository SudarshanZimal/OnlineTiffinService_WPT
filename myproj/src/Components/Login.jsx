import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('/mealplansection');
    }
  }, [formErrors, formValues, isSubmit, navigate]);

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/;
  
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password must contain at least 3 of the following: lowercase letters, uppercase letters, numbers, special characters";
    }
  


    return errors;
  };

  return (
    <div style={styles.container}>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div style={styles.successMessage}>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify({ email: formValues.email }, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1 style={styles.heading}>Login Form</h1>
        <div style={styles.divider}></div>
        <div style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <p style={styles.error}>{formErrors.email}</p>
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <p style={styles.error}>{formErrors.password}</p>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    backgroundColor: "#fff",
    marginTop: "50px",
  },
  successMessage: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "10px",
    marginBottom: "20px",
  },
  divider: {
    margin: "20px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  error: {
    color: "red",
    margin: "5px 0 10px",
  },
  button: {
    backgroundColor: "#2196f3",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default LoginPage;
