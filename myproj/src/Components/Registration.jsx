import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    emailid: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
  
    if (!fields['emailid']) {
      formIsValid = false;
      errors['emailid'] = '*Please enter your email-ID.';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailPattern.test(fields['emailid'])) {
        formIsValid = false;
        errors['emailid'] = '*Please enter a valid email-ID.';
      }
    }
  
    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = '*Please enter your password.';
    } else {
      // Password must be at least 8 characters and meet the criteria
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/;
      if (fields['password'].length < 8 || !passwordPattern.test(fields['password'])) {
        formIsValid = false;
        errors['password'] =
          '*Password must be at least 8 characters long and contain at least 3 of the following: lowercase letters, uppercase letters, numbers, special characters.';
      }
    }
  
    setErrors(errors);
    return formIsValid;
  };
  

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted');
      navigate('/mealplansection');
    }
  };

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Registration page</h3>
        <form
          method="post"
          name="userRegistrationForm"
          onSubmit={submitUserRegistrationForm}
        >
          <label>Email ID:</label>
          <input
            type="text"
            name="emailid"
            value={fields.emailid}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.emailid}</div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.password}</div>
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
