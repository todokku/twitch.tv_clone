import React from "react";
import "./Home.css";
//homepage + navgation page.
//Redirect on click, to other components.
const Home = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Twitch v2
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="localhost:3000/startstream">
                  Start Stream
                </a>
                <a
                  className="dropdown-item"
                  href="localhost:3000/availablestreams"
                >
                  Available Streams
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <br />
      {
        //Login Form + intro
      }
      <div className="d-flex flex-column flex-md-row align-items-center border-top">
        <div className="jumbotron p-2">
          <h1 className="display-4">Made for Streamers</h1>
          <p className="lead">
            Twitch v2 is my clone of twitch. You are able to start your own
            stream, and select from a list of active streams to view in real
            time.
          </p>
          <hr className="my-4" />
          <p>
            Styled with Bootstrap4 and Flexbox. Built with React, Redux,
            react-routers
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Get Started
            </a>
          </p>
        </div>
        <div className="card card-signin p-2">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label for="inputEmail"></label>
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <label for="inputPassword"></label>
              </div>

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" for="customCheck1">
                  Remember password
                </label>
              </div>
              <br />
              <button
                className="btn btn-lg btn-success btn-block "
                type="submit"
              >
                Sign in
              </button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid needs">
        <div className="container">
          <h1 className="display-4">Your Streaming Options Here</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
