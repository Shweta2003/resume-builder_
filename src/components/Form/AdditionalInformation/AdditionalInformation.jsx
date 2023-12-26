import React from "react";
import style from "./AdditionalInformation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addAward,
  addOrUpdateAward,
  deleteAward,
} from "../../../redux/reducers/resumeSlice";
import AddButton from "../../../utils/AddButton";

const AdditionalInformation = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const awards = resume.additionalInformation.additionalInformationDetails;

  const handleAddAward = () => {
    dispatch(addAward({ _id: uuidv4(), award: "" }));
  };

  return (
    <div className={style.container}>
      <h5 className={style.kl}>Honors & Awards</h5>
      {awards.map((award, key) => {
        return (
          <div key={key} className={style.div}>
            <input
              className={style.input}
              type="text"
              value={award.award}
              placeholder="Won XYZ Award"
              onChange={(e) =>
                dispatch(
                  addOrUpdateAward({ _id: award._id, award: e.target.value })
                )
              }
            />
            <button
            className={style.delete}
              onClick={() =>
                dispatch(deleteAward({ _id: award._id, award: award.award }))
              }
            >
              Delete
            </button>
          </div>
        );
      })}
      <AddButton field="AWARD" handleAdd={handleAddAward} />
    </div>
  );
};

export default AdditionalInformation;
