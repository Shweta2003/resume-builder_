import React, { useState, useEffect } from "react";
import style from "./Skills.module.css";
import AddIcon from "../../../assets/add.svg";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Chip from "@mui/material/Chip";
import {
  addDatabase,
  addFramework,
  addLanguage,
  addTool,
  deleteDatabase,
  deleteFramework,
  deleteLanguage,
  deleteTool,
} from "../../../redux/reducers/resumeSlice";

const Skills = () => {
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [tool, setTool] = useState("");
  const [database, setDatabase] = useState("");
  const resume = useSelector((state) => state.resume);
  const languages = resume.skills.languages;
  const frameworks = resume.skills.frameworks;
  const tools = resume.skills.tools;
  const databases = resume.skills.databases;
  const dispatch = useDispatch();

  const handleAddLanguage = () => {
    setLanguage("");
    dispatch(addLanguage({ language: language, _id: uuidv4() }));
  };
  const handleAddFramework = () => {
    setFramework("");
    dispatch(addFramework({ framework: framework, _id: uuidv4() }));
  };
  const handleAddTool = () => {
    setTool("");
    dispatch(addTool({ tool: tool, _id: uuidv4() }));
  };
  const handleAddDatabase = () => {
    setDatabase("");
    dispatch(addDatabase({ database: database, _id: uuidv4() }));
  };

  useEffect(() => {
    console.log(frameworks);
  }, [languages, frameworks, tools, databases, language]);
  return (
    <div className={style.container}>
      <div className={style.languages}>
        <h5>Languages</h5>
        <div className={style.addInput}>
          <input
            type="text"
            value={language}
            placeholder="C++,Java,JavaScript"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddLanguage} />
        </div>
        {languages.map((language, key) => {
          return (
            <Chip
              key={key}
              label={language.language}
              variant="outlined"
              onClick={() => setLanguage(language.language)}
              onDelete={() => {
                dispatch(deleteLanguage({ _id: language._id }));
              }}
            />
          );
        })}
      </div>
      <div className={style.frameworks}>
        <h5>Frameworks</h5>
        <div className={style.addInput}>
          <input
            type="text"
            value={framework}
            placeholder="React,Node,Express"
            onChange={(e) => setFramework(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddFramework} />
        </div>
        {frameworks.map((framework, key) => {
          return (
            <Chip
              key={key}
              label={framework.framework}
              variant="outlined"
              onClick={() => setFramework(framework.framework)}
              onDelete={() =>
                dispatch({
                  type: deleteFramework,
                  payload: { _id: framework._id },
                })
              }
            />
          );
        })}
      </div>
      <div className={style.tools}>
        <h5>Tools</h5>
        <div className={style.addInput}>
          <input
            type="text"
            value={tool}
            placeholder="Git,VS Code"
            onChange={(e) => setTool(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddTool} />
        </div>
        {tools.map((tool, key) => {
          return (
            <Chip
              key={key}
              label={tool.tool}
              variant="outlined"
              onClick={() => setTool(tool.tool)}
              onDelete={() =>
                dispatch({
                  type: deleteTool,
                  payload: { _id: tool._id },
                })
              }
            />
          );
        })}
      </div>
      <div className={style.databases}>
        <h5>Databases</h5>
        <div className={style.addInput}>
          <input
            type="text"
            value={database}
            placeholder="MongoDB,MySQL"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddDatabase} />
        </div>
        {databases.map((database, key) => {
          return (
            <Chip
              key={key}
              label={database.database}
              variant="outlined"
              onClick={() => setDatabase(database.database)}
              onDelete={() =>
                dispatch({
                  type: deleteDatabase,
                  payload: { _id: database._id },
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
