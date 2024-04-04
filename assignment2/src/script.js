import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { useForm } from "react-hook-form";
// The json file is a shorter, edited version of the product.json from dummyjson.com, which can be found from this page: https://dummyjson.com/docs/products
import items from "./products.json";

const App = () => {
  const [viewer, setViewer] = useState(0);

  // Format is based on bootstrap example found here: https://bbbootstrap.com/snippets/bootstrap-ecommerce-product-list-nav-tabs-86727014
  function BrowseView() {
    const listItems = items.map((el) => (
      <div class="col-md-4" id={el.id}>
        <div class="card">
          <img
            src={el.image}
            class="card-img-top"
            alt=""
            height="382"
            width="286"
          />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <span class="font-weight-bold">{el.title}</span>
              <span class="font-weight-bold">${el.price}</span>
            </div>
            <p class="card-text mb-1 mt-1">{el.description}</p>
          </div>
          <hr />
          <div class="card-body">
            <div class="text-right buttons">
              <button class="btn btn-dark">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div class="container-fluid mt-2 mb-5">
        <div class="row g-3">{listItems}</div>
      </div>
    );
  }

  function CartView() {
    function changeView() {
      setViewer(0);
    }

    function changeView2() {
      setViewer(2);
    }

    /*
        Notes:
        Can't have setViewer() directly in onclick, will make it consistantly change screens.
    */

    return (
      <div>
        This is cart view
        <button onClick={changeView}>Go to browse</button>
        <button onClick={changeView2}>Go to confirmation</button>
      </div>
    );
  }

  function ConfirmationView() {
    function changeView() {
      setViewer(0);
    }

    function changeView2() {
      setViewer(1);
    }

    return (
      <div>
        This is confirmation view
        <button onClick={changeView}>Go to browse</button>
        <button onClick={changeView2}>Go to cart</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        {viewer === 0 && <BrowseView />}
        {viewer === 1 && <CartView />}
        {viewer === 2 && <ConfirmationView />}
      </div>
      <div class="container">
        <footer class="py-3 my-4">
          <hr />
          <p class="text-center text-body-secondary">
            © 2024 Com S 319 - Iowa State University
            <br />
            Coleman Dimmer - Jake Egler
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
