import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  const sections = [
    "Details",
    "Education",
    "Project",
    "WorkExperience",
    "Achievements",
  ];
  return (
    <div>
      <header>
        <h1>Resume Builder</h1>
        <nav>
          <ul>
            {sections.map((section) => (
              <li>{section}</li>
            ))}
          </ul>
        </nav>
      </header>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Form;
