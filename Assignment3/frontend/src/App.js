import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import jake_photo from "./jake.jpg";

function App() {
        /**
        //activity 16

        const [viewer1, setViewer1] = useState(false);
        const [viewer2, setViewer2] = useState(false);

        const [product, setProduct] = useState([]);
        const [oneProduct, setOneProduct] = useState([]);
        // new Product
        const [addNewProduct, setAddNewProduct] = useState({
                id: 0,
                title: "",
                price: 0.0,
                description: "",
                category: "",
                image: "",
                rating: 0.0,
        });

        useEffect(() => {
                getAllProducts();
        }, []);
        function getAllProducts() {
                fetch("http://127.0.0.1:4000/catalog")
                        .then((response) => response.json())
                        .then((data) => {
                                console.log("Show Catalog of Products :");
                                console.log(data);
                                setProduct(data);
                        });
                setViewer1(!viewer1);
        }

        const showAllItems = product.map((el) => (
                <div key={el.id}>
                        <img src={el.image} width={30} alt="images" /> <br />
                        Title: {el.title} <br />
                        Category: {el.category} <br />
                        Price: {el.price} <br />
                        Rating :{el.rating} <br />
                </div>
        ));

        function getOneProduct(id) {
                console.log(id);
                if (id >= 1 && id <= 20) {
                        fetch("http://127.0.0.1:4000/catalog/" + id)
                                .then((response) => response.json())
                                .then((data) => {
                                        console.log("Show one product :", id);
                                        console.log(data);
                                        setOneProduct(data);
                                });
                        if (false === viewer2) setViewer2(true);
                } else {
                        console.log("Wrong number of Product id.");
                }
        }

        const showOneItem = oneProduct.map((el) => (
                <div key={el.id}>
                        <img src={el.image} width={30} alt="images" /> <br />
                        Title: {el.title} <br />
                        Category: {el.category} <br />
                        Price: {el.price} <br />
                        Rating: {el.rating} <br />
                </div>
        ));

        return (
                <>
                        <h1>Catalog of Products</h1>
                        <div>
                                {" "}
                                <h3>Show all available Products.</h3>{" "}
                                <button onClick={() => getAllProducts()}>
                                        Show All ...
                                </button>
                                {viewer1 && showAllItems}
                        </div>
                        <div>
                                <h3>Show one Product by Id:</h3>
                                <input
                                        type="text"
                                        id="message"
                                        name="message"
                                        placeholder="id"
                                        onChange={(e) =>
                                                getOneProduct(e.target.value)
                                        }
                                />
                                {viewer2 && showOneItem}
                        </div>
                </>
        );
        */
        //assignment 2
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
                                <div class="p-5 mb-4 bg-secondary bg-gradient rounded-3">
                                        <div class="container-fluid py-5">
                                                <h1 class="display-5 fw-bold text-center">
                                                        Com S 319
                                                </h1>
                                                <p class="fs-4">
                                                        Com S 319 is a class at
                                                        Iowa State Uiversity
                                                        that teaches about
                                                        website based
                                                        programming. The
                                                        professor for Com S 319
                                                        is Ali Jannesari and the
                                                        course is organized by
                                                        Professor Abraham
                                                        Aldaco.
                                                </p>
                                        </div>
                                        <h2 class="text-center">Professors:</h2>
                                        <div class="row align-items-md-stretch border bg-body-secondary rounded-3">
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
                                </div>
                                <div>Students</div>
                                <div class="row align-items-md-stretch">
                                        <div class="col-md-6">
                                                <div class="h-100 p-5 bg-body-secondary border rounded-3">
                                                        <h2 class="text-center">
                                                                Coleman Dimmer
                                                                <br></br>
                                                                <img
                                                                        class="col-md-5 rounded"
                                                                        src="https://seniord.cs.iastate.edu/2023-Dec-07/files/inline-images/Dimmer%20Coleman%20%20%283%29.jpg"
                                                                        alt="Image of user described"
                                                                ></img>
                                                        </h2>
                                                </div>
                                        </div>
                                        <div class="col-md-6">
                                                <div class="h-100 p-5 bg-body-secondary border rounded-3">
                                                        <h2 class="text-center">
                                                                Jake Egler
                                                                <br></br>
                                                                <img
                                                                        class="col-md-5 rounded"
                                                                        src={
                                                                                jake_photo
                                                                        }
                                                                        alt="Image of Jake Egler"
                                                                ></img>
                                                        </h2>
                                                </div>
                                        </div>
                                </div>
                                <div>About</div>
                        </div>
                );
        }

        function CreateView() {
                return <div>Create View</div>;
        }

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
