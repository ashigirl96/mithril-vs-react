import m from "../mithril";

export const Child = {
  controller: function() {
    console.log("Start CHILD controller()");

    this.didMount = (elem, isInitialized, context) => {
      console.log(`Start CHILD didMount ${elem}`);
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start CHILD onunload");
        this.elem = null;
      }
    }
  },
  view: (ctrl, args) => {
    console.log("Start CHILD view()");
    return (
      <div config={ctrl.didMount.bind(ctrl)}>I'm child</div>
    )
  }
}

export const DidMount = {
  controller: function() {
    console.log("Start PARENT controller()");

    this.didMount = (elem, isInitialized, context) => {
      console.log("Start PARENT didMount");
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start PARENT onunload");
        this.elem = null;
      }
    }

  },
  view: (ctrl, args) => {
    console.log("Start PARENT view()");
    return (
      <div>
        <div config={ctrl.didMount.bind(ctrl)} />
        <Child />
      </div>
    )
  }
}