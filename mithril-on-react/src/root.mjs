import m from "../mithril.js";

export const Hello = {
  view: (ctrl, args) => {
    console.log("Hello Mithril");
    return (
      <div>Hello, I'm Mithril</div>
    );
  }
}


// export const World = {
//   view: (ctrl, args) => {
//     return (
//       <div />
//     );
//   }
// }
//
//
// export const Route = {
//   "/": <World />,
// }
//
// m.route.mode = "pathname";
// m.route(document.getElementById("mroot"), "", Route);
