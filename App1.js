/** 
<div id="parent">
  <div id="child1">
    <h1>Child 1 Header</h1>
    <p>This is some text inside the first child.</p>
  </div>

  <div id="child2">
    <h2>Child 2 Sub-header</h2>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </div>

  <div id="child3">
    <h3>Child 3 Section</h3>
    <button>Click Me</button>
  </div>
</div>

**/

const heading = React.createElement("div", {id : "parent", key : "parent"}, 
  [
    React.createElement("div", {id : "child1", key : "child1"}, 
      [
        React.createElement("h1", {key: "h1"}, "Child 1 Header"),
        React.createElement("p", {key : "p"}, 'This is some text inside the first child.')
      ]
    )],
    [
      React.createElement("div", {id : "child2", key : "child2"}, 
        [
          React.createElement("h2", {key : "h2"}, "Child 2 Sub-header"),
          React.createElement("ul", {key : "ul"}, 
            [
              React.createElement("li", {key: "l1"}, "List item 1"),
              React.createElement("li", {key : 'l2'}, "List item 2"),
            ]
          )
        ] 
    )],
    [
      React.createElement("div", {id : "child3", key : "child3"},  
        [
          React.createElement("h3", {key : "h3"}, "Child 3 Section"),
          React.createElement("button", {key : "button"}, "Click Me")
        ]
      )
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)
