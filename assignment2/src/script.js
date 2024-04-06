import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
// The json file is a shorter, edited version of the product.json from dummyjson.com, which can be found from this page: https://dummyjson.com/docs/products
import items from "./products.json";

const App = () => {
  const [viewer, setViewer] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ProductsCategory, setProductsCategory] = useState(items);
  const [query, setQuery] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dataF, setDataF] = useState({});

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    let curNum = howManyofThis(el.id);
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    for (let i = 0; i < curNum - 1; i++) {
      hardCopy = [...hardCopy, el];
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
                    <div
                      className="buttons"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 0 + "auto",
                      }}
                    >
                      <div
                        className="btn btn-dark d-flex"
                        style={{ cursor: "default" }}
                      >
                        <button
                          className="btn btn-outline-success"
                          onClick={() => addToCart(el)}
                        >
                          +
                        </button>
                        <div
                          style={{
                            display: "inline-block",
                            padding: ".5em 3em",
                          }}
                        >
                          {howManyofThis(el.id)}
                        </div>
                        <div
                          className="btn btn-outline-danger"
                          style={{
                            paddingLeft: 14.27 + "px",
                            paddingRight: 14.28 + "px",
                          }}
                          onClick={() => removeFromCart(el)}
                        >
                          -
                        </div>
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
        return eachProduct.title.toLowerCase().includes(query.toLowerCase());
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
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  value={query}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-outline-dark"
                  type="search"
                  onClick={handleChange}
                >
                  Search
                </button>
              </div>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={updateHooks}
                style={{ paddingLeft: 1.5 + "em", paddingRight: 1.5 + "em" }}
              >
                Cart
              </button>
            </div>
          </nav>
        </header>
      );
    };

    return (
      <div>
        {render_header()}
        <div style={{ paddingTop: 4 + "rem" }}>
          {Render_Products(ProductsCategory)}
        </div>
      </div>
    );
  }

  function CartView() {
    function changeViewPrevious() {
      setViewer(0);
    }

    function changeViewOnwards() {
      setViewer(2);
    }

    const CartIsEmpty = () => {
      // Got from here: https://bbbootstrap.com/snippets/bootstrap-empty-cart-template-25715727
      return (
        <div>
          <div class="card-body cart">
            <div class="col-sm-12 empty-cart-cls text-center">
              <img
                src="https://i.imgur.com/dCdflKN.png"
                width="130"
                height="130"
                class="img-fluid mb-4 mr-3"
                alt=""
              />
              <h3>
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4>
                You can't continue the checkout process.
                <br />
                Hit the button <strong>above</strong> to continue Shopping.
              </h4>
            </div>
          </div>
        </div>
      );
    };

    const UniqueItemsInCart = () => {
      let results = items;
      results = results.filter((itm) => howManyofThis(itm.id) > 0);
      return results;
    };

    function Payment() {
      const onSubmit = (data) => {
        console.log(data); // log all data
        console.log(data.fullName); // log only fullname
        // update hooks
        setDataF(data);
        changeViewOnwards();
      };

      // Format for form gotten from here: https://bbbootstrap.com/snippets/bootstrap-ecommerce-shopping-cart-order-status-and-shipping-details-44965481
      return (
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-lg-3 offset-md-2 offset-sm-1 border rounded border-dark">
              <div class="h5">Billing Address</div>
              <div id="details" class="bg-white rounded pb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input
                        {...register("name", { required: true })}
                        placeholder="Full Name"
                      />
                      {errors.name && (
                        <p className="text-danger">Name is required.</p>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Card</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input maxLength={16}
                        {...register("card", { required: {value: true, message: <p className="text-danger">Card Required.</p>}, pattern: {
                          value: /[0-9]{16}/, message: <p className="text-danger">Invalid Card Number.</p>
                        } })}
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                      />
                      {errors.card && (
                        errors.card.message
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input
                        {...register("address", { required: {value: true, message: <p className="text-danger">Address is required.</p>} })}
                        placeholder="Address"
                      />
                      {errors.address && (
                        errors.address.message
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input
                        {...register("city", { required: {value: true, message: <p className="text-danger">City is required.</p>} })}
                        placeholder="City"
                      />
                      {errors.city && (
                        errors.city.message
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input maxLength={2}
                        {...register("state", { required: {value: true, message: <p className="text-danger">State is required.</p>}, pattern: {
                          value: /[A-Z]{2}/, message: <p className="text-danger">Invalid State.</p>
                        } })}
                        placeholder="State"
                      />
                      {errors.state && (
                        errors.state.message
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <div class="d-flex jusify-content-start align-items-center rounded p-2">
                      <input maxLength={5}
                        {...register("zip", { required: {value: true, message: <p className="text-danger">Zip Code is required.</p>}, pattern: {
                          value: /[0-9]{5}/, message: <p className="text-danger">Invalid Zip Code.</p>
                        } })}
                        placeholder="ZIP Code"
                      />
                      {errors.zip && (
                        errors.zip.message
                      )}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const CartNotEmpty = () => {
      return (
        <div>
          <div class="col-sm-12 empty-cart-cls text-center">
            <h3>
              <strong>Ready to checkout?</strong>
            </h3>
          </div>
          <div className="container">
            <div class="row border-bottom">
              <div class="row main align-items-center">
                <div class="col"></div>
                <div class="col">Item:</div>
                <div class="col">Price:</div>
                <div class="col">Quantity:</div>
                <div class="col">Price:</div>
              </div>
            </div>
            {UniqueItemsInCart().map((el) => (
              <div class="row border-top border-bottom" key={el.id}>
                <div class="row main align-items-center">
                  <div class="col">
                    <img class="img-fluid" width={150} src={el.image} alt="" />
                  </div>
                  <div class="col">
                    <div class="row text-muted">{el.title}</div>
                    <div class="row">{el.category}</div>
                  </div>
                  <div class="col">
                    ${el.price}
                    {howManyofThis(el.id)}
                  </div>
                  <div class="col">
                    <span class="close">&#10005;</span> {howManyofThis(el.id)}
                  </div>
                  <div class="col">${howManyofThis(el.id) * el.price}</div>
                </div>
              </div>
            ))}
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                  <strong>Total:</strong>
                </div>
                <div class="col">
                  <strong>${cartTotal}</strong>
                </div>
              </div>
            </div>
          </div>
          {Payment()}
        </div>
      );
    };

    const DynamicView = () => {
      if (cart.length === 0) {
        return CartIsEmpty();
      } else {
        return CartNotEmpty();
      }
    };

    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md fixed-top bg-light">
            <div className="container-fluid">
              <div className="d-flex me-auto">
                <button
                  className="btn btn-outline-dark"
                  type="button"
                  onClick={changeViewPrevious}
                  style={{ paddingLeft: 1.5 + "em", paddingRight: 1.5 + "em" }}
                >
                  &#8656; Return
                </button>
              </div>
            </div>
          </nav>
        </header>
        <div style={{ paddingTop: 4 + "rem" }}>{DynamicView()}</div>
      </div>
    );
  }

  function ConfirmationView() {
    function changeView() {
      setCart([]);
      setDataF({});
      setViewer(0);
    }

    return (
      <div>
        <h1>Order Summary:</h1>
        <h3>{dataF.name}</h3>
        <p>Order#: {Math.random().toString(16).substring(2)}</p>
        <p>{dataF.email}</p>
        <p>{dataF.address}</p>
        <p>
          {dataF.city}, {dataF.state} {dataF.zip}
        </p>
        <button onClick={changeView}>
          Shop Again
        </button>
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
