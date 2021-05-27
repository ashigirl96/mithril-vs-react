import React from "react";
import ReactDOM from "react-dom";
// import { DidMount } from "./DidMount";
// import { UseStateExample } from "./UseStateExample";
// import { ContextExample } from "./ContextExample";
import { PortalParent } from "./portalExample";

ReactDOM.render(
	<React.StrictMode>
    <PortalParent>
			<div>Hello</div>
		</PortalParent>
	</React.StrictMode>,
	document.getElementById("root")
);
