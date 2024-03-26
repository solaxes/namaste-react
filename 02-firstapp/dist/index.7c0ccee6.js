// Create Element here takes three arguments
const heading = React.createElement("div", {
    id: "div1"
}, [
    React.createElement("div", {
        id: "dev1"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading2"
        }, "heading 2")
    ]),
    React.createElement("div", {
        id: "div2"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading2"
        }, "Heading 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
