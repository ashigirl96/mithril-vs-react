import m from "../mithril";

export const GrandChild1 = {
  controller: function() {
    console.log("Start GRAND CHILD 1 controller()");

    this.didMount = (elem, isInitialized, context) => {
      console.log(`Start GRAND CHILD 1 didMount`);
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start GRAND CHILD 1 onunload");
        this.elem = null;
      }
    }
  },
  view: (ctrl, args) => {
    console.log("Start GRAND CHILD 1 view()");
    return (
      <div config={ctrl.didMount.bind(ctrl)}>I'm grand child</div>
    )
  }
}

export const GrandChild2 = {
  controller: function() {
    console.log("Start GRAND CHILD 2 controller()");

    this.didMount = (elem, isInitialized, context) => {
      console.log(`Start GRAND CHILD 2 didMount`);
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start GRAND CHILD 2 onunload");
        this.elem = null;
      }
    }
  },
  view: (ctrl, args) => {
    console.log("Start GRAND CHILD 2 view()");
    return (
      <div config={ctrl.didMount.bind(ctrl)}>I'm grand child2</div>
    )
  }
}

export const Child = {
  controller: function() {
    console.log("Start CHILD controller()");

    this.didMount1 = (elem, isInitialized, context) => {
      console.log(`Start CHILD didMount`);
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start CHILD onunload");
        this.elem = null;
      }
    }

    this.didMount2 = (elem, isInitialized, context) => {
      console.log(`Start CHILD didMount2`);
      if (isInitialized) return;
      this.elem = elem;
      context.onunload = () => {
        console.log("Start CHILD onunload2");
        this.elem = null;
      }
    }
  },
  view: (ctrl, args) => {
    console.log("Start CHILD view()");
    return (
      <div>
        <GrandChild1 />
        <GrandChild2 />
        <div config={ctrl.didMount1.bind(ctrl)}> I'm child</div>
        {/*<div config={ctrl.didMount2.bind(ctrl)}> I'm child</div>*/}
      </div>
    )
  }
}

export const DidMount = {
  controller: function() {
    console.log("Start PARENT controller()");
    this.toggle = false;

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
        <button onclick={() => {
          ctrl.toggle = !ctrl.toggle;
          console.log(ctrl.toggle);
        }} >
          Click
        </button>
        <div config={ctrl.didMount.bind(ctrl)} />
        {ctrl.toggle ? (
          <Child />
        ): null}

        <button onclick={() => {
          console.log("Start PARENT m.redraw()");
          m.redraw.strategy("diff")
        }} >
          m.redraw
        </button>
      </div>
    )
  }
}