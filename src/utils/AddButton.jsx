import React from "react";
import PlusIcon from "../assets/add.svg";

const AddButton = ({ field, handleAdd }) => {
  return (
    <div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "Karla",
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
