import React from "react";
import PlusIcon from "../assets/add.svg";
import { addLink } from "../redux/reducers/resumeSlice";

const AddButton = ({ field, handleAdd }) => {
  //   const handleAddLink = () => {
  //     dispatch(addLink({ _id: uuidv4(), name: "", url: "" }));
  //   };
  return (
    <div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          
        }}
        onClick={handleAdd}
      >
        ADD {field}
        <img src={PlusIcon} alt="" />
      </button>
    </div>
  );
};

export default AddButton;
