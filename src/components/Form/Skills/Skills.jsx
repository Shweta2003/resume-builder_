import React, { useState, useEffect } from "react";
import style from "./Skills.module.css";
import AddIcon from "../../../assets/add.svg";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Chip from "@mui/material/Chip";
import {
  addLanguage,
  deleteLanguage,
} from "../../../redux/reducers/resumeSlice";

const Skills = () => {
  const [language, setLanguage] = useState("");
  const resume = useSelector((state) => state.resume);
  const languages = resume.skills.languages;

  const dispatch = useDispatch();

  const handleAddLanguage = () => {
    setLanguage("");
    dispatch(addLanguage({ language: language, _id: uuidv4() }));
  };


  useEffect(() => {
  }, [languages, language]);
  return (
    <div className={style.container}>
      <div className={style.languages}>
        <div className={style.addInput}>
          <input
            type="text"
            className={style.input}
            value={language}
            placeholder="C++,Java,JavaScript"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddLanguage} />
        </div>
        <div className={style.div}>
          {languages.map((language, key) => {
            return (
              <div className={style.nm}>
                <Chip
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px"
                  }}
                  key={key}
                  label={language.language}
                  variant="outlined"
                  onClick={() => setLanguage(language.language)}
                  onDelete={() => {
                    dispatch(deleteLanguage({ _id: language._id }));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
