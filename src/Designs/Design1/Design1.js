import React from "react";
import styles from "./Design1.module.css";
import { useSelector } from "react-redux";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
// import PortfolioIcon from "../../assets/portfolio.png";
import PortfolioIcon from "../../assets/dp.jpg";
import { useOutletContext } from "react-router-dom";

const Design5 = () => {
  const resume = useSelector((state) => state.resume);
  const [resumeRef,imgUrl] = useOutletContext();

  return (
    <div className={styles.resume} ref={resumeRef}>
      <div className={styles.left}>
        <div className={styles.dp}>
          <img src={(imgUrl)?imgUrl:PortfolioIcon} />
        </div>
        <div className={styles.personalInfo}>
          <div className={styles.email}>
            <img src={EmailIcon} alt className={styles.icon} />
            <div>{resume.personalInformation.email}</div>
          </div>
          <div className={styles.phone}>
            <img src={PhoneIcon} alt className={styles.icon} />
            <div>{resume.personalInformation.phone}</div>
          </div>
          {resume.personalInformation.links.map((link, key) => {
            return (
              <div key={key}>
                <a href={link.url} target="_blank" className={styles.link}>
                  <img
                    className={styles.icon}
                    src={
                      link.name === "GitHub"
                        ? GithubIcon
                        : link.name === "LinkedIn"
                        ? LinkedinIcon
                        : link.name === "Portfolio"
                        ? PortfolioIcon
                        : ""
                    }
                    alt
                  />
                  {link.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.certificates}>
          <div className={styles.title}>CERTIFICATES</div>
          {resume.certificates.certificatesDetails.map(
            (certificateDetail, key) => {
              return (
                <div key={key}>
                  <div className={styles.certificateName}>
                    {certificateDetail.name}
                  </div>
                  <div className={styles.issuer}>
                    {certificateDetail.authority}
                  </div>
                  <div className={styles.link}>{certificateDetail.link}</div>
                </div>
              );
            }
          )}
        </div>
        <div className={styles.education}>
          <div className={styles.title}>EDUCATION</div>
          {resume.education.educationDetails.map((educationDetail, key) => {
            return (
              <div className={styles.edu} key={key}>
                <div className={styles.institute}>
                  {educationDetail.institution}
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className={styles.degree}>{educationDetail.degree}</div>
                  <div className={styles.course}>{educationDetail.course}</div>
                </div>
                <div className={styles.duration}>
                  {educationDetail.startDate} - {educationDetail.endDate}
                </div>
                <div className={styles.cgpa}>{educationDetail.cgpa}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.identity}>
          <div className={styles.name}>
            {resume.personalInformation.name.toUpperCase()}
          </div>
          <div className={styles.jobTitle}>
            {resume.personalInformation.jobTitle.toUpperCase()}
          </div>
        </div>
        <div className={styles.AboutSection}>
          <div className={styles.title}>PROFILE</div>
          <div className={styles.about}>{resume.personalInformation.about}</div>
        </div>
        <div className={styles.experiences}>
          <div className={styles.title}>EXPERIENCE</div>
          {resume.experiences.experienceDetails.map((experienceDetail, key) => {
            return (
              <div className={styles.xp} key={key}>
                <div className={styles.company}>{experienceDetail.company}</div>
                <div className={styles.jobTitle}>
                  {experienceDetail.jobTitle}
                </div>
                <div className={styles.duration}>
                  {experienceDetail.duration}
                </div>
                <div className={styles.description}>
                  {experienceDetail.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.skills}>
          <div className={styles.title}>SKILLS</div>
          <div className={styles.languages}>
            {resume.skills.languages.length > 0 && (
              <div className={styles.subtitle}>Languages : </div>
            )}
            {resume.skills.languages.map((language, key) => {
              return (
                <div key={key} className={styles.language}>
                  {language.language}{" "}
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
                  {framework.framework}{" "}
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
                  {tool.tool}{" "}
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
                  {database.database}{" "}
                  {key === resume.skills.databases.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design5;
