import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Main App Components.
import StreamIndex from "./streams/StreamIndex";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  //exact keyword allows nested components to render without issues.
  //header displays on each component regardless of path. 
  return (
    <div>
      <Router>
        <nav className="navbar navbar-light bg-light">
          <Link to="/">C-G-StreamLab</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <navLink className="nav-link" to="/">Index</navLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streamshow">Watch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streamnew">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streamedit">Edit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streamdelete">Delete</Link>
            </li>
          </ul>
        </nav>
      </Router>
      <Router>
        <div>
          <Route path="/" exact component={StreamIndex} />
          <Route path="/streamnew" component={StreamCreate} />
          <Route path="/streamshow" component={StreamShow} />
          <Route path="/streamedit" component={StreamEdit} />
          <Route path="/streamdelete" component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};
export default App;
