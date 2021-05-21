import m from "../mithril";
import React from 'react';
import ReactDOM from 'react-dom';

export const ReactComponent = {
  controller: function(args) {
    this.callReact = (elem, isInitialized, context) => {
      ReactDOM.render(React.createElement(args.reactComponent, {...args}, []), elem);
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
