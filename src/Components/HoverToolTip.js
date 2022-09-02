import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default function HoverToolTip({ children, placement, text }) {
  const renderToolTip = (props) => <Tooltip {...props}>{text}</Tooltip>;

  return (
    <OverlayTrigger
      id="button-tooltip"
      overlay={renderToolTip}
      placement={placement ? placement : "right"}
    >
      {children}
    </OverlayTrigger>
  );
}
