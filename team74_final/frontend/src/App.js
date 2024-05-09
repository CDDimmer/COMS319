import "bootstrap/dist/css/bootstrap.css";
import { Container, Card, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import "./app.css";

var location = "";
var category = "";

function App() {
  const baseURL = "http://localhost:4000/";
  const Iastate = baseURL + "images/iastate.jpg";
  const [viewer, setViewer] = useState(0);
  const [Places, setPlaces] = useState([]);
  const [Comments, setComments] = useState([]);

  // TODO: finish getLocation
  // TODO: finish getLocations
  // TODO: finish getTopLocations
  // TODO: finish getReviews
  // TODO: remove all of the fake data used for testing.
  // TODO: connect these 4 functions into the views they need to be in:
  // getLocations: LocationListView
  // getTopLocations: BrowseView
  // getLocation: LocationView
  // getReviews: LocationView
  // Anytime the user clicks on a location card, the location variable should be updated to that location.
  // Anytime the user goes to a category menu in the navbar, the category variable should be updated to that category.
  // The get functions should use the location and category variables to know what to request from the backend.

  function getAllPlaces() {
    fetch(baseURL + "locations")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      });
  }

  function getfilteredPlaces(category) {
    fetch(baseURL + "locations")
      .then((response) => response.json())
      .then((data) => {
        const filteredPlaces = data.filter(
          (place) => place.category === category
        );
        setPlaces(filteredPlaces);
      });
  }

  function getAllComments() {
    fetch(baseURL + "comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }

  function getPlaceComments(placeID) {
    fetch(baseURL + "comments/" + placeID)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }

  //This is temporary and needs to be replaced with getTopLocations.
  const topLocations = [
    //This is temporary, it will be replaced with fetch requests in the create top locations cards.
    {
      category: "Food",
      name: "UDCC",
      rating: 4.5,
      ratingCount: 437,
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Dorms/Apartments",
      name: "Friley",
      rating: 4.2,
      ratingCount: 437,
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Study Locations",
      name: "Library",
      rating: 4.7,
      ratingCount: 437,
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Study Locations",
      name: "Library",
      rating: 4.7,
      ratingCount: 437,
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Study Locations",
      name: "Library",
      rating: 4.7,
      ratingCount: 437,
      image: "https://via.placeholder.com/150",
    },
  ];

  function setLocation(newLocation, viewNum) {
    location = newLocation;
    console.log("location");
    setViewer(viewNum);
  }

  function SetCategory(newCategory, viewNum) {
    category = newCategory;
    getfilteredPlaces(newCategory);
    setViewer(viewNum);
  }

  function createTopLocationCards(category) {
    return createLocationCards(category);
  }

  function createLocationCards(category) {
    return topLocations.map((location, index) => (
      <Nav.Link
        className="text-center text-danger"
        onClick={() => setLocation(location, 2)}
      >
        <Card key={index} className="m-3" style={{ width: "250px" }}>
          {" "}
          <Card.Img
            variant="top"
            src={location.image}
            alt={location.name}
            style={{
              height: "150px",
              objectFit: "cover",
              borderRadius: "7px 7px 0 0",
            }}
          />{" "}
          <Card.Body>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>Rating: {location.rating}/5</Card.Text>
            <Card.Text>{location.rating} Ratings</Card.Text>
          </Card.Body>
        </Card>
      </Nav.Link>
    ));
  }

  function LocationView() {
    return (
      <div>
        <div
          className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
          style={imageStyle}
        >
          <div className="col-md-5 p-lg-5 mx-auto my-5"></div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <h1>Name of location goes here</h1>
        <h5>Average Rating: </h5>
        <h3>Description</h3>
        <button className="btn btn-warning border" onClick={() => setViewer(4)}>
          Write a Review
        </button>
        <h3>Reviews</h3>
        <div className="d-flex flex-wrap">{showReviews()}</div>
      </div>
    );
  }

  function showReviews() {
    // Sample review
    const reviews = [
      {
        rating: 4,
        reviewText: "Review goes here",
        date: "May 15, 2024",
      },
      {
        rating: 5,
        reviewText: "A review goes here!",
        date: "March 6, 2024",
      },
    ];

    let reviewsHTML = [];

    for (var i = 0; i < reviews.length; i++) {
      console.log(reviews[i]);
      reviewsHTML.push(createReviewCards(reviews[i]));
    }

    console.log(reviewsHTML);

    return <div>{reviewsHTML}</div>;
  }

  //This function will arrange each review into a card and send them back to showReviews().
  function createReviewCards(review) {
    const { rating, reviewText, date } = review;
    return (
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex align-items-center mb-2">
            <div className="me-3">
              <span className="fw-bold">Rating:</span> {rating}/5
            </div>
            <div className="flex-grow-1">
              <span className="fw-bold">Review Date:</span> {date}
            </div>
          </div>
          <p className="mb-0">{reviewText}</p>
        </Card.Body>
      </Card>
    );
  }

  const homeBackgroundImageStyle = {
    backgroundImage: `url(${Iastate})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px",
    borderRadius: "7px",
  };

  const imageStyle = {
    backgroundImage: `url(${location.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px",
    borderRadius: "7px",
  };

  function BrowseView() {
    return (
      <div>
        <div
          className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
          style={homeBackgroundImageStyle}
        >
          <div className="col-md-5 p-lg-5 mx-auto my-5"></div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <Container className="mt-5">
          <h1>Top Places to Eat</h1>
          <div className="d-flex flex-wrap">{createTopLocationCards()}</div>
          <h1>Top Places to Study</h1>
          <div className="d-flex flex-wrap">{createTopLocationCards()}</div>
          <h1>Top Dorms</h1>
          <div className="d-flex flex-wrap">{createTopLocationCards()}</div>
        </Container>
      </div>
    );
  }

  // This test data needs to be removed and replaced with the actual function. This should get called by LocationListView.
  function getLocations() {
    return [
      {
        id: 1,
        name: "Location 1",
        rating: 4.5,
        description: "Description for Location 1",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Location 2",
        rating: 3.8,
        description: "Description for Location 2",
        image: "https://via.placeholder.com/150",
      },
      // Add more entities as needed
    ];
  }

  // This should get called by the LocationView function.
  function getLocation() {}

  // This should get called by the createTopLocationCards function.
  function getTopLocations() {}

  // This should get called by the showReivews function.
  function getReviews() {}

  function LocationListView() {
    var locations = [];
    locations = Places;
    return (
      <Container>
        <Row xs={1} md={1} lg={1} className="g-4">
          {" "}
          {locations.map((location) => (
            <Col key={location.placeID}>
              <Card className="h-100">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={location.image}
                      alt={location.altText}
                      className="h-100"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{location.name}</Card.Title>
                      <Card.Text>Rating: {location.Rating}</Card.Text>
                      <Card.Text>{location.desc}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  function ReviewSubmittedView() {
    return (
      <div className="container-fluid py-5 bg-danger">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>Review Submitted</h1>
          </div>
        </div>
      </div>
    );
  }

  const WriteReviewView = () => {
    const [formData, setFormData] = useState({
      name: location.name,
      rating: 0,
      review: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "http://localhost:4000/", //We need to hook up the frontend to the backend.
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          console.log("Review added successfully!");
        } else {
          console.error("Failed to save review");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setFormData({
          name: location.name,
          rating: 0,
          review: "",
        });
        setViewer(5);
      }
    };

    return (
      <div className="container">
        <h1>Leave a Review</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Rating
            </label>
          </div>
          <div className="mb-3">
            <select
              type="number"
              name="rating"
              id="rating"
              onChange={handleChange}
            >
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
              <option value="audi">5</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Review
            </label>
            <textarea
              className="form-control"
              id="review"
              name="review"
              required
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  // View for student & class page:
  function ClassView() {
    // constants for images
    const teacherImageJannesari =
      "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/ali_janessari1.jpg?itok=L9OV3HlA";
    const teacherImageAldaco =
      "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/1517665937421.jpg?itok=15jJS_fr";
    const studentImageColeman =
      "https://seniord.cs.iastate.edu/2023-Dec-07/files/inline-images/Dimmer%20Coleman%20%20%283%29.jpg";
    const studentImageJake = baseURL + "images/jake.jpg";
    // Constants for emails
    const teacherEmailJannesari = "jannesar@iastate.edu";
    const teacherEmailAldaco = "aaldaco@iastate.edu";
    const studentEmailColeman = "cddimmer@iastate.edu";
    const studentEmailJake = "jtegler@iastate.edu";
    // Constants for course information
    const courseName =
      "SE/ComS319 Construction of User Interfaces, Spring 2024";
    const completeProfessorNameJannesari = "Dr. Ali Jannesari";
    const completeProfessorNameAldaco = "Dr. Abraham N. Aldaco Gastelum";

    return (
      <div>
        <div class="p-5 bg-warning">
          <div class="container-fluid py-5">
            <h1 class="display-3 fw-bold text-center">{courseName}</h1>
            <br></br>
            <h1 class="display-5 fw-bold text-center">May 5th, 2024</h1>
          </div>
          <div class="row align-items-md-stretch bg-danger rounded-3 mb-5">
            <h1 class="text-center fw-bold text-uppercase display-2">
              Professors:
            </h1>
            <div class="col-md-6">
              <div class="h-100 p-5">
                <h2 class="text-center">
                  <img
                    class="col-md-5 rounded border border-black border-2"
                    src={teacherImageJannesari}
                    alt="Ali Jannesari - A professor at Iowa State University"
                  ></img>
                  <br></br>
                  {completeProfessorNameJannesari}
                  <br></br>
                  <a href={"mailto:" + teacherImageJannesari}>
                    {teacherEmailJannesari}
                  </a>
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 rounded-3">
                <h2 class="text-center">
                  <img
                    class="col-md-5 rounded border border-black border-2"
                    src={teacherImageAldaco}
                    alt="Abraham Aldaco - A professor at Iowa State University"
                  ></img>
                  <br></br>
                  {completeProfessorNameAldaco}
                  <br></br>
                  <a href={"mailto:" + teacherImageAldaco}>
                    {teacherEmailAldaco}
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div class="row align-items-md-stretch bg-danger rounded-3 mb-2">
            <h1 class="text-center fw-bold text-uppercase display-2">
              Students:
            </h1>
            <div class="col-md-6">
              <div class="h-100 p-5">
                <h2 class="text-center">
                  <img
                    class="col-md-5 rounded border border-black border-2"
                    src={studentImageColeman}
                    alt="Coleman Dimmer - Student at Iowa State University"
                  ></img>
                  <br></br>
                  Coleman Dimmer
                  <br></br>
                  <a class="mt-3" href={"mailto:" + studentEmailColeman}>
                    {studentEmailColeman}
                  </a>
                </h2>
                <hr></hr>
                <p class="text-center fs-5">
                  I am student at Iowa State University. I am Computer Science
                  major with minors in cyber security and data science. I have
                  experience with many languages, including: Java, Python,
                  C/C++, and more.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 rounded-3">
                <h2 class="text-center">
                  <img
                    class="col-md-5 rounded border border-black border-2"
                    src={studentImageJake}
                    alt="Jake Egler - Student at Iowa State University"
                  ></img>
                  <br></br>
                  Jake Egler
                  <br></br>
                  <a href={"mailto:" + studentEmailJake}>{studentEmailJake}</a>
                </h2>
                <hr></hr>
                <p class="text-center fs-5">
                  I am a senior computer science student at Iowa State
                  University. I also have experience with Onshape CAD software
                  and making electronics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function createFooter() {
    return (
      <div class="bg-danger">
        <div class="container">
          <footer class="py-3">
            <hr></hr>
            <p class="text-center text-body-secondary">
              © 2024 Com S 319 - Iowa State University
              <br></br>Coleman Dimmer - Jake Egler
            </p>
          </footer>
        </div>
      </div>
    );
  }

  function stickyNav() {
    return (
      <Navbar
        expand="lg"
        className="bg-danger py-2 border-bottom border-black border-2"
        sticky="top"
      >
        <Container className="justify-content-center">
          <div class="container-fluid">
            <Nav.Link
              className="text-center text-danger"
              onClick={() => setViewer(0)}
            >
              <h1 class="display-6 fw-bold text-center text-warning">
                &#128270;Cy's Finds&#128269;
              </h1>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    );
  }

  function createSidebar() {
    return (
      <Nav variant="underline" className="flex-column">
        <Nav.Item>
          <Nav.Link
            className="text-center text-danger"
            onClick={() => setViewer(0)}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-center text-danger"
            onClick={() => SetCategory("Food", 3)}
          >
            Food
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-center text-danger"
            onClick={() => SetCategory("academic", 3)}
          >
            Academic
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-center text-danger"
            onClick={() => SetCategory("DormHall", 3)}
          >
            Dorms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-center text-danger"
            onClick={() => setViewer(1)}
          >
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  return (
    <div>
      {stickyNav()}
      <div class="container-fluid">
        <div class="row">
          <div class="sidebar col-md-3 col-lg-2 p-0 bg-warning">
            {createSidebar()}
          </div>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-danger">
            {viewer === 0 && <BrowseView />}
            {viewer === 1 && <ClassView />}
            {viewer === 2 && <LocationView />}
            {viewer === 3 && <LocationListView />}
            {viewer === 4 && <WriteReviewView />}
            {viewer === 5 && <ReviewSubmittedView />}
          </div>
        </div>
      </div>
      {createFooter()}
    </div>
  );
}

export default App;
