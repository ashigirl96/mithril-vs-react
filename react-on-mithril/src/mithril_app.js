import m from "../mithril";
import { ReactComponent } from "./react_component";

export const App = {
  view: () => {
    return (
      <div>
        <div>Hello, Mithril</div>
        <ReactComponent />
      </div>
    );
  }
}
