import React, { useEffect } from "react";
import styles from "./Education.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  addEducation,
  addOrUpdateCgpa,
  addOrUpdateCourse,
  addOrUpdateDegree,
  addOrUpdateEndDate,
  addOrUpdateInstitution,
  addOrUpdateStartDate,
  deleteEducation,
} from "../../../redux/reducers/resumeSlice";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../../../utils/AddButton";

const Education = () => {
  const dispatch = useDispatch();
  const educationDetails = useSelector(
    (state) => state.resume.education.educationDetails
  );
  const handleAddEducation = () => {
    dispatch( 
      addEducation({
        _id: uuidv4(),
        institution: "",
        degree: "",
        course: "",
        startDate: "",
        endDate: "",
        cgpa: "",
      })
    );
  };

  useEffect(() => {
    console.log(educationDetails);
  }, [educationDetails]);

  return (
    <div className={styles.make}>
      {educationDetails.map((educationDetail, key) => {
        return (
          <div key={key} className={styles.container}>
            <div className={styles.part1}>
              <input
                className={styles.ip}
                type="text"
                placeholder="Institution"
                value={educationDetail.institution}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateInstitution({
                      _id: educationDetail._id,
                      institution: e.target.value,
                    })
                  );
                }}
              />
              <input
                className={styles.ip}
                type="text"
                placeholder="Degree"
                value={educationDetail.degree}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateDegree({
                      _id: educationDetail._id,
                      degree: e.target.value,
                    })
                  );
                }}
              />
              <input
                className={styles.ip}
                type="text"
                placeholder="Course"
                value={educationDetail.course}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateCourse({
                      _id: educationDetail._id,
                      course: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={styles.part1}>
              <input
                className={styles.ip}
                type="text"
                placeholder="Start Year"
                value={educationDetail.startDate}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateStartDate({
                      _id: educationDetail._id,
                      startDate: e.target.value,
                    })
                  );
                }}
              />
              <input
                className={styles.ip}
                type="text"
                placeholder="End Year"
                value={educationDetail.endDate}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateEndDate({
                      _id: educationDetail._id,
                      endDate: e.target.value,
                    })
                  );
                }}
              />
              <input
                className={styles.ip}
                type="text"
                placeholder="CGPA"
                value={educationDetail.cgpa}
                onChange={(e) => {
                  dispatch(
                    addOrUpdateCgpa({
                      _id: educationDetail._id,
                      cgpa: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={styles.adjust}>
              <button
                onClick={() =>
                  dispatch(deleteEducation({ _id: educationDetail._id }))
                }
                className={styles.delete}
              >
                Delete <span className={styles.temp}><DeleteIcon>
              </DeleteIcon></span>
              </button>
            </div>
          </div>
        );
      })}
      <AddButton field="EDUCATION" handleAdd={handleAddEducation} />
    </div>
  );
};

export default Education;
