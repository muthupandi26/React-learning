import React from "react";
import ReactDOM from "react-dom/client";

// which is like normal js funciton so inside jsx Component we can call this is like function
const Title = () => {
  return <h1>!*...React Fire...*!</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
