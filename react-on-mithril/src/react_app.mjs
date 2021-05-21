import React, { useEffect, useState } from 'react';

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
      <div>{this.props.greeting}</div>
    );
  }
}

export const HelloReactFn = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);
  });
  return (
    <>
      <div>Hello, I'm React Function Component</div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}