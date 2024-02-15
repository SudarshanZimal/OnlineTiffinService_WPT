// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// import image1 from './Image/alternate_menu1.jpg';
// import image2 from './Image/alternate_menu2.jpg';
// import image3 from './Image/alternatemenu1.jpg';

// import image4 from './Image/alternatemenu2.jpg';
// import image5 from './Image/nonveg_menu2.jpg';
// import image6 from './Image/nonvegmenu1.jpg';

// import image7 from './Image/nonveg_menu1.jpg';

// const MealPlansSection = () => {
//   const [showMon, setShowMon] = useState(false);
//   const [showTue, setShowTue] = useState(false);

//   const handleShow = (day) => {
//     switch (day) {
//       case 'Mon':
//         setShowMon(true);
//         break;
//       case 'Tue':
//         setShowTue(true);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleClose = (day) => {
//     switch (day) {
//       case 'Mon':
//         setShowMon(false);
//         break;
//       case 'Tue':
//         setShowTue(false);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <section className="delicious-section" style={{ backgroundImage: 'url(images/scroll1.jpg)' }}>
//       <div className="container">
//         <div className="sec-title-one" style={{ marginBottom: '30px' }}>
//           <h2 style={{ color: 'white' }}>Choose Meal Plans</h2>
//           <hr />
//           <h4 style={{ color: '#fff' }}>Call Us on : <strong>+91-8527782260</strong></h4>
//         </div>
//         <div>
//           {/* Nav tabs */}
//           <center>
//             <button><a varient="Primary" href="#Mon" aria-controls="Mon" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Mon</a></button>
//             <button><a varient="Primary" href="#Tue" aria-controls="Tue" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Tue</a></button>
//             <button><a varient="Primary"  href="#Wed" aria-controls="Wed" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Wed</a></button>
//             <button><a varient="Primary" href="#Thu" aria-controls="Thu" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Thu</a></button>
//             <button><a varient="Primary" href="#Fri" aria-controls="Fri" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Fri</a></button>
//             <button><a varient="Primary" href="#Sat" aria-controls="Sat" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Sat</a></button>
//             <button><a varient="Primary" href="#Sun" aria-controls="Sun" role="tab" data-toggle="tab" className="read-more theme-btn btn-style-one">Sun</a></button>
//           </center>
//           <br />
//           <br />
//           {/* Tab panes */}
//           <div className="tab-content">
//             {/* Mon */}
//             <div role="tabpanel" className="tab-pane active" id="Mon">
//               <div className="col-lg-12 col-md-12 col-sm-12">
//                 {/* Content for Monday */}
//                 <h1>
//                   <img src={image1} alt="Veg Mini" onClick={() => handleShow('Mon')} />
//                 </h1>
//                 <h2>
//                   <a varient="Primary" href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Mon')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//             {/* Tue */}
//             <div role="tabpanel" className="tab-pane" id="Tue">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image2} alt="Veg Standard" onClick={() => handleShow('Tue')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Tue')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//              {/* Wed */}
//              <div role="tabpanel" className="tab-pane active" id="Wed">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image3} alt="Veg Mini" onClick={() => handleShow('Wed')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Wed')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//              {/* Tue */}
//              <div role="tabpanel" className="tab-pane active" id="Thu">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image4} alt="Veg Mini" onClick={() => handleShow('Thu')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Thu')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//              {/* Fri */}
//              <div role="tabpanel" className="tab-pane active" id="Fri">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image5} alt="Veg Mini" onClick={() => handleShow('Fri')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Fri')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//              {/* Sat */}
//              <div role="tabpanel" className="tab-pane active" id="Sat">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image6} alt="Veg Mini" onClick={() => handleShow('Sat')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Sat')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>

//              {/* Sun */}
//              <div role="tabpanel" className="tab-pane active" id="Sun">
//               <div className="col-lg-12 col-md-12 col-sm-12">

