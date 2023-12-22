import React, { useEffect } from "react";
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
import { getAnswer } from "../../../Designs/Backend";
import { Delete } from "@mui/icons-material";

const Experience = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const experienceDetails = resume.experiences.experienceDetails;

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
    const enhancedInput = await getAnswer(inputState, maxTokens);
    dispatch(
      addOrUpdateDescription({
        description: enhancedInput.evaluation,
        _id: inputStateId,
      })
    );
  };

  useEffect(() => {}, [experienceDetails]);

  return (
    <div>
      {experienceDetails.map((experienceDetail, key) => {
        return (
          <div key={key}>
            <div>
              <input
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
              <input
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
            <div
              style={{
                display: "felx",
                flexDirection: "column",
              }}
            >
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
              <button
                onClick={() => {
                  handleEnhance(
                    experienceDetail._id,
                    resume.experiences.experienceDetails.description,
                    100
                  );
                }}
                style={{ width: "95%" }}
              >
                Enhance
              </button>
            </div>
            <button
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              onClick={() => {
                dispatch(deleteExperience({ _id: experienceDetail._id }));
              }}
            >
              Delete
              <Delete sx={{ width: "1rem" }} />
            </button>
          </div>
        );
      })}
      <AddButton field="EXPERIENCE" handleAdd={handleAddExperience} />
    </div>
  );
};
export default Experience;
