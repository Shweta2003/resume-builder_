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
  addOtherSkill,
  addTool,
  deleteDatabase,
  deleteFramework,
  deleteLanguage,
  deleteOtherSkill,
  deleteTool,
} from "../../../redux/reducers/resumeSlice";

const Skills = () => {
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [tool, setTool] = useState("");
  const [database, setDatabase] = useState("");
  const [other, setOther] = useState("");
  const resume = useSelector((state) => state.resume);
  const languages = resume.skills.languages;
  const frameworks = resume.skills.frameworks;
  const tools = resume.skills.tools;
  const databases = resume.skills.databases;
  const otherSkills = resume.skills.otherSkills;
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
  const handleAddOtherSkill = () => {
    console.log(other);
    setOther("");
    dispatch(addOtherSkill({ otherSkill: other, _id: uuidv4() }));
  };

  useEffect(() => {
    console.log(frameworks);
  }, [languages, frameworks, tools, databases, language]);
  return (
    <div className={style.container}>
      <div className={style.languages}>
        <h5 className={style.kl}>Languages</h5>
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
      <div className={style.languages}>
        <h5 className={style.kl}>Frameworks</h5>
        <div className={style.addInput}>
          <input
            className={style.input}
            type="text"
            value={framework}
            placeholder="React,Node,Express"
            onChange={(e) => setFramework(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddFramework} />
        </div>
        <div className={style.div}>
          {frameworks.map((framework, key) => {
            return (
              <Chip
                style={{
                  marginRight: "10px",
                  marginBottom: "10px"
                }}
                key={key}
                label={framework.framework}
                variant="outlined"
                onClick={() => setFramework(framework.framework)}
                onDelete={() => {
                  dispatch(deleteFramework({ _id: framework._id }));
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={style.languages}>
        <h5 className={style.kl}>Tools</h5>
        <div className={style.addInput}>
          <input
            className={style.input}
            type="text"
            value={tool}
            placeholder="Git,VS Code"
            onChange={(e) => setTool(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddTool} />
        </div>
        <div className={style.div}>
          {tools.map((tool, key) => {
            return (
              <Chip
                style={{
                  marginRight: "10px",
                  marginBottom: "10px"
                }}
                key={key}
                label={tool.tool}
                variant="outlined"
                onClick={() => setTool(tool.tool)}
                onDelete={() => {
                  dispatch(deleteTool({ _id: tool._id }));
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={style.languages}>
        <h5 className={style.kl}>Databases</h5>
        <div className={style.addInput}>
          <input
            className={style.input}
            type="text"
            value={database}
            placeholder="MongoDB,MySQL"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddDatabase} />
        </div>
        <div className={style.div}>
          {databases.map((database, key) => {
            return (
              <Chip
                style={{
                  marginRight: "10px",
                  marginBottom: "10px"
                }}
                key={key}
                label={database.database}
                variant="outlined"
                onClick={() => setDatabase(database.database)}
                onDelete={() => {
                  dispatch(deleteDatabase({ _id: database._id }));
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={style.languages}>
        <h5 className={style.kl}>Other Skills</h5>
        <div className={style.addInput}>
          <input
            className={style.input}
            type="text"
            value={other}
            placeholder="Leadership,Communication"
            onChange={(e) => setOther(e.target.value)}
          />
          <img src={AddIcon} alt="Add" onClick={handleAddOtherSkill} />
        </div>
        <div className={style.div}>
          {otherSkills?.map((otherSkill, key) => {
            return (
              <Chip
                style={{
                  marginRight: "10px",
                  marginBottom: "10px"
                }}
                key={key}
                label={otherSkill.otherSkill}
                variant="outlined"
                onClick={() => setOther(otherSkill.otherSkill)}
                onDelete={() =>
                  dispatch(deleteOtherSkill({ _id: otherSkill._id }))
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
