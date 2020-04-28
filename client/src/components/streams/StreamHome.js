import React from "react";

const StreamHome = (props) => {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center border-top">
        <div className="jumbotron p-2">
          <h1 className="display-4">Vision</h1>
          <p className="lead">
            Vision is a streaming platform that gives you the ability to share
            your interests with the world.
          </p>
          <hr className="my-4" />
          <p>
            React based Single Page Application. Built with Bootstrap4 and
            Flexbox.
          </p>
        </div>
        <div className="card card-signin p-2">
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
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
    </div>
  );
};

export default StreamHome;
