import React from "react";
import styles from "./PersonalInformation.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addEmail,
  addJobTitle,
  addLink,
  addName,
  addPhone,
  addLinkName,
  saveUpdatedLink,
  deleteLink,
} from "../../../redux/reducers/resumeSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const PersonalInformation = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const links = resume.personalInformation.links;

  const handleAddLink = () => {
    dispatch({ type: addLink, payload: { name: "", url: "" } });
    console.log(resume.personalInformation.links);
  };
  const handleLinkName = (name) => {
    dispatch({ type: addLinkName, payload: { name, url: "" } });
  };
  const handleAddLinkUrl = (name, url) => {
    dispatch({ type: saveUpdatedLink, payload: { name, url } });
  };
  const handleDeleteLink = (name) => {
    dispatch({ type: deleteLink, payload: name });
    console.log(resume.personalInformation.name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={resume.personalInformation.name}
        onChange={(e) => dispatch({ type: addName, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.email}
        onChange={(e) => dispatch({ type: addEmail, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.phone}
        onChange={(e) => dispatch({ type: addPhone, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.jobTitle}
        onChange={(e) =>
          dispatch({ type: addJobTitle, payload: e.target.value })
        }
      />
      <div>
        <h5>Links</h5>
        {links.map((link, key) => {
          return (
            <div className={styles.linkInput} key={key}>
              <select
                value={link.name}
                onChange={(e) => handleLinkName(e.target.value)}
              >
                <option>Select</option>
                <option>LinkedIn</option>
                <option>Github</option>
                <option>Portfolio</option>
              </select>
              <input
                type="url"
                placeholder="Link"
                value={link.url}
                onChange={(e) => handleAddLinkUrl(, e.target.value)}
              />
              <div onClick={() => handleDeleteLink(link.name)}>
                <DeleteIcon />
              </div>
            </div>
          );
        })}
        <button onClick={handleAddLink}>Add Link</button>
      </div>
    </div>
  );
};

export default PersonalInformation;
