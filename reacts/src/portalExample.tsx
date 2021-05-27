import { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: any
}

export const PortalParent = ({ children }: Props) => {

  const el = document.createElement("div")

  useEffect(() => {
    const modal = document.getElementById("modal-root");
    if (modal) {
      modal.appendChild(el);
      modal.appendChild(el);
      modal.appendChild(el);
      modal.appendChild(el);
    }
    return () => {
      if (modal) {
        modal.removeChild(el);
      }
    }

  } );

  return ReactDOM.createPortal(children, el);
}