//                 <h1>
//                   <img src={image7} alt="Veg Mini" onClick={() => handleShow('Sun')} />
//                 </h1>
//                 <h2>
//                   <a href="#" className="read-more theme-btn btn-style-one" onClick={() => handleShow('Sun')}>
//                     Order Now
//                   </a>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Monday */}
//       <Modal show={showMon} onHide={() => handleClose('Mon')}>
//         <Modal.Header closeButton>
//           <Modal.Title>Meal Plan for Monday</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Include your detailed meal plan content for Monday here.</p>
//           {/* Add specific details, images, etc. for Monday's meal plan */}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => handleClose('Mon')}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal for Tuesday */}
//       <Modal show={showTue} onHide={() => handleClose('Tue')}>
//         <Modal.Header closeButton>
//           <Modal.Title>Meal Plan for Tuesday</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Include your detailed meal plan content for Tuesday here.</p>
//           {/* Add specific details, images, etc. for Tuesday's meal plan */}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => handleClose('Tue')}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </section>
//   );
// };

// export default MealPlansSection;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Import Button component

import image1 from "./Image/alternate_menu1.jpg";
import image2 from "./Image/alternate_menu2.jpg";
import image3 from "./Image/alternatemenu1.jpg";
import image4 from "./Image/alternatemenu2.jpg";
import image5 from "./Image/nonveg_menu2.jpg";
import image6 from "./Image/nonvegmenu1.jpg";
import image7 from "./Image/nonveg_menu1.jpg";
import i2 from "./Image/tiffin3.jpg";
import i3 from "./Image/tiffin4.jpg" ;
import i4 from "./Image/tiffn5.jpg";


const MealPlansSection = () => {
  const handleNavigation = (day) => {
    const element = document.getElementById(day);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="delicious-section"
      style={{ backgroundImage: "url(images/scroll1.jpg)" }}
    >
      <div className="container">
        <div className="sec-title-one" style={{ marginBottom: "30px" }}>
          
        <hr />
         <h6 style={{ color: "#000000" }}>
            Call Us on : +91-8527782260 / +91-9623732589 </h6>
          <br></br>
          <center><h1 style={{ color: "red" }}>Are you Hungry?  Tasty Bites, Just a Click Away!</h1></center>
          <br></br>
          <center><h2 style={{ color: "green" }}> Choose our Meal Plans...</h2></center>

         <br></br>
        <center><h1><strong style={{ color: "#800080" }}>Order Now</strong></h1></center> 
        <hr></hr>
        </div>
        
        {/* <div className="image-container">

        <div className="col-lg-4 col-md-4 col-sm-4">
               <img src={i2}  />
              <img src={i3}  />
              <img src={i4} />
        </div>
        </div> */}
        <div>
          {/* Nav tabs */}
          <center>
            <Button
              varient="primary"
              className="me-2"
              onClick={() => handleNavigation("Mon")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Mon&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="success"
              className="me-2"
              onClick={() => handleNavigation("Tue")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Tue&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="danger"
              className="me-2"
              onClick={() => handleNavigation("Wed")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp; Wed&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="info"
              className="me-2"
              onClick={() => handleNavigation("Thu")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Thu&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => handleNavigation("Fri")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Fri&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="warning"
              className="me-2"
              onClick={() => handleNavigation("Sat")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp; Sat&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="dark"
              className="me-2"
              onClick={() => handleNavigation("Sun")}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Sun&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          </center>
          <br />
          <br />
          {/* Tab panes */}
          <div className="tab-content">
            {/* Mon */}
            <center>
              <div id="Mon" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Content for Monday */}
                  <h1>
                    <img src={image1} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="primary" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>

            <center>
              {/* Tue */}
              <div id="Tue" role="tabpanel" className="tab-pane">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image2} alt="Veg Standard" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="success" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
            <center>
              {/* Wed */}
              <div id="Wed" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image3} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="danger" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
            <center>
              {/* Thu */}
              <div id="Thu" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image4} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="info" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
            <center>
              {/* Fri */}
              <div id="Fri" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image5} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="secondary" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
            <center>
              {/* Sat */}
              <div id="Sat" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image6} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="warning" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
            <center>
              {/* Sun */}
              <div id="Sun" role="tabpanel" className="tab-pane active">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h1>
                    <img src={image7} alt="Veg Mini" />
                  </h1>
                  <h2>
                    <Link to="/OrderDetails">
                      <Button variant="dark" className="me-2">
                        Order Now
                      </Button>
                    </Link>
                  </h2>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

const style=`
  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
};`
export default MealPlansSection;