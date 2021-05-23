import React, {useEffect, useRef, useState} from 'react';
import m from "../mithril";

export const MithrilComponent = (props) => {
  const [root, setRoot] = useState(null);
  useEffect(() => {
    if (root) {
      m.mount(root, props.component);
      return () => {
        m.mount(root, null);
      };
    }
  }, [root]);

  return <div ref={setRoot} />;
}