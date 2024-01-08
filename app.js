const heading = React.createElement("div",{id:"app"},[
    React.createElement("div",{id:"header"},[
        React.createElement("h1",{id:"child2"},'namaste react from React')
    ]),
    React.createElement("div",{id:"body"},[
        React.createElement("h1",{id:"child1"},'namaste react from React')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);