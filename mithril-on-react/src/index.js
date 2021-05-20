import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./app";
import m from "../mithril";
import {Hello} from "./root.mjs";


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
        <div id="mroot2" ref={this.getMRoot} />
        {
          this.state.toggle ? (
            <div>Hello I'm React</div>
          ) : (
            <MithrilComponent component={Hello} root={this.mRoot} />
          )
        }
      </div>
    )
  }
}

class MithrilComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.root) {
      m.mount(
        this.props.root,
        this.props.component,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.root) {
      m.mount(
        this.props.root,
        null,
      );
    }
  }

  render() {
    return <div/>
  }


}

ReactDOM.render(
  <Switch/>,
  document.getElementById('root')
);

