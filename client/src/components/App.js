import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalNav from './GlobalNav';
//Main App Components.
import StreamIndex from "./streams/StreamIndex";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  //exact keyword allows nested components to render without issues.
  //Global Header
  return (
    <div>
      <GlobalNav />
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
