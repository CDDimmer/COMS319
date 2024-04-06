import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { useForm } from "react-hook-form";
// The json file is a shorter, edited version of the product.json from dummyjson.com, which can be found from this page: https://dummyjson.com/docs/products
import items from "./products.json";

const App = () => {
  const [viewer, setViewer] = useState(0);
  const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  const [ProductsCategory, setProductsCategory] = useState(items);
  const [query, setQuery] = useState("");

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    let curNum = howManyofThis(el.id)
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    for(let i = 0; i < curNum-1; i++) {
      hardCopy = [...hardCopy, el]
    }
    setCart(hardCopy);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  // Format is based on bootstrap example found here: https://bbbootstrap.com/snippets/bootstrap-ecommerce-product-list-nav-tabs-86727014
  function BrowseView() {

    const Render_Products = (ProductsCategory) => {
      
      return (
        <div className="container-fluid mt-2 mb-5">
          <div className="row g-3">
            {ProductsCategory.map((el) => (
              <div className="col-md-4" key={el.id}>
                <div className="card">
                  <img
                    src={el.image}
                    className="card-img-top"
                    alt=""
                    height="382"
                    width="286"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">{el.title}</span>
                      <span className="font-weight-bold">${el.price}</span>
                    </div>
                    <p className="card-text mb-1 mt-1">{el.description}</p>
                  </div>
                  <hr />
                  <div className="card-body">
                    <div className="buttons" style={{display: "flex", justifyContent: "center",margin: 0 + 'auto'}}>
                      <div className="btn btn-dark d-flex" style={{cursor: 'default'}}>
                        <button className="btn btn-outline-success" onClick={() => addToCart(el)}>+</button>
                        <div style={{display: "inline-block", padding: '.5em 3em'}}>{howManyofThis(el.id)}</div>
                        <div className="btn btn-outline-danger" style={{paddingLeft: 14.27 + 'px', paddingRight: 14.28 + 'px'}} onClick={() => removeFromCart(el)}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    const handleChange = (e) => {
      const results = items.filter((eachProduct) => {
        if (query === "") return ProductsCategory;
        return eachProduct.title
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setProductsCategory(results);
    };

    const render_header = () => {
      const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

      const updateHooks = () => {
        setViewer(1);
      };

      return (
        <header>
          <nav className="navbar navbar-expand-md fixed-top bg-light">
            <div className="container-fluid">
              <div className="d-flex me-auto">
                <input className="form-control me-2" type="search" placeholder="Search" value={query} onChange={handleInputChange} />
                <button className="btn btn-outline-dark" type="search" onClick={handleChange}>Search</button>
              </div>
              <button className="btn btn-outline-dark" type="button" onClick={updateHooks} style={{paddingLeft: 1.5 + 'em', paddingRight: 1.5 + 'em'}}>Cart</button>
            </div>
          </nav>
        </header>
      );
    }

    return (
      <div>
        {render_header()}
        <div style={{paddingTop: 4 + 'rem'}}>
          {Render_Products(ProductsCategory)}
        </div>
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

    const IsCartEmpty = () => {
      if(cart.length === 0) {
        return (
          <div>We're empty</div>
        )
      }
    };

    return (
      <div>
        This is cart view
        {IsCartEmpty()}
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
      <div className="container">
        <footer className="py-3 my-4">
          <hr />
          <p className="text-center text-body-secondary">
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
