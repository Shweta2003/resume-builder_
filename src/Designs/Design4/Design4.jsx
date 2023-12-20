import styles from "./Design4.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import VectorIcon from "../../assets/Vector.svg";
import { useOutletContext } from "react-router-dom";

const Design4 = () => {
  const resume = useSelector((state) => state.resume);
  const [resumeRef] = useOutletContext();
  return (
    <div className={styles.container}>
      <div className={styles.resume} ref={resumeRef}>
        <div className={styles.personalInfo}>
          <div className={styles.name}>{resume.personalInformation.name}</div>
          <div className={styles.currentJob}>
            {resume.personalInformation.jobTitle}
          </div>
          <div className={styles.about}>{resume.personalInformation.about}</div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <PhoneIcon sx={{ width: "1rem" }} />
            {resume.personalInformation.phone}
          </div>
          <div className={styles.email}>
            <EmailIcon sx={{ width: "1rem" }} />
            {resume.personalInformation.email}
          </div>
          <div className={styles.links}>
            {resume.personalInformation.links.map((link) => (
              <a href={link.url} target="_blank" className={styles.link}>
                {link.name === "GitHub" ? (
                  <GitHubIcon sx={{ width: "1rem" }} />
                ) : link.name === "LinkedIn" ? (
                  <LinkedInIcon sx={{ width: "1rem" }} />
                ) : link.name === "Portfolio" ? (
                  <CoPresentIcon sx={{ width: "1rem" }} />
                ) : (
                  ""
                )}
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillHeading}>
            {/* <img src={VectorIcon} alt="Vector" /> */}
            <div className={styles.title}>SKILLS</div>
          </div>
          <div className={styles.languages}>
            {resume.skills.languages.length > 0 && (
              <div className={styles.subtitle}>Languages : </div>
            )}
            {resume.skills.languages.map((language, key) => {
              return (
                <div key={key} className={styles.language}>
                  {language.language}
                  {key === resume.skills.languages.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
          <div className={styles.frameworks}>
            {resume.skills.frameworks.length > 0 && (
              <div className={styles.subtitle}>Frameworks : </div>
            )}
            {resume.skills.frameworks.map((framework, key) => {
              return (
                <div key={key} className={styles.framework}>
                  {framework.framework}
                  {key === resume.skills.frameworks.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>

          <div className={styles.tools}>
            {resume.skills.tools.length > 0 && (
              <div className={styles.subtitle}>Tools : </div>
            )}
            {resume.skills.tools.map((tool, key) => {
              return (
                <div key={key} className={styles.tool}>
                  {tool.tool}
                  {key === resume.skills.tools.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
          <div className={styles.databases}>
            {resume.skills.databases.length > 0 && (
              <div className={styles.subtitle}>Databases : </div>
            )}
            {resume.skills.databases.map((database, key) => {
              return (
                <div key={key} className={styles.database}>
                  {database.database}
                  {key === resume.skills.databases.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.horLine}>
          <div className={styles.purple}></div>
          <div className={styles.blue}></div>
          <div className={styles.sky}></div>
        </div>
        <div className={styles.experiences}>
          <div className={styles.title}>WORK EXPERIENCE</div>
          {resume.experiences.experienceDetails.map((experienceDetail, key) => {
            return (
              <div className={styles.exp} key={key}>
                <div className={styles.expBorder}>
                  <div className={styles.circle}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.expDetail}>
                  <div className={styles.jobTitle}>
                    {experienceDetail.jobTitle}
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div className={styles.company}>
                      {experienceDetail.company}
                    </div>
                    <div className={styles.duration}>
                      {experienceDetail.duration}
                    </div>
                  </div>
                  <div className={styles.description}>
                    {experienceDetail.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default Design4;
