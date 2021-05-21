import React from 'react';
import ReactDOM from 'react-dom';
import { HelloReact } from "./react_app.mjs";

export const ReactComponent = {
  controller: function(args) {
    this.callReact = (elem, isInitialized, context) => {
      ReactDOM.render(React.createElement(HelloReact), elem);

      context.onunload = function () {
        ReactDOM.unmountComponentAtNode(elem);
      }
    }
  },
  view: (ctrl, args) => {
    return (
      <div config={ctrl.callReact.bind(ctrl)} />
    );
  }
}
