import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Twitch Clone</h1>
    </div>
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
          console.log("Stream Started");
        }}
      >
        Launch Client
      </button>
    </div>
  );
};

export default App;
