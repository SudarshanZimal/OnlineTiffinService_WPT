

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Modal, Button } from 'react-bootstrap';

export function Signinpage() {
  const [showModal, setShowModal] = useState(false);

  // // Function to handle successful sign-in or registration
  // const handleSuccess = () => {
  //   setShowModal(true);
  //   // You can perform additional actions here if needed
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccess = () => {
    if (email && password) {
      // Both email and password are filled, proceed with success modal
      setShowModal(true);
      // You can perform additional actions here if needed
    } else {
      // Display an error message or handle the case where either email or password is missing
      alert('Please fill all required fields...');
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div>
        <MDBInput
          wrapperClass='mb-4'
          label='Email address'
          id='form1'
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Password'
          id='form2'
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
{/* <div>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' required />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'required />
      </div> */}
      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>
      <hr></hr>
     
      <center><Link to="/mealplansection">
    <Button variant="primary" className="mb-4" onClick={handleSuccess}>
        Sign in
      </Button>
      </Link></center>

      {/* SuccessModal component */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Successfully signed in...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="text-center">
        <p>Not a member? <a href="/SignUp">Register</a></p>
        

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Signinpage;
