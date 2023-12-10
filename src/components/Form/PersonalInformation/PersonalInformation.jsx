import styles from "./PersonalInformation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  addEmail,
  addJobTitle,
  addLink,
  addName,
  addPhone,
  AddOrUpdateLinkName,
  AddOrUpdateLinkUrl,
  deleteLink,
} from "../../../redux/reducers/resumeSlice";
import CrossIcon from "../../../assets/cross.svg";
import { v4 as uuidv4 } from "uuid";

const PersonalInformation = () => {
  const resume = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const links = resume.personalInformation.links;

  const handleAddLink = () => {
    dispatch({
      type: addLink,
      payload: { _id: uuidv4(), name: "", url: "" },
    });
  };

  useEffect(() => {
    console.log(links);
  }, [links]);

  return (
    <div>
      <input
        type="text"
        placeholder={resume.personalInformation.name}
        onChange={(e) => dispatch({ type: addName, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.email}
        onChange={(e) => dispatch({ type: addEmail, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.phone}
        onChange={(e) => dispatch({ type: addPhone, payload: e.target.value })}
      />
      <input
        type="text"
        placeholder={resume.personalInformation.jobTitle}
        onChange={(e) =>
          dispatch({ type: addJobTitle, payload: e.target.value })
        }
      />
      <div>
        <h5>Links</h5>
        {links.map((link, key) => {
          return (
            <div key={key}>
              <select
                value={link.name}
                id=""
                onChange={(e) =>
                  dispatch({
                    type: AddOrUpdateLinkName,
                    payload: { name: e.target.value, _id: link._id },
                  })
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
                  dispatch({
                    type: AddOrUpdateLinkUrl,
                    payload: { url: e.target.value, _id: link._id },
                  })
                }
              />
              <button
                onClick={() =>
                  dispatch({ type: deleteLink, payload: { _id: link._id } }) &&
                  console.log(link._id)
                }
              >
                <img src={CrossIcon} alt="" />
              </button>
            </div>
          );
        })}
        <button onClick={handleAddLink}>Add Link</button>
      </div>
    </div>
  );
};

export default PersonalInformation;
