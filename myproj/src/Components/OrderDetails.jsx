// // import React, { useState } from "react";
// // import { Form, Button, Col, Row, Modal } from "react-bootstrap";

// // export const OrderForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     mobile: "",
// //     streetAddress: "",
// //     state: "",
// //     city: "",
// //     location: "",
// //     pincode: "",
// //     mealPreference: "",
// //     mealType: "",
// //     subscriptionPeriod: "",
// //     quantity: 1,
// //     hasCouponCode: false,
// //     couponCode: "",
// //   });
// //   const [showModal, setShowModal] = useState(false);

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === "checkbox" ? checked : value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send a POST request to the server
// //       const response = await fetch("http://localhost:5000/api/orders", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         console.log("Order placed successfully:", formData);
// //         setShowModal(true);
// //       } else {
// //         console.error("Error placing order:", response.statusText);
// //       }
// //     } catch (error) {
// //       console.error("Error placing order:", error.message);
// //     }
// //   };

// //   const closeModal = () => {
// //     // Close the modal and reset the form data
// //     setShowModal(false);
// //     setFormData({
// //       // ... (reset form data as needed)
// //     });
// //   };

// //   return (
// //     <>
// //       <Form onSubmit={handleSubmit}>
// //         <h2>Delivery Details</h2>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="Full Name"
// //               name="fullName"
// //               value={formData.fullName}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //           <Col>
// //             <Form.Control
// //               type="email"
// //               placeholder="Email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //         </Row>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               type="tel"
// //               placeholder="Mobile"
// //               name="mobile"
// //               value={formData.mobile}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="Street Address"
// //               name="streetAddress"
// //               value={formData.streetAddress}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //         </Row>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="State"
// //               name="state"
// //               value={formData.state}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="City"
// //               name="city"
// //               value={formData.city}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //         </Row>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="Location"
// //               name="location"
// //               value={formData.location}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //           <Col>
// //             <Form.Control
// //               type="text"
// //               placeholder="Pincode"
// //               name="pincode"
// //               value={formData.pincode}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //         </Row>

// //         <h2 className="mt-4">Order Details</h2>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               as="select"
// //               name="mealPreference"
// //               value={formData.mealPreference}
// //               onChange={handleInputChange}
// //               required
// //             >
// //               <option value="">Select Meal Preference</option>
// //               <option value="Veg">Vegetarian</option>
// //               <option value="NonVeg">Non-Vegetarian</option>
// //             </Form.Control>
// //           </Col>
// //           <Col>
// //             <Form.Check
// //               type="radio"
// //               label="Regular"
// //               name="mealType"
// //               value="Regular"
// //               checked={formData.mealType === "Regular"}
// //               onChange={handleInputChange}
// //               inline
// //             />
// //             <Form.Check
// //               type="radio"
// //               label="Special"
// //               name="mealType"
// //               value="Special"
// //               checked={formData.mealType === "Special"}
// //               onChange={handleInputChange}
// //               inline
// //             />
// //           </Col>
// //         </Row>
// //         <Row className="mb-3">
// //           <Col>
// //             <Form.Control
// //               as="select"
// //               name="subscriptionPeriod"
// //               value={formData.subscriptionPeriod}
// //               onChange={handleInputChange}
// //               required
// //             >
// //               <option value="">Select Subscription Period</option>
// //               <option value="1-month">1 Month</option>
// //               <option value="3-months">3 Months</option>
// //               <option value="6-months">6 Months</option>
// //             </Form.Control>
// //           </Col>
// //           <Col>
// //             <Form.Control
// //               type="number"
// //               min="1"
// //               placeholder="Quantity"
// //               name="quantity"
// //               value={formData.quantity}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </Col>
// //         </Row>
// //         <Form.Group controlId="hasCouponCode" className="mb-3">
// //           <Form.Check
// //             type="checkbox"
// //             label="Yes, I have a coupon code"
// //             name="hasCouponCode"
// //             checked={formData.hasCouponCode}
// //             onChange={handleInputChange}
// //           />
// //         </Form.Group>
// //         {formData.hasCouponCode && (
// //           <Form.Group controlId="couponCode" className="mb-3">
// //             <Form.Control
// //               type="text"
// //               placeholder="Enter your coupon code"
// //               name="couponCode"
// //               value={formData.couponCode}
// //               onChange={handleInputChange}
// //             />
// //           </Form.Group>
// //         )}
// //         <h2 className="mt-4">Order Summary</h2>
// //         <p>Subtotal: $100.00</p>
// //         <p>Your Savings: $10.00</p>
// //         <p>Total Payable: $90.00</p>
// //         <Button variant="primary" type="submit" className="mt-3">
// //           Order Now
// //         </Button>
// //       </Form>
// //       <Modal show={showModal} onHide={closeModal}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Order Placed Successfully!</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <p>
// //             Your order has been successfully placed. Thank you for choosing us!
// //           </p>
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="primary" onClick={closeModal}>
// //             Close
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </>
// //   );
// // };

