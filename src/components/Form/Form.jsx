import React from "react";
import styles from "./Form.module.css";
import UpArrow from "../../assets/upArrow.svg";
import DownArrow from "../../assets/downArrow.svg";
import { useSelector, useDispatch } from "react-redux";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Certifications from "./Certifications/Certifications";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import { toggleDetails } from "../../redux/reducers/resumeSlice";
import personalLogo from "../../assets/personal.svg";
import educationLogo from "../../assets/education.svg";
import experienceLogo from "../../assets/experience.svg";
import skillsLogo from "../../assets/skills.svg";
import projectsLogo from "../../assets/projects.svg";
import languagesLogo from "../../assets/language.svg";
import achievementsLogo from "../../assets/achievements.svg";
import additionalInformationLogo from "../../assets/additionalInformation.svg";
import Languages from "./Languages/Languages";

const Form = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const sections = {
    personalInformation: [
      <PersonalInformation />,
      personalLogo,
      "Personal Information",
    ],
    education: [<Education />, educationLogo, "Education"],
    experiences: [<Experience />, experienceLogo, "Experience"],
    skills: [<Skills />, skillsLogo, "Skills"],
    projects: [<Projects />, projectsLogo, "Projects"],
    certificates: [<Certifications />, achievementsLogo, "Certifications"],
    languages: [<Languages />, languagesLogo, "Languages"],
    additionalInformation: [
      <AdditionalInformation />,
      additionalInformationLogo,
      "Additional Information",
    ],
  };

  const handleToggleDetails = (sectionComponent) => {
    dispatch(toggleDetails(sectionComponent));
  };

  return (
    <div className={styles.container}>
      <h3 style={{ textAlign: "center" }}>Resume Details</h3>
      <ul>
        {Object.keys(sections).map((section, key) => {
          return (
            <ul key={key}>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  // margin: "0 auto",
                  cursor: "pointer",
                  padding: "1rem 0",
                  borderBottom: "1px solid #ccc",
                }}
                key={section}
                onClick={() => handleToggleDetails(section)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <img src={sections[section][1]} alt="section logo" />
                  <span>{sections[section][2]}</span>
                </div>

                <img
                  src={DownArrow}
                  alt="Not Found"
                  style={{
                    transform: resume[section]?.showDetails
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "all .4s ease",
                  }}
                />
              </li>
              {resume[section]?.showDetails && (
                <div className={styles.section}>{sections[section][0]}</div>
              )}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
