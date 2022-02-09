import React from "react";
import { ErrorMsg } from "./errorStyle";

const Error = ({ msg }) => {
  return <ErrorMsg className="body-text-extra-small">{msg}</ErrorMsg>;
};

export default Error;
