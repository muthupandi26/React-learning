import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "React learning Muthu"), React.createElement("h2", {}, "I am h2 tag")]))

console.log(heading, "heading")

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(heading)