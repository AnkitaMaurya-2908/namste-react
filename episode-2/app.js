
// const heading = React.createElement(
//     "h1", 
//     {
//         id: "heading",
//         xyz: "anything",
//     }, 
//     "Hello World from React !"
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);





// ---------------------------------------------------------------------------



// // CREATING NESTED ELEMENTS
// // First One

// {/* <div id="parent">
//     <div id="child">
//         <h1>I am an h1 tag</h1>
//     </div>
// </div> */}

// const parent = React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1", {}, "I am an h1 tag"),
//     )
// );


// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



// --------------------------------------------------------------------


// // CREATING SIBLINGS 
// // Second One

// {/* <div id="parent">
//     <div id="child">
//         <h1>I am an h1 tag</h1>
//         <h2>I am an h2 tag</h2>
//     </div>
// </div> */}


// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [
//           React.createElement(
//             "h1",
//             {},
//             "I am an h1 tag"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "I am an h2 tag"
//         )
//         ]
        
//     )
// )


// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// --------------------------------------------------------------------

//  TWO CHILDREN 
// Third One

{/* <div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
      <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> */}


const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am an h1 tag"
                )
            ],
                        [
                React.createElement(
                    "h2",
                    {},
                    "I am an h2 tag"
                )
            ],
        )
    ],
     [
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am an h1 tag"
                )
            ],
                        [
                React.createElement(
                    "h2",
                    {},
                    "I am an h2 tag"
                )
            ],
        )
    ]
)




console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