// // export default OrderForm;

// import React, { useState } from "react";
// import { Form, Button, Col, Row, Modal } from "react-bootstrap";

// const OrderForm = ({ setOrderData }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     streetAddress: "",
//     state: "",
//     city: "",
//     location: "",
//     pincode: "",
//     mealPreference: "",
//     mealType: "",
//     subscriptionPeriod: "",
//     quantity: 1,
//     hasCouponCode: false,
//     couponCode: "",
//   });
//   const [showModal, setShowModal] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to the server
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Order placed successfully:", formData);
//         setShowModal(true);
//         // Pass the order data to the parent component
//         setOrderData((prevOrderData) => [...prevOrderData, formData]);
//       } else {
//         console.error("Error placing order:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error placing order:", error.message);
//     }
//   };

//   const closeModal = () => {
//     // Close the modal and reset the form data
//     setShowModal(false);
//     setFormData({
//       // ... (reset form data as needed)
//     });
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         {/* ... (rest of your form code) */}
//         <Button variant="primary" type="submit" className="mt-3">
//           Order Now
//         </Button>
//       </Form>
//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Placed Successfully!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Your order has been successfully placed. Thank you for choosing us!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default OrderForm;
// import React, { useState } from "react";
// import { Form, Button, Col, Row, Modal } from "react-bootstrap";

// const OrderForm = ({ setOrderData }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     streetAddress: "",
//     state: "",
//     city: "",
//     location: "",
//     pincode: "",
//     mealPreference: "",
//     mealType: "",
//     subscriptionPeriod: "",
//     quantity: 1,
//     hasCouponCode: false,
//     couponCode: "",
//   });
//   const [showModal, setShowModal] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to the server
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Order placed successfully:", formData);
//         setShowModal(true);
//         // Pass the order data to the parent component
//         setOrderData((prevOrderData) => [...prevOrderData, formData]);
//       } else {
//         console.error("Error placing order:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error placing order:", error.message);
//     }
//   };

//   const closeModal = () => {
//     // Close the modal and reset the form data
//     setShowModal(false);
//     setFormData({
//       // ... (reset form data as needed)
//     });
//   };

//   return (
//         <>
//           <Form onSubmit={handleSubmit}>
//             <h2>Delivery Details</h2>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Full Name"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//             </Row>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Mobile"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Street Address"
//                   name="streetAddress"
//                   value={formData.streetAddress}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//             </Row>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="State"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="City"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//             </Row>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Pincode"
//                   name="pincode"
//                   value={formData.pincode}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//             </Row>

//             <h2 className="mt-4">Order Details</h2>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   as="select"
//                   name="mealPreference"
//                   value={formData.mealPreference}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Meal Preference</option>
//                   <option value="Veg">Vegetarian</option>
//                   <option value="NonVeg">Non-Vegetarian</option>
//                 </Form.Control>
//               </Col>
//               <Col>
//                 <Form.Check
//                   type="radio"
//                   label="Regular"
//                   name="mealType"
//                   value="Regular"
//                   checked={formData.mealType === "Regular"}
//                   onChange={handleInputChange}
//                   inline
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Special"
//                   name="mealType"
//                   value="Special"
//                   checked={formData.mealType === "Special"}
//                   onChange={handleInputChange}
//                   inline
//                 />
//               </Col>
//             </Row>
//             <Row className="mb-3">
//               <Col>
//                 <Form.Control
//                   as="select"
//                   name="subscriptionPeriod"
//                   value={formData.subscriptionPeriod}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Subscription Period</option>
//                   <option value="1-month">1 Month</option>
//                   <option value="3-months">3 Months</option>
//                   <option value="6-months">6 Months</option>
//                 </Form.Control>
//               </Col>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   min="1"
//                   placeholder="Quantity"
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Col>
//             </Row>
//             <Form.Group controlId="hasCouponCode" className="mb-3">
//               <Form.Check
//                 type="checkbox"
//                 label="Yes, I have a coupon code"
//                 name="hasCouponCode"
//                 checked={formData.hasCouponCode}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             {formData.hasCouponCode && (
//               <Form.Group controlId="couponCode" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your coupon code"
//                   name="couponCode"
//                   value={formData.couponCode}
//                   onChange={handleInputChange}
//                 />
//               </Form.Group>
//             )}
//             <h2 className="mt-4">Order Summary</h2>
//             <p>Subtotal: $100.00</p>
//             <p>Your Savings: $10.00</p>
//             <p>Total Payable: $90.00</p>
//             <Button variant="primary" type="submit" className="mt-3">
//               Order Now
//             </Button>
//           </Form>

//       {/* Order Placed Modal */}
//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Placed Successfully!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Your order has been successfully placed. Thank you for choosing us!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default OrderForm;

// import React, { useState } from "react";
// import { Form, Button, Col, Row, Modal } from "react-bootstrap";

