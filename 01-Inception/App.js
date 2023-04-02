const heading = React.createElement(
  "h1",
  { id: "heading", name: "Jaidev Bangar" },
  "Hello world from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello WOrld"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
