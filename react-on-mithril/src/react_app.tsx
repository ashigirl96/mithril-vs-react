import React, { useEffect, useState } from 'react';

interface Props {
  greeting: string;
}

export class HelloReact extends React.Component<Props, {}> {
  constructor(props: Props) {
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
      <div>
        <div> { this.props.greeting } </div>
        <Child/>
        <ChildFn name={"ChildFn1"} />
      </div>
    );
  }
}

export const Child = () => {
  return (
    <>
      Hello, I'm Child React
    </>
  )
}

export const HelloReactFn = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${ count } times`);

    return () => {
      console.log("Start HelloReactFn Clean up")
    }
  });
  return (
    <>
      <div>Hello, I'm React Function Component</div>
      <ChildFn name={"ChildFn2"} />
      <button onClick={ () => setCount(count + 1) }>
        Click me
      </button>
    </>
  )
}

const ChildFn = (props: { name: string }) => {
  useEffect(() => {
    return () => {
      console.log(`Start ${props.name} Clean up`)
    }
  });
  return (
    <div>
      Hello, I'm {props.name}
    </div>
  )
}