// const OrderForm = () => {
//   const [formData, setFormData] = useState({
//     // ... (unchanged)
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleInputChange = (e) => {
//     // ... (unchanged)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic here to handle form submission
//     console.log('Form submitted:', formData);

//     // Display the modal on successful form submission
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     // Close the modal and reset the form data
//     setShowModal(false);
//     setFormData({
//       // ... (reset form data as needed)
//     });
//   };

//   return (
//         <>
//           <Form onSubmit={handleSubmit}>
//             {/* ... (rest of your form code) */}
//             <Button variant="primary" type="submit" className="mt-3">
//               Order Now
//             </Button>
//           </Form>
//           <Modal show={showModal} onHide={closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Order Placed Successfully!</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <p>Your order has been successfully placed. Thank you for choosing us!</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="primary" onClick={closeModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//       );
//     };

import React, { useState } from "react";
import { Form, Button, Col, Row, Modal } from "react-bootstrap";
import { saveCustomerData } from "../Services/CustomerServices";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:4333/";

const OrderForm = ({ setOrderData }) => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Mobile: "",
    Address: "",
    State: "",
    City: "",
    Pincode: "",
    MealPreference: "",
    SubscriptionPeriod: "",
    Quantity: "",
    // TotalPayable: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/order", formData);
    setTimeout(() => {
      setFormData({});
    }, 0);
    //delete

    //   try {
    //     // Send a POST request to the server
    //     const response = await saveCustomerData(
    //       "http://127.0.0.1:4333/order",
    //       {
    //         "Content-Type": "application/json",
    //       },
    //       JSON.stringify(formData)
    //     );

    if (true) {
      console.log("Order placed successfully:", formData);
      setShowModal(true);
      // Pass the order data to the parent component
      // setOrderData((prevOrderData) => [...prevOrderData, formData]);
    }
    // } catch (error) {
    //   console.error("Error placing order:", error);
    // }
  };

  const closeModal = () => {
    // Close the modal and reset the form data
    setShowModal(false);
    setFormData({
      // ... (reset form data as needed)
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <br></br>
        <hr></hr>
      
       <center><h2>DELIVERY DETAILS</h2></center> 
       <br></br>
       <br></br>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Full Name"
              id="FullName"
              name="FullName"
              value={formData.FullName}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              placeholder="Email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="tel"
              placeholder="Mobile"
              id="Mobile"

              name="Mobile"
              value={formData.Mobile}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Address"
              id="Address"

              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="State"
              id="State"

              name="State"
              value={formData.State}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="City"
              id="City"

              name="City"
              value={formData.City}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        <Row className="mb-3">
          {/* <Col>
            <Form.Control
              type="text"
              placeholder="Location"
              name="Location"
              value={formData.Location}
              onChange={handleInputChange}
              required
            />
          </Col> */}
          <Col>
            <Form.Control
              type="text"
              placeholder="Pincode"
              id="Pincode"

              name="Pincode"
              value={formData.Pincode}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        <br></br>
       
       
        <center><h2 className="mt-4">ORDER DETAILS</h2></center>
        <br></br>
        <br></br>
        <Row className="mb-3">
          <Col>
            <Form.Control
              as="select"
              name="MealPreference"
              id="MealPreference"

              value={formData.MealPreference}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Meal Preference</option>
              <option value="Veg">Vegetarian</option>
              <option value="NonVeg">Non-Vegetarian</option>
            </Form.Control>
          </Col>
          {/* <Col>
            <Form.Check
              type="radio"
              label="Regular"
              name="mealType"
              value="Regular"
              checked={formData.MealType === "Regular"}
              onChange={handleInputChange}
              inline
            /> */}
          {/* <Form.Check
              type="radio"
              label="Special"
              name="mealType"
              value="Special"
              checked={formData.mealType === "Special"}
              onChange={handleInputChange}
              inline
            />
          </Col> */}
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              as="select"
              name="SubscriptionPeriod"
              id="SubscriptionPeriod"

              value={formData.SubscriptionPeriod}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Subscription Period</option>
              <option value="1-month">1 Month</option>
              <option value="3-months">3 Months</option>
              <option value="6-months">6 Months</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              type="number"
              min="1"
              placeholder="Quantity"
              id="Quantity"

              name="Quantity"
              value={formData.Quantity}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Row>
        {/* <Form.Group controlId="hasCouponCode" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Yes, I have a coupon code"
            name="hasCouponCode"
            checked={formData.hasCouponCode}
            onChange={handleInputChange}
          />
        </Form.Group>
        {formData.hasCouponCode && (
          <Form.Group controlId="couponCode" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your coupon code"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
            />
          </Form.Group> */}

        {/* <h2 className="mt-4">Order Summary</h2>
        <p>Subtotal: (&#8377;)100.00</p>
        <p>Your Savings: (&#8377;)10.00</p>
        <p>Total Payable:(&#8377;) 90.00</p> */}
      <center><Button variant="success" type="submit" className="mt-3">
          Order Now
        </Button></center>  
        <br></br>
        <br></br>
      </Form>

      {/* Success Modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your order has been successfully placed. Thank you for choosing us!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderForm;
