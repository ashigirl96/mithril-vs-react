import React from 'react';
import m from "../mithril";

export class MithrilComponent extends React.Component {
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

