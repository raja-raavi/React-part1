//When we have single element
const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello World form React!");

//When we have nested elements
/*
<div id="prarent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/
const parent = React.createElement("div", {id : "parent"}, 
    [
        React.createElement("div", {id : "child"},
            [React.createElement("h1", {}, "I'm h1 tag"), 
            React.createElement("h2", {}, "I'm h2 tag"),
            ]
    )],
    [
        React.createElement("div", {id : "child2"},
            [React.createElement("h1", {}, "I'm h1 tag"), 
            React.createElement("h2", {}, "I'm h2 tag"),
            ]
    )]
)

//this root is a placw where all the react code will run (everything that we will render, we will render inside it root)
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent); //React object

root.render(parent);