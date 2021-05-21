import m from "../mithril";
import { ReactComponent } from "./react_component";
import { HelloReact, HelloReactFn } from "./react_app.mjs";

export const App = {
  controller: function() {
    this.toggle = true;
  },
  view: (ctrl, args) => {
    const greeting = "Hello, I'm React";
    return (
      <div>
        <button onclick={() => {
          ctrl.toggle = !ctrl.toggle;
        }} >
          Click
        </button>
        <button onclick={() => {
          m.redraw();
        }}>
          m.redraw()
        </button>
        {
          ctrl.toggle ? (
            <div>Hello, Mithril</div>
          ) : (
            <div>
              <ReactComponent reactComponent={HelloReact} greeting={greeting} />
              <ReactComponent reactComponent={HelloReactFn} />
            </div>
          )
        }

      </div>
    )
  }
}
