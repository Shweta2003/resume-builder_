import React, { useEffect } from "react";
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

const Experience = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const experienceDetails = resume.experiences.experienceDetails;
  const handleAddExperience = () => {
    dispatch({
      type: addExperience,
      payload: {
        _id: uuidv4(),
        company: "",
        jobTitle: "",
        duration: "",
        description: "",
      },
    });
  };

  useEffect(() => {
    console.log(experienceDetails);
  }, [experienceDetails]);

  return (
    <div>
      {experienceDetails.map((experienceDetail, key) => {
        return (
          <div key={key}>
            <input
              type="text"
              placeholder="Company"
              value={experienceDetail.company}
              onChange={(e) => {
                dispatch({
                  type: addOrUpdateCompany,
                  payload: {
                    _id: experienceDetail._id,
                    company: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Job Title"
              value={experienceDetail.jobTitle}
              onChange={(e) => {
                dispatch({
                  type: addOrUpdateJobTitle,
                  payload: {
                    _id: experienceDetail._id,
                    jobTitle: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Duration"
              value={experienceDetail.duration}
              onChange={(e) => {
                dispatch({
                  type: addOrUpdateJobDuration,
                  payload: {
                    _id: experienceDetail._id,
                    duration: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={experienceDetail.description}
              onChange={(e) => {
                dispatch({
                  type: addOrUpdateDescription,
                  payload: {
                    _id: experienceDetail._id,
                    description: e.target.value,
                  },
                });
              }}
            />
            <button
              onClick={() => {
                dispatch({
                  type: deleteExperience,
                  payload: {
                    _id: experienceDetail._id,
                  },
                });
              }}
            >
              Delete Experience
            </button>
          </div>
        );
      })}
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
};

export default Experience;
