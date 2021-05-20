import React from 'react';
import ReactDOM from 'react-dom';
import m from "../mithril";
import { MithrilComponent } from "./mithril_component";
import { HelloReact } from "./react_app";
import { HelloMithril } from "./mithril_app.mjs";


class Switch extends React.Component {
  state = {
    toggle: false,
  };

  constructor(props) {
    super(props);
    this.mRoot = null;
    this.getMRoot = (element) => {
      this.mRoot = element;
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({toggle: !this.state.toggle});
        }}>
          Switch to Mithril
        </button>
        <div id="mroot" ref={this.getMRoot} />
        {
          this.state.toggle ? (
            <HelloReact />
          ) : (
            <MithrilComponent component={HelloMithril} root={this.mRoot} />
          )
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Switch/>,
  document.getElementById('root')
);

