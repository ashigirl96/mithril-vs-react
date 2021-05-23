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
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({toggle: !this.state.toggle});
        }}>
          Switch to Mithril
        </button>
        {
          this.state.toggle ? (
            <HelloReact />
          ) : (
            <MithrilComponent component={HelloMithril} />
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

