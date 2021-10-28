import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, editUserStart } from "../redux/actions";
import { toast } from "react-toastify";
import Input from "../components/Input";

const initialState = {
  name: "",
  email: "",
  phone: "",
  country: "",
};

const AddEditUser = () => {
  const history = useHistory();
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);

  const { name, email, phone, country } = formValue;

  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === +id);
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && country) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success("New User added successfully");
        history.push("/");
      } else {
        dispatch(editUserStart({ id, formValue }));
        setEditMode(false);
        toast.success("New User updated successfully");
        history.push("/");
      }
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "Add User Detail" : "Edit User Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <Input
          value={name}
          name={"name"}
          type={"text"}
          onChange={onInputChange}
          label={"Name"}
          validation={"Please provide a name"}
        />
        <br />
        <Input
          value={email}
          name={"email"}
          type={"email"}
          onChange={onInputChange}
          label={"Email"}
          validation={"Please provide an email address"}
        />
        <br />
        <Input
          value={phone}
          name={"phone"}
          type={"text"}
          onChange={onInputChange}
          label={"Phone"}
          validation={"Please provide a phone number"}
        />
        <br />
        <Input
          value={country}
          name={"country"}
          type={"text"}
          onChange={onInputChange}
          label={"Country"}
          validation={"Please provide a country"}
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "Add" : "Update"}
          </MDBBtn>
          <MDBBtn
            style={{ marginRight: "10px" }}
            onClick={() => history.push("/")}
            color="danger"
          >
            Go back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
