import React from "react";


class GrandChild1 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    console.log("Start GRAND CHILD 1 controller()");
  }

  componentDidMount() {
    console.log("Start GRAND CHILD 1 didMount");
  }

  componentWillUnmount() {
    console.log("Start GRAND CHILD 1 onunload");
  }

  render() {
    console.log("Start GRAND CHILD 1 view()");

    return (
        <div>I'm grand child 1</div>
    );
  }
}

class GrandChild2 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    console.log("Start GRAND CHILD 2 controller()");
  }

  componentDidMount() {
    console.log("Start GRAND CHILD 2 didMount");
  }

  componentWillUnmount() {
    console.log("Start GRAND CHILD 2 onunload");
  }

  render() {
    console.log("Start GRAND CHILD 2 view()");

    return (
      <div>I'm grand child 2</div>
    );
  }
}

class Child extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    console.log("Start CHILD controller()");
  }

  componentDidMount() {
    console.log("Start CHILD didMount");
  }

  componentWillUnmount() {
    console.log("Start CHILD onunload");
  }

  render() {
    console.log("Start CHILD view()");

    return (
      <div>
        <div>I'm child</div>
        <GrandChild1 />
        <GrandChild2 />
      </div>
    );
  }
}

interface State {
  toggle: boolean;
}
export class DidMount extends React.Component<{}, State> {
  state: State = {
    toggle: false,
  };

  constructor(props: any) {
    super(props);
    console.log("Start PARENT controller()");
  }

  componentDidMount() {
    console.log("Start PARENT didMount");
  }

  componentWillUnmount() {
    console.log("Start PARENT onunload");
  }

  render() {
    console.log("Start PARENT view()");

    return (
      <div>
        <button onClick={() => {
          this.setState( { toggle: !this.state.toggle });
          console.log(!this.state.toggle); // 即時反映されない
        }}>
          Click
        </button>

        {
          this.state.toggle ? (
            <Child />
          ) : null
        }

      </div>
    );
  }
}