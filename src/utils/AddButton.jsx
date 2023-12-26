import React from "react";

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
          fontFamily: "sans-serif",
          color: "#1976d2",
          background:"none",
          border:"none",
          padding:"5px 10px"
      
        }}
        onClick={handleAdd}
      >
        <span class="material-symbols-outlined">add</span>ADD {field}
      </button>
    </div>
  );
};

export default AddButton;
