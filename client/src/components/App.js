import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => {
  //exact keyword allows nested components to render without issues.
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/availablestreams" exact component={AvailableStreams} />
        <Route path="/availablestreams/popular" component={PopularStreams} />
        <Route path="/startstream" component={StartStream} />
      </div>
    </Router>
  );
};

const AvailableStreams = () => {
  return <div>These Are the Available Streams</div>;
};

const PopularStreams = () => {
  return (
    <div>
      <h1>The Most Popular Streams Currently Available</h1>
    </div>
  );
};

const StartStream = () => {
  return (
    <div>
      Start Your Stream. <br />
      <button
        onClick={(e) => {
          return <Redirect to="/" />;
        }}
      >
        Launch Client
      </button>
    </div>
  );
};

export default App;
