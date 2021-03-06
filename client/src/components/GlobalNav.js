import React from "react";
//Google Login Component
import { GoogleLogin } from 'react-google-login';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import StreamHome from "./streams/StreamHome";
import StreamIndex from "./streams/StreamIndex";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
const responseGoogle = (response) => {
  console.log(response);
}
const GlobalNav = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
          <Link className="navbar-brand" to="/">
            Vision
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/index">
                Index
              </Link>
              <GoogleLogin
                className="nav-item nav-link "
                clientId="536299701530-t8uf044eu68nu4mc9fbcqloa7lktf6u8.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </nav>
        <Route path="/" exact component={StreamHome} />
        <Route path="/index" component={StreamIndex} />
        <Route path="/streamnew" component={StreamCreate} />
        <Route path="/streamshow" component={StreamShow} />
        <Route path="/streamedit" component={StreamEdit} />
        <Route path="/streamdelete" component={StreamDelete} />
      </Router>
    </div>
  );
};

export default GlobalNav;

/*
Authenticate Login Process
These will be available after being logged into the stream.
<Link className="nav-item nav-link" to="/streamshow">
                View
              </Link>
              <Link className="nav-item nav-link" to="/streamnew">
                Create
              </Link>
              <Link className="nav-item nav-link" to="/streamedit">
                Edit
              </Link>
              <Link className="nav-item nav-link" to="/streamdelete">
                Delete
              </Link>
*/
//Oauth id: 536299701530-t8uf044eu68nu4mc9fbcqloa7lktf6u8.apps.googleusercontent.com
