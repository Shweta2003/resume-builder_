import React from "react";
import styles from "./Education.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addEducation } from "../../../redux/reducers/resumeSlice";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);
  return (
    <div>
      <h1>Education</h1>
      {/* {educationDetails?.map((educationDetail, key) => {
        return (
          <div key={key}>
            <input
              type="text"
              placeholder="Institution"
              value={educationDetail.institution}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    institution: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Degree"
              value={educationDetail.degree}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    degree: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="Course"
              value={educationDetail.course}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    course: e.target.value,
                  },
                });
              }}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={educationDetail.startDate}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    startDate: e.target.value,
                  },
                });
              }}
            />
            <input
              type="date"
              placeholder="End Date"
              value={educationDetail.endDate}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    endDate: e.target.value,
                  },
                });
              }}
            />
            <input
              type="text"
              placeholder="CGPA"
              value={educationDetail.cgpa}
              onChange={(e) => {
                dispatch({
                  type: addEducation,
                  payload: {
                    ...educationDetail,
                    cgpa: e.target.value,
                  },
                });
              }}
            />
          </div>
        );
      })} */}

      <button
        onClick={dispatch({
          type: addEducation,
          payload: {
            _id: uuidv4(),
            institution: "",
            degree: "",
            course: "",
            startDate: "",
            endDate: "",
            cgpa: "",
          },
        })}
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;
