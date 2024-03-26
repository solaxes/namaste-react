import React from "react";
import ReactDOM from "react-dom";
// Create Element here takes three arguments
const heading = React.createElement("div", { id: "div1" }, [
  React.createElement("div", { id: "dev1" }, [
    React.createElement("h1", { id: "heading1" }, "Jaidev Bangar"),
    React.createElement("h2", { id: "heading2" }, "Hot module replacement  🚀"),
  ]),
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "heading1" }, "Heading 1"),
    React.createElement("h2", { id: "heading2" }, "Heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
