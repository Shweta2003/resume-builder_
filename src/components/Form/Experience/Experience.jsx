import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addExperience,
  addOrUpdateCompany,
  addOrUpdateDescription,
  addOrUpdateJobDuration,
  addOrUpdateJobTitle,
  deleteExperience,
} from "../../../redux/reducers/resumeSlice";
import AddButton from "../../../utils/AddButton";
import { getAnswer, getAnswerForExperience } from "../../../Designs/Backend";
import DeleteIcon from "@mui/icons-material/Delete";

const Experience = () => {
  const [smartAnswer1, setSmartAnswer1] = useState("");
  const [smartAnswer2, setSmartAnswer2] = useState("");

  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const experienceDetails = resume.experiences.experienceDetails;
  const isSmart = resume.isSmart;

  const handleAddExperience = () => {
    dispatch(
      addExperience({
        _id: uuidv4(),
        company: "",
        jobTitle: "",
        duration: "",
        description: "",
      })
    );
  };

  const handleEnhance = async (inputStateId, inputState, maxTokens) => {
    const enhancedInput = await getAnswerForExperience(inputState, maxTokens);
    dispatch(
      addOrUpdateDescription({
        description: enhancedInput.evaluation,
        _id: inputStateId,
      })
    );
  };

  useEffect(() => {}, [experienceDetails]);

  return (
    <div className={styles.make}>
      {experienceDetails.map((experienceDetail, key) => {
        return (
          <div key={key} className={styles.container}>
            <div className={styles.part1}>
              <input
                className={styles.inp}
                type="text"
                placeholder="Company"
                value={experienceDetail.company}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateCompany({
                      _id: experienceDetail._id,
                      company: e.target.value,
                    })
                  );
                }}
              />
              <input
                className={styles.inp}
                type="text"
                placeholder="Job Title"
                value={experienceDetail.jobTitle}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateJobTitle({
                      _id: experienceDetail._id,
                      jobTitle: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={styles.part2}>
              <input
                className={styles.inp}
                type="text"
                placeholder="Duration"
                value={experienceDetail.duration}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateJobDuration({
                      _id: experienceDetail._id,
                      duration: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div></div>
            <div className={styles.part2}>
              {isSmart ? (
                <div>
                  <div className={styles.question}>
                    <h6>
                      What are the few most important tasks which you did in the
                      tenure?
                    </h6>
                  </div>
                  <textarea
                    name=""
                    id=""
                    rows="6"
                    className={styles.textarea}
                    onChange={(e) => setSmartAnswer1(e.target.value)}
                  ></textarea>
                  <div className={styles.question}>
                    <h6>
                      If you could put impact for each of the above tasks?
                    </h6>
                  </div>
                  <textarea
                    name=""
                    id=""
                    rows="6"
                    className={styles.textarea}
                    onChange={(e) => setSmartAnswer2(e.target.value)}
                  ></textarea>
                </div>
              ) : (
                <textarea
                  className={styles.textarea}
                  type="text"
                  placeholder="Description"
                  value={experienceDetail.description}
                  onChange={(e) => {
                    dispatch(
                      addOrUpdateDescription({
                        _id: experienceDetail._id,
                        description: e.target.value,
                      })
                    );
                  }}
                />
              )}

              <div className={styles.adjust}>
                <button
                  className={styles.enhance}
                  onClick={() => {
                    handleEnhance(
                      experienceDetail._id,
                      resume.experiences.experienceDetails.description,
                      100
                    );
                  }}
                >
                  Enhance{" "}
                  <span className="material-symbols-outlined edit">
                    edit_note
                  </span>
                </button>
                <button
                  className={styles.delete}
                  onClick={() => {
                    dispatch(deleteExperience({ _id: experienceDetail._id }));
                  }}
                >
                  Delete
                  <span className={styles.temp}>
                    <DeleteIcon></DeleteIcon>
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <AddButton field="EXPERIENCE" handleAdd={handleAddExperience} />
    </div>
  );
};
export default Experience;
