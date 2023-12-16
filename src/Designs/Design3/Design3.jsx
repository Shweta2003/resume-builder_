import React from "react";
import styles from "./Design3.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useOutletContext } from "react-router-dom";

const Design3 = () => {
  const resume = useSelector((state) => state.resume);
  const [resumeRef] = useOutletContext();

  return (
    <div className={styles.resume} ref={resumeRef}>
      <div className={styles.personalDetails}>
        <div className={styles.designation}>
          <div className={styles.name}>
            {resume.personalInformation.name.toUpperCase()}
          </div>
          <div className={styles.currnetJob}>
            {resume.personalInformation.jobTitle}
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            {resume.personalInformation.phone}
            <PhoneIcon sx={{ width: "1rem" }} />
          </div>
          <div className={styles.email}>
            {resume.personalInformation.email}
            <EmailIcon sx={{ width: "1rem" }} />
          </div>
          <div className={styles.links}>
            {resume.personalInformation.links.map((link) => (
              <a href={link.url} target="_blank" className={styles.link}>
                {link.name}
                {link.name === "GitHub" ? (
                  <GitHubIcon sx={{ width: "1rem" }} />
                ) : link.name === "LinkedIn" ? (
                  <LinkedInIcon sx={{ width: "1rem" }} />
                ) : link.name === "Portfolio" ? (
                  <CoPresentIcon sx={{ width: "1rem" }} />
                ) : (
                  ""
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.title}>ABOUT</div>
        <div className={styles.about}>{resume.personalInformation.about}</div>
      </div>
      <div className={styles.details}>
        <div className={styles.left}>
          <div className={styles.education}>
            <div className={styles.title}>EDUCATION</div>
            {resume.education.educationDetails.map((educationDetail, key) => {
              return (
                <div className={styles.edu} key={key}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={styles.institute}>
                      {educationDetail.institution}
                    </div>
                    {educationDetail.cgpa && (
                      <div className={styles.cgpa}>
                        CGPA : {educationDetail.cgpa}
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div className={styles.degree}>
                      {educationDetail.degree}
                    </div>
                    <div className={styles.course}>
                      {educationDetail.course}
                    </div>
                  </div>
                  <div className={styles.duration}>
                    {educationDetail.startDate} - {educationDetail.endDate}
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
          <div className={styles.certificates}>
            <div className={styles.title}>CERTIFICATES</div>
            {resume.certificates.certificatesDetails.map(
              (certificateDetail, key) => {
                return (
                  <div key={key}>
                    <a
                      className={styles.certificateName}
                      href={certificateDetail.link}
                    >
                      {certificateDetail.name}
                    </a>
                    <div className={styles.issuer}>
                      {certificateDetail.authority}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.experiences}>
            <div className={styles.title}>EXPERIENCE</div>
            {resume.experiences.experienceDetails.map(
              (experienceDetail, key) => {
                return (
                  <div className={styles.xp} key={key}>
                    <div className={styles.jobTitle}>
                      {experienceDetail.jobTitle}
                    </div>
                    <div className={styles.company}>
                      {experienceDetail.company}
                    </div>
                    <div className={styles.duration}>
                      {experienceDetail.duration}
                    </div>
                    <div className={styles.description}>
                      {experienceDetail.description}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
