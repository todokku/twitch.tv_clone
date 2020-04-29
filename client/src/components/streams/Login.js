import React from "react";

const Login = () => {
  return (
    <div className="d-md-flex h-md-100 align-items-center">
      <div className="col-md-12 p-0 bg-dark h-md-100">
        <div className="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            <div className="card card-signin p-4">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
