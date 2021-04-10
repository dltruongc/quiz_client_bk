import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProcessBar(props) {
  <ProgressBar now={props} label={`${props}%`} />;
}
