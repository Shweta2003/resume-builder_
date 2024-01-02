import styles from "./PersonalInformation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  addEmail,
  addJobTitle,
  addLink,
  addName,
  addPhone,
  AddOrUpdateLinkName,
  AddOrUpdateLinkUrl,
  deleteLink,
  addAbout,
} from "../../../redux/reducers/resumeSlice";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../../../utils/AddButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAnswer } from "../../../Designs/Backend";

const PersonalInformation = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const links = resume.personalInformation.links;

  const [isLoading, setIsLoading] = useState(false);
  const handleAddLink = () => {
    dispatch(addLink({ _id: uuidv4(), name: "", url: "" }));
  };

  const handleEnhance = async (inputState, maxTokens) => {
    // const enhancedInput = await getAnswer(inputState, maxTokens);
    // dispatch(addAbout(enhancedInput.evaluation));
    try {
      setIsLoading(true);

      const enhancedInput = await getAnswer(inputState, maxTokens);

      dispatch(
        addAbout({
          description: enhancedInput.evaluation,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { }, [links]);

  return (
    <div className={styles.main}>
      <div className={styles.cat}>
        <input
          type="text"
          placeholder={resume.personalInformation.name}
          onChange={(e) => dispatch(addName(e.target.value))}
          className={styles.input}
        />
        <input
          type="text"
          placeholder={resume.personalInformation.email}
          onChange={(e) => dispatch(addEmail(e.target.value))}
          className={styles.input}
        />
        <input
          type="text"
          placeholder={resume.personalInformation.phone}
          onChange={(e) => dispatch(addPhone(e.target.value))}
          className={styles.input}
        />
        <input
          type="text"
          placeholder={resume.personalInformation.jobTitle}
          onChange={(e) => dispatch(addJobTitle({ jobTitle: e.target.value }))}
          className={styles.input}
        />
      </div>
      <div className={styles.links}>
        <h5 className={styles.kl}>Links</h5>
        {links.map((link, key) => {
          return (
            <div key={key} className={styles.link_cat}>
              <select
                value={link.name}
                id=""
                className={styles.link_desc}
                onChange={(e) =>
                  dispatch(
                    AddOrUpdateLinkName({ name: e.target.value, _id: link._id })
                  )
                }
              >
                <option value="" disabled selected className={styles.option}>
                  Select...
                </option>
                <option value="LinkedIn" className={styles.option}>LinkedIn</option>
                <option value="GitHub" className={styles.option}>GitHub</option>
                <option value="Portfolio" className={styles.option}>Portfolio</option>
              </select>
              <input
                className={styles.inp}
                value={link.url}
                type="text"
                placeholder="Your Link here"
                onChange={(e) =>
                  dispatch(
                    AddOrUpdateLinkUrl({ url: e.target.value, _id: link._id })
                  )
                }
              />
              <DeleteIcon
                onClick={() =>
                  dispatch(
                    deleteLink({
                      _id: link._id,
                    })
                  )
                }
              >
              </DeleteIcon>
            </div>
          );
        })}
        <div className={styles.adjust}><AddButton field="LINK" handleAdd={handleAddLink} /></div>
      </div>
      <div className={styles.links}>
        <h5 className={styles.kl}>About</h5>
        <textarea
          className={styles.textarea}
          onChange={(e) => dispatch(addAbout(e.target.value))}
          name=""
          value={resume.personalInformation.about}
          id=""
          cols="40"
          rows="10"
          placeholder="Dedicated software engineer with [X years] of experience in designing and implementing scalable and efficient solutions.Proficient in JavaScript and passionate about leveraging innovative technologies to solve complex problems. Committed to continuous learning to deliver high-quality software solutions."
        >
          {resume.personalInformation.about}
        </textarea>
        <div className={styles.adjust}>
          <button
            onClick={() => {
              handleEnhance(resume.personalInformation.about, 100);
            }}
            className={`${styles.enhance} ${(isLoading === true)?styles.load : ""}`}
          >
            {isLoading ? (
              <>Loading...
              <span class="material-symbols-outlined editl">
progress_activity
</span></>
            ) : (
              <>
                Enhance{" "}
                <span className="material-symbols-outlined edit">edit_note</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
