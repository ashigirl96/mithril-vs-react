import m from "../mithril.js";

export const HelloMithril = {
  controller: function(args) {
    console.log("Start Mithril controller");

    this.didMount = (elem, isInitialized, context) => {
      console.log("Start Mithril didMount");
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start Mithril onunload");
        this.elem = null;
      }
    }
  },
  view: (ctrl, args) => {
    console.log("Start Mithril view");
    return (
      <div config={ctrl.didMount.bind(ctrl)}>Hello, I'm Mithril</div>
    );
  }
}
