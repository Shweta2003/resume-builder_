import React, { useEffect, useState } from "react";
import styles from "./Languages.module.css";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addCommunicationLanguage,
  deleteCommunicationLanguage,
} from "../../../redux/reducers/resumeSlice";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Languages = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const languages = resume.languages.languagesDetails;
  const [language, setLanguage] = useState("");

  const handleAddLanguage = () => {
    dispatch(addCommunicationLanguage({ language: language, _id: uuidv4() }));
    setLanguage("");
  };

  const handleUpdateLanguage = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    console.log(resume);
  }, [languages]);

  return (
    <div className={styles.addInput}>
      <div className={styles.languageInput}>
        <input
        className={styles.input}
          type="text"
          placeholder="English"
          value={language}
          onChange={handleUpdateLanguage}
        />
        <div onClick={handleAddLanguage} className={styles.addLanguage}>
          <AddIcon />
        </div>
      </div>
      <div className={styles.languages}>
        {languages?.map((language, key) => {
          return (
            <div key={key} className={styles.language}>
              <div className={styles.mark}>{language.language}</div>
              <DeleteIcon
                onClick={() =>
                  dispatch(deleteCommunicationLanguage({ _id: language._id }))
                }
              >
                Delete
              </DeleteIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
