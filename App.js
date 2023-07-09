import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading">Namaste React Using JSX🚀</h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>React Component</h1></div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);