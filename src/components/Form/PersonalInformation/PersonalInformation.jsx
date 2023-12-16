import styles from "./PersonalInformation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
import CrossIcon from "../../../assets/cross.svg";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../../../utils/AddButton";
import DeleteIcon from "@mui/icons-material/Delete";

const PersonalInformation = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const links = resume.personalInformation.links;

  const handleAddLink = () => {
    dispatch(addLink({ _id: uuidv4(), name: "", url: "" }));
  };

  useEffect(() => {
    console.log(links);
  }, [links]);

  return (
    <div>
      <input
        type="text"
        placeholder={resume.personalInformation.name}
        onChange={(e) => dispatch(addName(e.target.value))}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.email}
        onChange={(e) => dispatch(addEmail(e.target.value))}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.phone}
        onChange={(e) => dispatch(addPhone(e.target.value))}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.jobTitle}
        onChange={(e) => dispatch(addJobTitle({ jobTitle: e.target.value }))}
      />
      <div className={styles.links}>
        <h5>Links</h5>
        {links.map((link, key) => {
          return (
            <div key={key} style={{ display: "flex", alignItems: "center" }}>
              <select
                value={link.name}
                id=""
                onChange={(e) =>
                  dispatch(
                    AddOrUpdateLinkName({ name: e.target.value, _id: link._id })
                  )
                }
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="GitHub">GitHub</option>
                <option value="Portfolio">Portfolio</option>
              </select>
              <input
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
                <img src={CrossIcon} alt="" />
              </DeleteIcon>
            </div>
          );
        })}
        <AddButton field="LINK" handleAdd={handleAddLink} />
      </div>
      <div className={styles.about}>
        <h5>About</h5>
        <textarea
          className={styles.textarea}
          onChange={(e) => dispatch(addAbout(e.target.value))}
          name=""
          id=""
          cols="40"
          rows="10"
          placeholder="Dedicated software engineer with [X years] of experience in designing and implementing scalable and efficient solutions.Proficient in JavaScript and passionate about leveraging innovative technologies to solve complex problems. Committed to continuous learning to deliver high-quality software solutions."
        >
          {resume.personalInformation.about}
        </textarea>
      </div>
    </div>
  );
};

export default PersonalInformation;
