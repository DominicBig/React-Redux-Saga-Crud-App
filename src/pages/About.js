import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

function About() {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBTypography note noteColor="primary">
        Full React Crud Application with the help of MDBootstrap 5 , JSON Server
        and Redux-saga middleware. All crud operation like Get, Put, Post and
        Delete request implemended with the help of JSON server and Redux-Saga
        middleware.
      </MDBTypography>
    </div>
  );
}

export default About;
