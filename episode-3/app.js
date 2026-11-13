import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';

// React Components:
// 1. Class Based - old way
// 2. Functional Based - new way - noraml JS function that returns some piece of JSX or React Element


const Title = () => {
    return (
        <h1>Frontend Web Developer</h1>
    )
}


// React Functional Component 

// Component Composition - two or more seperate components being called in a component

// If we use curly braces, we can execute any JS expression inside it

const number = 29; 

const HeadingComponent = () => {
    return (
        <div>
            <Title/>
            {number}
            <h1>
            Hi, I am Ankita !
            </h1>
        </div>

  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);