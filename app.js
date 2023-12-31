import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

const parent = React.createElement('div', {id: 'parent'},[
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag')
    ])
])

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent)

// props are children and attributes we pass to any React Element