import React from "react";
import ReactDOM from "react-dom";
// Create Element here takes three arguments

const TitleComponent = () => {
  return <h1>This is my Title</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <TitleComponent />
      <h1>Hello from inside the functional component</h1>
      <p>Hello </p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
