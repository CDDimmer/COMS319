import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

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
    return <div>Student View</div>;
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
      fetch("http://localhost:8081/listProducts")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log("Load initial Catalog of Products in GET :", data);
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
            <div class="col">Description:</div>
            <div class="col">Price:</div>
            <div class="col">Rating:</div>
          </div>
        </div>
        {products.map((el) => (
          <div class="row border-top" key={el._id}>
            <div class="row main align-items-center">
              <div class="col">{el.id}</div>
              <div class="col">
                <img class="img-fluid" width={30} src={el.image} alt="" />
              </div>
              <div class="col">{el.title}</div>
              <div class="col">{el.category}</div>
              <div class="col">{el.description}</div>
              <div class="col">{el.price}</div>
              <div class="col">{el.rating.rate}</div>
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

  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <p
              class="nav-link active"
              id="navitem-1"
              onClick={changeViewStudents}
            >
              Students
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link" id="navitem-2" onClick={changeViewCreate}>
              Create
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link" id="navitem-3" onClick={changeViewRead}>
              Read
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link" id="navitem-4" onClick={changeViewUpdate}>
              Update
            </p>
          </li>
          <li class="nav-item">
            <p class="nav-link" id="navitem-5" onClick={changeViewDelete}>
              Delete
            </p>
          </li>
        </ul>
      </header>
      {viewer === 1 && <StudentView />}
      {viewer === 2 && <CreateView />}
      {viewer === 3 && <ReadView />}
      {viewer === 4 && <UpdateView />}
      {viewer === 5 && <DeleteView />}
    </div>
  );
}

export default App;
