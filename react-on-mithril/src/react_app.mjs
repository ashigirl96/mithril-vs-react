import React from 'react';

export class HelloReact extends React.Component {
  constructor(props) {
    super(props);
    console.log("Start React controller()");
  }

  componentDidMount() {
    console.log("Start React didMount");
  }

  componentWillUnmount() {
    console.log("Start React onunload");
  }

  render() {
    console.log("Start React view()");

    return (
      <div>Hello, I'm React</div>
    );
  }
}
