import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const baseURL = "http://localhost:4000/";
  const [viewer, setViewer] = useState(1);

  function BrowseView() {
    return <div>BrowseView here</div>;
  }

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
              © 2024 Com S 319 - Iowa State University<br></br>Coleman Dimmer -
              Jake Egler
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
            <h1 class="display-6 fw-bold text-center text-warning">
              &#128270;Cy's Finds&#128269;
            </h1>
          </div>
        </Container>
      </Navbar>
    );
  }

  function createSidebar() {
    return (
      <div class="flex-shrink-0 p-3" style={{ width: "280px" }}>
        <a
          href="/"
          class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
        >
          <span class="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Weekly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Monthly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    New
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Processed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Shipped
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    New...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
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
          </div>
        </div>
      </div>
      {createFooter()}
    </div>
  );
}

export default App;
