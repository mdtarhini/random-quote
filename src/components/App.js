import React from "react";
import Card from "./Card";
import Tools from "./Tools";
const App = () => {
  return (
    <div
      className="container-fluid d-flex"
      id="quote-box"
      style={{ height: "100vh", backgroundColor: "floralwhite" }}
    >
      <div className="m-auto">
        <Card />
        <Tools />
      </div>
    </div>
  );
};
export default App;
