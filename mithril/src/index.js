import m from "../mithril";
import { App } from "./app";
import { DidMount } from "./did_mount";

const Route = {
  "/": <DidMount />,
}


m.route.mode = "pathname";
m.route(document.getElementById("root"), "", Route);