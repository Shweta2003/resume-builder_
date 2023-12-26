import React, { useEffect } from "react";
import style from "./Projects.module.css";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addOrUpdateProjectDescription,
  addOrUpdateProjectGithub,
  addOrUpdateProjectLink,
  addOrUpdateProjectName,
  addOrUpdateProjectTechnologies,
  addProject,
  deleteProject,
} from "../../../redux/reducers/resumeSlice";
import AddButton from "../../../utils/AddButton";
import { getAnswer } from "../../../Designs/Backend";
import DeleteIcon from "@mui/icons-material/Delete";

const Projects = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const projects = resume.projects.projectDetails;

  const handleAddProject = () => {
    dispatch(addProject({
        _id: uuidv4(),
        name: "",
        technologies: "",
        description: "",
        link: "",
        github: "",
    }));
  };

  const handleEnhance = async (inputStateId, inputState, maxTokens) => {
    const enhancedInput = await getAnswer(inputState, maxTokens);
    dispatch(
      addOrUpdateProjectDescription({
        description: enhancedInput.evaluation,
        _id: inputStateId,
      })
    );
  };

  useEffect(() => {}, [projects]);

  return (
    <div className={style.container}>
      {projects.map((project, key) => {
        return (
          <div key={key} className={style.main}>
            <input
              className={style.input}
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => {
                dispatch(
                  addOrUpdateProjectName({
                    _id: project._id,
                    name: e.target.value,
                  })
                );
              }}
            />
            <input
              className={style.input}
              type="text"
              placeholder="Project Technologies"
              value={project.technologies}
              onChange={(e) => {
                dispatch(
                  addOrUpdateProjectTechnologies({
                    _id: project._id,
                    technologies: e.target.value,
                  })
                );
              }}
            />
            <input
              className={style.input}
              type="text"
              placeholder="Project Link"
              value={project.link}
              onChange={(e) => {
                dispatch(
                  addOrUpdateProjectLink({
                    _id: project._id,
                    link: e.target.value,
                  })
                );
              }}
            />
            <input
              className={style.input}
              type="text"
              placeholder="Project Github"
              value={project.github}
              onChange={(e) => {
                dispatch(
                  addOrUpdateProjectGithub({
                    _id: project._id,
                    github: e.target.value,
                  })
                );
              }}
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "93%" , marginLeft:"10px"}}
            >
              <textarea
                type="text"
                className={style.textarea}
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateProjectDescription({
                      _id: project._id,
                      description: e.target.value,
                    })
                  );
                }}
              />
              <div className={style.adjust}>
              <button
                className={style.enhance}
                onClick={() => {
                  handleEnhance(
                    project._id,
                    resume.projects.projectDetails.description,
                    100
                  );
                }}
              >
                Enhance<span className="material-symbols-outlined edit">edit_note</span>
              </button>
            <button
              className={style.delete}
              onClick={() =>
                dispatch(
                  deleteProject({
                    _id: project._id,
                  })
                )
              }
            >
              Delete<span className={style.temp}><DeleteIcon>
              </DeleteIcon></span>
            </button>
            </div>
            </div>
          </div>
        );
      })}
      <AddButton field="PROJECT" handleAdd={handleAddProject} />
    </div>
  );
};

export default Projects;
