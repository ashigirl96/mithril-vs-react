import m from "../mithril";
import React from 'react';
import ReactDOM from 'react-dom';

export const ReactComponent = {
  view: () => {
    return (
      <div config={
        (elem, isInitialized, context) => {
          ReactDOM.render(React.createElement(args.component, {...args}, []), elem);
          context.onunload = function () {
            ReactDOM.unmountComponentAtNode(elem);
          }
        }
      } />
    );
  }
}
