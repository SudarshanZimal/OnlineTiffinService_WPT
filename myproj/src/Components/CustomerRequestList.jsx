import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Header } from "./Header";
import { OrderDetails } from "./OrderDetails";
import { fetchCustomerData } from "../Services/CustomerServices";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4333/";

export function CustomerRequestList({ orderData }) {
  const [Details, setCustomers] = useState([]);

  useEffect(() => {
    populateCustomerState();
  }, [orderData]); // Add orderData to the dependency array

  async function populateCustomerState() {
    try {
      const data = await fetchCustomerData();
      setCustomers(data.Details);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCustomerData()
  }, []);
  // const handleDelete = async (name) => {
  //   try {
  //     console.log("Deleting:", name);
  //     const response = await axios.delete("/delete", { data: { name } });

  //     console.log("Delete response:", response);

  //     if (response.data.success) {
  //       fetchCustomerData();
  //       alert(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Delete request failed:", error);
  //   }
  // };
  
  const handleDelete = async(id)=>{
    const data = await axios.delete("/order/"+id)
   
    if(data.data.success){
      fetchCustomerData()
      alert(data.data.message)

     }
  }

  return (
    <Container>
      <Header  text="List of all Tiffin Orders" />
      <Table className="mt-4">
        <thead>
          <tr>
            <th>FullName</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Meal Preference</th>
            <th>Subscription Period</th>
            <th>Quantity</th>
            <th>Total Payable(&#8377;)</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Details[0] ? (
            Details.map((s) => {
              return (
                <tr>
                  <td>{s.FullName}</td>
                  <td>{s.Mobile}</td>
                  <td>{s.Address}</td>
                  <td>{s.State}</td>
                  <td>{s.City}</td>
                  <td>{s.Pincode}</td>
                  <td>{s.MealPreference}</td>
                  <td>{s.SubscriptionPeriod}</td>
                  <td>{s.Quantity}</td>
                  <td>{s.MealPreference === "Veg" ? s.Quantity * 90 : s.Quantity * 110}</td>
                  <td>
                  <Link to="/OrderDetails">
                      <Button variant="primary" className="me-2">
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="me-2"
                      onClick={() => handleDelete(s._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h2>No Data Available</h2>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
