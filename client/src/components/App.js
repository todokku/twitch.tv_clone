import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/availablestreams" component={AvailableStreams} />
        <Route path="/startstream" component={StartStream} />
      </div>
    </Router>
  );
};

const AvailableStreams = () => {
  return <div>These Are the Available Streams</div>;
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
