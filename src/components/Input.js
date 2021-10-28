import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

const Input = ({ value, name, type, onChange, label, validation }) => {
  return (
    <MDBInput
      value={value || ""}
      name={name}
      type={type}
      onChange={onChange}
      label={label}
      validation={validation}
      invalid
      required
    />
  );
};

export default Input;
