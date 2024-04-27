import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import jakePhoto from "./jake.jpg";

function App() {
        const [viewer, setViewer] = useState(1);

        function changeViewStudents() {
                let myNavItem = "navitem-" + viewer;
                document.getElementById(myNavItem).classList.remove("active");
                setViewer(1);
                document.getElementById("navitem-1").classList.add("active");
        }

        function changeViewCreate() {
                let myNavItem = "navitem-" + viewer;
                document.getElementById(myNavItem).classList.remove("active");
                setViewer(2);
                document.getElementById("navitem-2").classList.add("active");
        }

        function changeViewRead() {
                let myNavItem = "navitem-" + viewer;
                document.getElementById(myNavItem).classList.remove("active");
                setViewer(3);
                document.getElementById("navitem-3").classList.add("active");
        }

        function changeViewUpdate() {
                let myNavItem = "navitem-" + viewer;
                document.getElementById(myNavItem).classList.remove("active");
                setViewer(4);
                document.getElementById("navitem-4").classList.add("active");
        }

        function changeViewDelete() {
                let myNavItem = "navitem-" + viewer;
                document.getElementById(myNavItem).classList.remove("active");
                setViewer(5);
                document.getElementById("navitem-5").classList.add("active");
        }

        function StudentView() {
                const teacherImageJannesari =
                        "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/ali_janessari1.jpg?itok=L9OV3HlA";
                const teacherImageAldaco =
                        "https://www.cs.iastate.edu/files/styles/people_thumb/public/people/profilepictures/1517665937421.jpg?itok=15jJS_fr";

                return (
                        <div>
                                <div class="p-5 mb-4">
                                        <div class="container-fluid py-5">
                                                <h1 class="display-5 fw-bold text-center">
                                                        SE/COMS 319
                                                </h1>
                                                <p class="fs-4 text-center">
                                                        SE/COMS 319 is a class
                                                        at Iowa State Uiversity
                                                        that teaches
                                                        introductory website
                                                        programming and
                                                        creation.
                                                </p>
                                        </div>
                                        <div class="row align-items-md-stretch border bg-body-secondary rounded-3 mb-3">
                                                <h1 class="text-center">
                                                        Professors:
                                                </h1>
                                                <div class="col-md-6">
                                                        <div class="h-100 p-5">
                                                                <h2 class="text-center">
                                                                        Ali
                                                                        Jannesari
                                                                        <br></br>
                                                                        <img
                                                                                class="col-md-5 rounded"
                                                                                src={
                                                                                        teacherImageJannesari
                                                                                }
                                                                                alt="Ali Jannesari - A professor at Iowa State University"
                                                                        ></img>
                                                                </h2>
                                                        </div>
                                                </div>
                                                <div class="col-md-6">
                                                        <div class="h-100 p-5 rounded-3">
                                                                <h2 class="text-center">
                                                                        Abraham
                                                                        Aldaco
                                                                        <br></br>
                                                                        <img
                                                                                class="col-md-5 rounded"
                                                                                src={
                                                                                        teacherImageAldaco
                                                                                }
                                                                                alt="Abraham Aldaco - A professor at Iowa State University"
                                                                        ></img>
                                                                </h2>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="row align-items-md-stretch border bg-body-secondary rounded-3 mb-3">
                                                <h1 class="text-center">
                                                        Students:
                                                </h1>
                                                <div class="col-md-6">
                                                        <div class="h-100 p-5">
                                                                <h2 class="text-center">
                                                                        Coleman
                                                                        Dimmer
                                                                        <br></br>
                                                                        <img
                                                                                class="col-md-5 rounded"
                                                                                src={
                                                                                        "https://seniord.cs.iastate.edu/2023-Dec-07/files/inline-images/Dimmer%20Coleman%20%20%283%29.jpg"
                                                                                }
                                                                                alt="Coleman Dimmer - Student at Iowa State University"
                                                                        ></img>
                                                                </h2>
                                                                <p class="text-center fs-5">
                                                                        cddimmer@iastate.edu
                                                                </p>
                                                                <p class="text-center fs-6">
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
                                                                        Jake
                                                                        Egler
                                                                        <br></br>
                                                                        <img
                                                                                class="col-md-5 rounded"
                                                                                src={
                                                                                        jakePhoto
                                                                                }
                                                                                alt="Jake Egler - Student at Iowa State University"
                                                                        ></img>
                                                                </h2>
                                                                <p class="text-center fs-5">
                                                                        jegler@iastate.edu
                                                                </p>
                                                                <p class="text-center fs-6">
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
                                        <div class="row align-items-md-stretch border bg-body-secondary rounded-3">
                                                <h1 class="text-center">
                                                        Date: 4/27/24<br></br>
                                                        Project Information:{" "}
                                                </h1>
                                                <p class="text-center fs-3">
                                                        This project is about
                                                        the implementation of an
                                                        API that is utilized by
                                                        a website built on a
                                                        MERN stack. MERN
                                                        (MongoDB, Express,
                                                        NodeJS, and React) is a
                                                        popular website
                                                        developement stack that
                                                        is used by many in the
                                                        webstie developement
                                                        industry. MERN utilizes
                                                        a front end based on
                                                        React, and a back end
                                                        handled by MongoDB and
                                                        express, with NodeJS
                                                        being a server form
                                                        running both ends.
                                                </p>
                                        </div>
                                </div>
                        </div>
                );
        }

        const CreateView = () => {
                const [formData, setFormData] = useState({
                        id: "",
                        title: "",
                        price: "",
                        description: "",
                        category: "",
                        image: "",
                        rating: { rate: 0, count: 0 },
                });

                const handleChange = (e) => {
                        const { name, value } = e.target;
                        setFormData((prevData) => ({
                                ...prevData,
                                [name]: value,
                        }));
                };

                const handleSubmit = (e) => {
                        e.preventDefault();
                        // Here you can send the formData to your backend using the POST method
                        console.log("Form Data:", formData);
                        // Reset the form after submission
                        setFormData({
                                id: "",
                                title: "",
                                price: "",
                                description: "",
                                category: "",
                                image: "",
                                rating: { rate: 0, count: 0 },
                        });
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
                                                        value={formData.id}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="title"
                                                        className="form-label"
                                                >
                                                        Title
                                                </label>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        name="title"
                                                        required
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="price"
                                                        className="form-label"
                                                >
                                                        Price
                                                </label>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        id="price"
                                                        name="price"
                                                        required
                                                        value={formData.price}
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
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="category"
                                                        className="form-label"
                                                >
                                                        Category
                                                </label>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        id="category"
                                                        name="category"
                                                        required
                                                        value={
                                                                formData.category
                                                        }
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="image"
                                                        className="form-label"
                                                >
                                                        Image URL
                                                </label>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        id="image"
                                                        name="image"
                                                        required
                                                        value={formData.image}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="rate"
                                                        className="form-label"
                                                >
                                                        Rating Rate
                                                </label>
                                                <input
                                                        type="number"
                                                        className="form-control"
                                                        id="rate"
                                                        name="rating.rate"
                                                        required
                                                        min="0"
                                                        max="5"
                                                        value={
                                                                formData.rating
                                                                        .rate
                                                        }
                                                        onChange={handleChange}
                                                />
                                        </div>
                                        <div className="mb-3">
                                                <label
                                                        htmlFor="count"
                                                        className="form-label"
                                                >
                                                        Rating Count
                                                </label>
                                                <input
                                                        type="number"
                                                        className="form-control"
                                                        id="count"
                                                        name="rating.count"
                                                        required
                                                        min="0"
                                                        max="5"
                                                        value={
                                                                formData.rating
                                                                        .count
                                                        }
                                                        onChange={handleChange}
                                                />
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

        function ReadView() {
                const [products, setProducts] = useState([
                        {
                                id: "",
                                title: "",
                                price: "",
                                description: "",
                                category: "",
                                image: "",
                                rating: "",
                        },
                ]);

                useEffect(() => {
                        fetch("http://127.0.0.1:8081/catalog")
                                .then((response) => response.json())
                                .then((data) => {
                                        setProducts(data);
                                        console.log(
                                                "Load initial Catalog of Products in GET :",
                                                data
                                        );
                                });
                }, []);
                useEffect(() => {
                        fetch("http://127.0.0.1:8081/listProducts")
                                .then((response) => response.json())
                                .then((data) => {
                                        setProducts(data);
                                        console.log(
                                                "Load initial Catalog of Products in GET :",
                                                data
                                        );
                                });
                }, []);

                return (
                        <div className="container">
                                <div class="row border-bottom">
                                        <div class="row main align-items-center">
                                                <div class="col">Item:</div>
                                                <div class="col">Image:</div>
                                                <div class="col">Title:</div>
                                                <div class="col">Category:</div>
                                                <div class="col">
                                                        Description:
                                                </div>
                                                <div class="col">Price:</div>
                                                <div class="col">Rating:</div>
                                        </div>
                                </div>
                                {products.map((el) => (
                                        <div
                                                class="row border-top"
                                                key={el._id}
                                        >
                                                <div class="row main align-items-center">
                                                        <div class="col">
                                                                {el.id}
                                                        </div>
                                                        <div class="col">
                                                                <img
                                                                        class="img-fluid"
                                                                        width={
                                                                                30
                                                                        }
                                                                        src={
                                                                                el.image
                                                                        }
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div class="col">
                                                                {el.title}
                                                        </div>
                                                        <div class="col">
                                                                {el.category}
                                                        </div>
                                                        <div class="col">
                                                                {el.description}
                                                        </div>
                                                        <div class="col">
                                                                {el.price}
                                                        </div>
                                                        <div class="col">
                                                                {el.rating.rate}
                                                        </div>
                                                </div>
                                        </div>
                                ))}
                        </div>
                );
        }

        function UpdateView() {
                return <div>Update View</div>;
        }

        function DeleteView() {
                return <div>Delete View</div>;
        }
        function DeleteView() {
                const [index, setIndex] = useState(0);
                const [products, setProducts] = useState([
                        {
                                id: "",
                                title: "",
                                price: "",
                                description: "",
                                category: "",
                                image: "",
                                rating: "",
                        },
                ]);

                useEffect(() => {
                        fetch("http://127.0.0.1:8081/listProducts")
                                .then((response) => response.json())
                                .then((data) => {
                                        setProducts(data);
                                        console.log(
                                                "Load initial Catalog of Products in DELETE :",
                                                data
                                        );
                                });
                }, []);

                // Function to review products like carousel
                function getOneByOneProductNext() {
                        if (products.length > 0) {
                                if (index === products.length - 1) setIndex(0);
                                else setIndex(index + 1);
                        }
                }
                // Function to review products like carousel
                function getOneByOneProductPrev() {
                        if (products.length > 0) {
                                if (index === 0) setIndex(products.length - 1);
                                else setIndex(index - 1);
                        }
                }

                // Delete de product by its id <- id is Hook
                const deleteOneProduct = (id) => {
                        console.log("Product to delete :", id);
                        fetch("http://localhost:8081/deleteProduct/" + id, {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ id: id }),
                        })
                                .then((response) => {
                                        if (response.status != 200) {
                                                return response
                                                        .json()
                                                        .then((errData) => {
                                                                throw new Error(
                                                                        `POST response was not ok :\n Status:${response.status}. \n Error: ${errData.error}`
                                                                );
                                                        });
                                        }
                                        return response.json();
                                })
                                .then((data) => {
                                        console.log(
                                                "Delete a product completed : ",
                                                id
                                        );
                                        console.log(data);
                                        // reload products from the local products array
                                        const newProducts = products.filter(
                                                (product) => product.id !== id
                                        );
                                        setProducts(newProducts);
                                        setIndex(0);
                                        // show alert
                                        if (data) {
                                                alert(
                                                        "Product Sucessfully deleted"
                                                );
                                        }
                                })
                                .catch((error) => {
                                        console.error(
                                                "Error adding item:",
                                                error
                                        );
                                        alert(
                                                "Error adding robot:" +
                                                        error.message
                                        ); // Display alert if there's an error
                                });
                };

                return (
                        <div className="container">
                                {/* Buttons to simulate carousel */}
                                <h3 class="text-center">Delete a product:</h3>
                                <div class="row">
                                        <button
                                                class="btn col-1"
                                                onClick={() =>
                                                        getOneByOneProductPrev()
                                                }
                                        >
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        class="bi bi-arrow-left"
                                                        viewBox="0 0 16 16"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                                                        />
                                                </svg>
                                        </button>
                                        <div
                                                class="col text-center"
                                                key={products[index].id}
                                        >
                                                <img
                                                        src={
                                                                products[index]
                                                                        .image
                                                        }
                                                        width={30}
                                                />{" "}
                                                <br />
                                                Id:{products[index].id} <br />
                                                Title: {
                                                        products[index].title
                                                }{" "}
                                                <br />
                                                Category:{" "}
                                                {products[index].category}{" "}
                                                <br />
                                                Price: {
                                                        products[index].price
                                                }{" "}
                                                <br />
                                                Rating :
                                                {
                                                        products[index].rating
                                                                .rate
                                                }{" "}
                                                (Averaged over{" "}
                                                {products[index].rating.count}{" "}
                                                rating/s)
                                                <br />
                                        </div>
                                        <button
                                                class="btn col-1"
                                                onClick={() =>
                                                        getOneByOneProductNext()
                                                }
                                        >
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        fill="currentColor"
                                                        class="bi bi-arrow-right"
                                                        viewBox="0 0 16 16"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                        />
                                                </svg>
                                        </button>
                                </div>
                                <div class="row">
                                        <div class="col-4"></div>
                                        <button
                                                class="btn border col-4"
                                                onClick={() =>
                                                        deleteOneProduct(
                                                                products[index]
                                                                        .id
                                                        )
                                                }
                                        >
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-trash"
                                                        viewBox="0 0 16 16"
                                                >
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                                Delete
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-trash"
                                                        viewBox="0 0 16 16"
                                                >
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                        </button>
                                        <div class="col-4"></div>
                                </div>
                        </div>
                );
        }

        function createHeader() {
                return (
                        <header class="d-flex justify-content-center py-3">
                                <ul class="nav nav-pills">
                                        <li class="nav-item">
                                                <p
                                                        class="nav-link active"
                                                        id="navitem-1"
                                                        onClick={
                                                                changeViewStudents
                                                        }
                                                >
                                                        Students
                                                </p>
                                        </li>
                                        <li class="nav-item">
                                                <p
                                                        class="nav-link"
                                                        id="navitem-2"
                                                        onClick={
                                                                changeViewCreate
                                                        }
                                                >
                                                        Create
                                                </p>
                                        </li>
                                        <li class="nav-item">
                                                <p
                                                        class="nav-link"
                                                        id="navitem-3"
                                                        onClick={changeViewRead}
                                                >
                                                        Read
                                                </p>
                                        </li>
                                        <li class="nav-item">
                                                <p
                                                        class="nav-link"
                                                        id="navitem-4"
                                                        onClick={
                                                                changeViewUpdate
                                                        }
                                                >
                                                        Update
                                                </p>
                                        </li>
                                        <li class="nav-item">
                                                <p
                                                        class="nav-link"
                                                        id="navitem-5"
                                                        onClick={
                                                                changeViewDelete
                                                        }
                                                >
                                                        Delete
                                                </p>
                                        </li>
                                </ul>
                        </header>
                );
        }

        function createFooter() {
                return (
                        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                                <p class="col-md-4 mb-0 text-body-secondary">
                                        © 2024 Com S 319 - Iowa State University
                                        <br></br>Coleman Dimmer - Jake Egler
                                </p>
                        </footer>
                );
        }

        return (
                <div>
                        {createHeader()}
                        <div class="container">
                                {viewer === 1 && <StudentView />}
                                {viewer === 2 && <CreateView />}
                                {viewer === 3 && <ReadView />}
                                {viewer === 4 && <UpdateView />}
                                {viewer === 5 && <DeleteView />}
                                {createFooter()}
                        </div>
                </div>
        );
}

export default App;
