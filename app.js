const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);


// props are children and attributes we pass to any React Element