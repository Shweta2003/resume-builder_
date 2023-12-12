import React from "react";
import styles from "./Design5.module.css";
import { useSelector } from "react-redux";

const Design5 = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.personalDetails}>
          <div className={styles.title}>
            <div className={styles.name}>{resume.personalInformation.name}</div>
            <div className={styles.jobTitle}>
              {resume.personalInformation.jobTitle}
            </div>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.email}>
              {resume.personalInformation.email}
            </div>
            <div className={styles.phone}>
              {resume.personalInformation.phone}
            </div>
            {resume.personalInformation.links.map((link, key) => {
              return (
                <div key={key}>
                  <button onClick={()=>window.open(link.url, '_blank')}>{link.name}</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.AboutSection}>
          <div className={styles.ProfileTitle}>Profile</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor libero adipisci soluta magni. Pariatur ut deserunt aliquid quod ad nostrum unde inventore fugiat eligendi, repellendus vel quibusdam ipsa dolor odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro debitis quidem tempora harum, suscipit, excepturi quisquam ab facere aliquam ut cumque architecto quasi nobis! Nostrum laudantium culpa in repudiandae.</div>
        </div>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.education}>
              <div className={styles.title}>Education</div>
              {resume.education.educationDetails.map((educationDetail, key) => {
                return (
                  <div className={styles.edu} key={key}>
                    <div className={styles.institute}>
                      {educationDetail.institution}
                    </div>
                    <div className={styles.degree}>
                      {educationDetail.degree}
                    </div>
                    <div className={styles.course}>
                      {educationDetail.course}
                    </div>
                    <div className={styles.duration}>
                      {educationDetail.startDate} - {educationDetail.endDate}
                    </div>
                    <div className={styles.cgpa}>
                      {educationDetail.cgpa}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.skills}>
              <div className={styles.title}>Skills</div>
              <div className={styles.languages}>
                {resume.skills.languages.length > 0 && (
                  <div className={styles.subtitle}>Languages : </div>
                )}
                {resume.skills.languages.map((language, key) => {
                  return (
                    <div key={key} className={styles.language}>
                      {language.language} {(key===resume.skills.languages.length-1)?"":","}
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
                      {framework.framework} {(key===resume.skills.frameworks.length-1)?"":","}
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
                      {tool.tool} {(key===resume.skills.tools.length-1)?"":","}
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
                      {database.database} {(key===resume.skills.databases.length-1)?"":","}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.certificates}>
              <div className={styles.title}>Certificates</div>
              {resume.certificates.certificatesDetails.map(
                (certificateDetail, key) => {
                  return (
                    <div key={key}>
                      <div className={styles.name}>
                        {certificateDetail.name}
                      </div>
                      <div className={styles.issuer}>
                        {certificateDetail.authority}
                      </div>
                      <div className={styles.link}>
                        {certificateDetail.link}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.experiences}>
              <div className={styles.title}>Experience</div>
              {resume.experiences.experienceDetails.map(
                (experienceDetail, key) => {
                  return (
                    <div className={styles.xp} key={key}>
                      <div className={styles.company}>
                        {experienceDetail.company}
                      </div>
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
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design5;
