import * as m from "../mithril";
import { App } from "./app";

const Route = {
  "/": <App />
}

m.route.mode = "pathname";
m.route(document.getElementById("root"), "", Route);