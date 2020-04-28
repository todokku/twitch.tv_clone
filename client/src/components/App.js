import React from "react";
//Global navigation bar for all components
import GlobalNav from "./GlobalNav";

const App = () => {
  //exact keyword allows nested components to render without issues.
  //Global Header exists outside individual components, always display for navigation
  return (
    <div>
      <GlobalNav />
    </div>
  );
};
export default App;
