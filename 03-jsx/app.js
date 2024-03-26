import React from "react";
import ReactDOM from "react-dom";
// Create Element here takes three arguments

const reactElement = (
  <div>
    <h1>This is React Element</h1>
    <p>This is paragraph</p>
  </div>
);

const TitleComponent = () => {
  return <h1>This is my Title</h1>;
};

const number = 1000;

const HeadingComponent = () => {
  return (
    <>
      {reactElement}
      {number}
      <TitleComponent />
      <h1>Hello from inside the functional component</h1>
      <p>Hello </p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
