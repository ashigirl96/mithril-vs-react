import m from "../mithril";
import { App } from "./mithril_app";

const Route = {
  "/": <App />,
}


m.route.mode = "pathname";
m.route(document.getElementById("root"), "", Route);