import React from "react";
import ReactDOM from "react-dom/client";

// React Elements -> Js Object ---(Render using React DOM) --> HTML element

const headingElement1 = React.createElement('h1', {id: "heading1"}, "I am heading 1")      // react element -> core

const headingElement2 = <h1 id="heading2">I am heading 2</h1>                              // react element -> jsx

const divElement1 = ( //                                                                   // react elemetnt -> jsx
    <div>
        <div id="div1">
            <h1 id="heading3">I am heading 3</h1>
        </div>
        {headingElement2}
    </div>
)

const HeadingComponent1 = () => {
    // return <h1 id="heading4">I am heading 4</h1>
    return <div>{headingElement1}</div>
}

const HeadingComponent2 = () => {
    return (
    <div>
        <h1 id="heading5">I am heading 5</h1>
        <h1 id="heading6">I am heading 6</h1>
        
    </div>
    )
}

const HeadingComponent3 = () => {
    return (
        // {HeadingComponent1}
        <HeadingComponent1/>
    )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));


console.log(root);

// root.render(divElement1);                                                                       // Render React element
root.render(<HeadingComponent3/>);                                                          // Render React Component