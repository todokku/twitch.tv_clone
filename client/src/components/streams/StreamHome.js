import React from "react";
import "./StreamHome.css";
//Add Authentication to the Login Form.
const StreamHome = (props) => {
  return (
    <div className="d-md-flex h-md-100 align-items-center">
      <div className="col-md-6 p-0 bg-indigo h-md-100">
        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            <h4>Welcome to Vision.</h4>
          </div>
        </div>
      </div>

      <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
          <form className="text-center border border-light p-5" action="#!">
            <p className="h4 mb-4">Register</p>

            <div className="form-row mb-4">
              <div className="col">
                <input
                  type="text"
                  id="defaultRegisterFormFirstName"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  id="defaultRegisterFormLastName"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>

            <input
              type="email"
              id="defaultRegisterFormEmail"
              className="form-control mb-4"
              placeholder="E-mail"
            />

            <input
              type="password"
              id="defaultRegisterFormPassword"
              className="form-control"
              placeholder="Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock"
            />
            <small
              id="defaultRegisterFormPasswordHelpBlock"
              className="form-text text-muted mb-4"
            >
              At least 8 characters and 1 digit
            </small>

            <input
              type="text"
              id="defaultRegisterPhonePassword"
              className="form-control"
              placeholder="Phone number"
              aria-describedby="defaultRegisterFormPhoneHelpBlock"
            />
            <small
              id="defaultRegisterFormPhoneHelpBlock"
              className="form-text text-muted mb-4"
            >
              Optional - for two step authentication
            </small>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultRegisterFormNewsletter"
              />
              <label
                className="custom-control-label"
                for="defaultRegisterFormNewsletter"
              >
                Subscribe to our newsletter
              </label>
            </div>

            <button className="btn btn-info my-4 btn-block" type="submit">
              Sign up
            </button>
            <hr />
            <p>
              By clicking <b>Sign up </b> you agree to our
              <a href="" target="_blank">
                Terms of Service
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StreamHome;
