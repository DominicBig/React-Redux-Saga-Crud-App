import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";

const UserInfo = () => {
  const history = useHistory();
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();
  const singleUser = users.find((item) => item.id === +id);

  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">User Detail</p>
        <hr />
        <p className="col-md-6 fs-bold">ID:</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6 fs-bold">NAME:</p>
        <p className="col-md-6">{singleUser.name}</p>
        <p className="col-md-6 fs-bold">EMAIL:</p>
        <p className="col-md-6">{singleUser.email}</p>
        <p className="col-md-6 fs-bold">PHONE:</p>
        <p className="col-md-6">{singleUser.phone}</p>
        <p className="col-md-6 fs-bold">COUNTRY:</p>
        <p className="col-md-6">{singleUser.country}</p>
      </div>
      <MDBBtn
        color="danger"
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </MDBBtn>
    </div>
  );
};

export default UserInfo;
