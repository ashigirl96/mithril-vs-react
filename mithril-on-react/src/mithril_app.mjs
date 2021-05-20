import m from "../mithril.js";

export const HelloMithril = {
  controller: (args) => {
    console.log("Start Mithril controller");
  },
  view: (ctrl, args) => {
    console.log("Start Mithril view");
    return (
      <div>Hello, I'm Mithril</div>
    );
  }
}
