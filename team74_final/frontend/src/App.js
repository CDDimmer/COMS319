import "bootstrap/dist/css/bootstrap.css";
import { Container, Card, Nav, Navbar } from "react-bootstrap";
import Iastate from "./iastate.jpg";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import "./app.css";

var location = "";

function App() {
        const baseURL = "http://localhost:4000/";
        const [viewer, setViewer] = useState(0);

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
                                <Card
                                        key={index}
                                        className="m-3"
                                        style={{ width: "250px" }}
                                >
                                        {" "}
                                        <Card.Img
                                                variant="top"
                                                src={location.image}
                                                alt={location.name}
                                                style={{
                                                        height: "150px",
                                                        objectFit: "cover",
                                                        borderRadius:
                                                                "7px 7px 0 0",
                                                }}
                                        />{" "}
                                        <Card.Body>
                                                <Card.Title>
                                                        {location.name}
                                                </Card.Title>
                                                <Card.Text>
                                                        Rating:{" "}
                                                        {location.rating}/5
                                                </Card.Text>
                                                <Card.Text>
                                                        {location.ratingCount}{" "}
                                                        Ratings
                                                </Card.Text>
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
                                <button
                                        className="btn btn-warning border"
                                        onClick={() => setViewer(4)}
                                >
                                        Write a Review
                                </button>
                                <h3>Reviews</h3>
                                <div className="d-flex flex-wrap">
                                        {showReviews()}
                                </div>
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
                                                        <span className="fw-bold">
                                                                Rating:
                                                        </span>{" "}
                                                        {rating}/5
                                                </div>
                                                <div className="flex-grow-1">
                                                        <span className="fw-bold">
                                                                Review Date:
                                                        </span>{" "}
                                                        {date}
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
                                        <div className="d-flex flex-wrap">
                                                {createTopLocationCards()}
                                        </div>
                                        <h1>Top Places to Study</h1>
                                        <div className="d-flex flex-wrap">
                                                {createTopLocationCards()}
                                        </div>
                                        <h1>Top Dorms</h1>
                                        <div className="d-flex flex-wrap">
                                                {createTopLocationCards()}
                                        </div>
                                </Container>
                        </div>
                );
        }

        function LocationListView() {}

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
                                        "http://localhost:8081/addProduct",
                                        {
                                                method: "POST",
                                                headers: {
                                                        "Content-Type":
                                                                "application/json",
                                                },
                                                body: JSON.stringify(formData),
                                        }
                                );
                                if (response.ok) {
                                        console.log(
                                                "Product added successfully!"
                                        );
                                } else {
                                        console.error("Failed to add product");
                                }
                        } catch (error) {
                                console.error("Error:", error);
                        } finally {
                                setFormData({
                                        id: 0,
                                        title: "",
                                        price: 0.0,
                                        description: "",
                                        category: "",
                                        image: "",
                                        rate: 0.0,
                                        count: 0,
                                });
                        }
                };

                return (
                        <div className="container">
                                <h1>Add New Product</h1>
                                <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="id"
                                                        className="form-label"
                                                >
                                                        Product ID
                                                </label>
                                                <input
                                                        type="number"
                                                        className="form-control"
                                                        id="id"
                                                        name="id"
                                                        required
                                                        value={formData.id}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="description"
                                                        className="form-label"
                                                >
                                                        Description
                                                </label>
                                                <textarea
                                                        className="form-control"
                                                        id="description"
                                                        name="description"
                                                        required
                                                        value={
                                                                formData.description
                                                        }
                                                        onChange={handleChange}
                                                ></textarea>
                                        </div>
                                        <button
                                                type="submit"
                                                className="btn btn-primary"
                                        >
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
                const completeProfessorNameAldaco =
                        "Dr. Abraham N. Aldaco Gastelum";

                return (
                        <div>
                                <div class="p-5 bg-warning">
                                        <div class="container-fluid py-5">
                                                <h1 class="display-3 fw-bold text-center">
                                                        {courseName}
                                                </h1>
                                                <br></br>
                                                <h1 class="display-5 fw-bold text-center">
                                                        May 5th, 2024
                                                </h1>
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
                                                                                src={
                                                                                        teacherImageJannesari
                                                                                }
                                                                                alt="Ali Jannesari - A professor at Iowa State University"
                                                                        ></img>
                                                                        <br></br>
                                                                        {
                                                                                completeProfessorNameJannesari
                                                                        }
                                                                        <br></br>
                                                                        <a
                                                                                href={
                                                                                        "mailto:" +
                                                                                        teacherImageJannesari
                                                                                }
                                                                        >
                                                                                {
                                                                                        teacherEmailJannesari
                                                                                }
                                                                        </a>
                                                                </h2>
                                                        </div>
                                                </div>
                                                <div class="col-md-6">
                                                        <div class="h-100 p-5 rounded-3">
                                                                <h2 class="text-center">
                                                                        <img
                                                                                class="col-md-5 rounded border border-black border-2"
                                                                                src={
                                                                                        teacherImageAldaco
                                                                                }
                                                                                alt="Abraham Aldaco - A professor at Iowa State University"
                                                                        ></img>
                                                                        <br></br>
                                                                        {
                                                                                completeProfessorNameAldaco
                                                                        }
                                                                        <br></br>
                                                                        <a
                                                                                href={
                                                                                        "mailto:" +
                                                                                        teacherImageAldaco
                                                                                }
                                                                        >
                                                                                {
                                                                                        teacherEmailAldaco
                                                                                }
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
                                                                                src={
                                                                                        studentImageColeman
                                                                                }
                                                                                alt="Coleman Dimmer - Student at Iowa State University"
                                                                        ></img>
                                                                        <br></br>
                                                                        Coleman
                                                                        Dimmer
                                                                        <br></br>
                                                                        <a
                                                                                class="mt-3"
                                                                                href={
                                                                                        "mailto:" +
                                                                                        studentEmailColeman
                                                                                }
                                                                        >
                                                                                {
                                                                                        studentEmailColeman
                                                                                }
                                                                        </a>
                                                                </h2>
                                                                <hr></hr>
                                                                <p class="text-center fs-5">
                                                                        I am
                                                                        student
                                                                        at Iowa
                                                                        State
                                                                        University.
                                                                        I am
                                                                        Computer
                                                                        Science
                                                                        major
                                                                        with
                                                                        minors
                                                                        in cyber
                                                                        security
                                                                        and data
                                                                        science.
                                                                        I have
                                                                        experience
                                                                        with
                                                                        many
                                                                        languages,
                                                                        including:
                                                                        Java,
                                                                        Python,
                                                                        C/C++,
                                                                        and
                                                                        more.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div class="col-md-6">
                                                        <div class="h-100 p-5 rounded-3">
                                                                <h2 class="text-center">
                                                                        <img
                                                                                class="col-md-5 rounded border border-black border-2"
                                                                                src={
                                                                                        studentImageJake
                                                                                }
                                                                                alt="Jake Egler - Student at Iowa State University"
                                                                        ></img>
                                                                        <br></br>
                                                                        Jake
                                                                        Egler
                                                                        <br></br>
                                                                        <a
                                                                                href={
                                                                                        "mailto:" +
                                                                                        studentEmailJake
                                                                                }
                                                                        >
                                                                                {
                                                                                        studentEmailJake
                                                                                }
                                                                        </a>
                                                                </h2>
                                                                <hr></hr>
                                                                <p class="text-center fs-5">
                                                                        I am a
                                                                        senior
                                                                        computer
                                                                        science
                                                                        student
                                                                        at Iowa
                                                                        State
                                                                        University.
                                                                        I also
                                                                        have
                                                                        experience
                                                                        with
                                                                        Onshape
                                                                        CAD
                                                                        software
                                                                        and
                                                                        making
                                                                        electronics.
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
                                                        © 2024 Com S 319 - Iowa
                                                        State University
                                                        <br></br>Coleman Dimmer
                                                        - Jake Egler
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
                                                        onClick={() =>
                                                                setViewer(0)
                                                        }
                                                >
                                                        <h1 class="display-6 fw-bold text-center text-warning">
                                                                &#128270;Cy's
                                                                Finds&#128269;
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
                                                {viewer === 2 && (
                                                        <LocationView />
                                                )}
                                                {viewer === 3 && (
                                                        <LocationListView />
                                                )}
                                                {viewer === 4 && (
                                                        <WriteReviewView />
                                                )}
                                        </div>
                                </div>
                        </div>
                        {createFooter()}
                </div>
        );
}

export default App;
