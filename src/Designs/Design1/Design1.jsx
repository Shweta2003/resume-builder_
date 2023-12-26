import React, { useState } from "react";
import styles from "./Design1.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PortfolioIcon from "../../assets/dp.jpg";
import SchoolIcon from "@mui/icons-material/School";
import { useOutletContext } from "react-router-dom";

const Design1 = () => {
  const resume = useSelector((state) => state.resume);
  console.log(resume)
  const [top1, settop1] = useState("AWARDS")
  const [top2, settop2] = useState("SKILLS")
  const [top3, settop3] = useState("EXPERIENCE")
  const [top4, settop4] = useState("PROJECTS")
  const [resumeRef, imgUrl] = useOutletContext();

  // certificates component
  const certificateCat = resume.certificates.certificatesDetails.map(
    (certificateDetail, key) => {
      return (
        <div key={key} className={styles.cet}>
          <a
            className={styles.certificateName}
            href={certificateDetail.link}
          >
            <span class="material-symbols-outlined icon">star_half</span>
            {certificateDetail.name}
          </a>
          <div className={styles.issuer}>
            {certificateDetail.authority}
          </div>
        </div>
      );
    }
  )

  // awards component
  const awards = resume.additionalInformation.additionalInformationDetails.map((language, key) => {
    return (
      <div key={key} className={styles.award}>
        <span class="material-symbols-outlined icon">bookmark
            </span>{language.award}{" "}
      </div>
    );
  })

  // project component
  const projects = resume.projects.projectDetails.map(
    (item, key) => {
      return (
        <div key={key} className={styles.ceta}>
          <a
            className={styles.project}
            href={item.link}
          >
            <span class="material-symbols-outlined icon">radio_button_partial</span>
            {item.name}
          </a>
          <a
            className={styles.pro}
            href={item.github}
          >
            <GitHubIcon sx={{ height: "30px" }} style={{ marginLeft: "20px", marginRight: "10px" }} />{item.github}
          </a>
          <div className={styles.proc}>{"("}{item.technologies}{")"}
          </div>
          <div className={styles.prod}>
            {item.description}
          </div>
        </div>
      );
    }
  )

  // skills component
  const skills = <>
    <div className={styles.languages}>
      {resume.skills.languages.length > 0 && (
        <div className={styles.subtitle}>Languages : </div>
      )}
      {resume.skills.languages.map((language, key) => {
        return (
          <div key={key} className={styles.language}>
            {language.language}{" "}
            {key === resume.skills.languages.length - 1 ? "" : " "}
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
            {key === resume.skills.frameworks.length - 1 ? "" : " "}
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
            {key === resume.skills.tools.length - 1 ? "" : " "}
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
            {key === resume.skills.databases.length - 1 ? "" : " "}
          </div>
        );
      })}
    </div>

    <div className={styles.databases}>
      {resume.skills.otherSkills.length > 0 && (
        <div className={styles.subtitle}>Others : </div>
      )}
      {resume.skills.otherSkills.map((database, key) => {
        return (
          <div key={key} className={styles.database}>
            {database.otherSkill}{" "}
            {key === resume.skills.otherSkills.length - 1 ? "" : " "}
          </div>
        );
      })}
    </div>
  </>

  // education component
  const education = resume.education.educationDetails.map((educationDetail, key) => {
    return (
      <div className={styles.edu} key={key}>
        <span class="material-symbols-outlined icon">school</span>
        <div className={styles.edu_sub}>
          <div className={styles.ins}>
            {educationDetail.institution} | {educationDetail.degree}
          </div>
          <div className={styles.edu_sub}>
            <div className={styles.course}>{educationDetail.course}</div>
          </div>
          <div className={styles.course}>CGPA : {educationDetail.cgpa}</div>
          <div className={styles.duration}>
            {educationDetail.startDate} - {educationDetail.endDate}
          </div>
          
        </div>
      </div>
    );
  })

  // experience component
  const experience = resume.experiences.experienceDetails.map((experienceDetail, key) => {
    return (
      <div className={styles.xp} key={key}>
        <div className={styles.company}>{experienceDetail.company} | {experienceDetail.jobTitle}</div>
        <div className={styles.duration}>
          {experienceDetail.duration}
        </div>
        <div className={styles.description}>
          {experienceDetail.description}
        </div>
      </div>
    );
  })

  // languages component
  const languages = resume.languages.languagesDetails.map((item, key) => {
    console.log(item)
    return (
      <div key={key} className={styles.check}>
        {item.language}
      </div>
    );
  })

  return (
    <div className={styles.resume} ref={resumeRef}>
      <div className={styles.left}>
        <div className={styles.dp}>
          <img src={imgUrl ? imgUrl : PortfolioIcon} />
        </div>
        <div className={styles.details}>
          <div className={styles.personalInfo}>
            <div className={styles.info}>
              <div className={styles.phone}>
              <span class="material-symbols-outlined iconk">phone_in_talk</span>
                {resume.personalInformation.phone}
              </div>
              <div className={styles.email}>
                <span class="material-symbols-outlined iconk">drafts</span>
                {resume.personalInformation.email}
              </div>
              <div className={styles.links}>
                {resume.personalInformation.links.map((link) => (
                  <a href={link.url} target="_blank" className={styles.link}>
                    {link.name === "GitHub" ? (
                      <GitHubIcon sx={{ height: "30px" }} style={{ marginLeft: "20px", marginRight: "30px" }} />
                    ) : link.name === "LinkedIn" ? (
                      <LinkedInIcon sx={{ height: "30px" }} style={{ marginLeft: "20px", marginRight: "30px" }} />
                    ) : link.name === "Portfolio" ? (
                      <CoPresentIcon sx={{ height: "30px" }} style={{ marginLeft: "20px", marginRight: "30px" }} />
                    ) : (
                      ""
                    )}
                    {link.url}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.certificates} ${styles.certificates_break}`}>
            {/* get first component */}
            {/* <div className={styles.title}>CERTIFICATES</div> */}
            <div className={styles.back}>
              <select className={styles.title} defaultValue={"AWARDS"} onChange={(e) => { settop1(e.target.value) }}>
                <option className={styles.check} value={"AWARDS"} name="AWARDS" >AWARDS</option>
                <option className={styles.check} value={"CERTIFICATION"} name="CERTIFICATION" >CERTIFICATION</option>
                <option className={styles.check} value={"EDUCATION"} name="EDUCATION" >EDUCATION</option>
              </select>
            </div>
            <div className={styles.comp1}>
              {(top1 === "AWARDS") ? awards
                : (top1 === "CERTIFICATION") ? certificateCat
                  : (top1 === "EDUCATION") ? education
                    : <></>
              }
            </div>
          </div>
          <div className={`${styles.certificates} ${styles.eduction_break}`}>

            {/* get second component */}
            {/* <div className={styles.title}>EDUCATION</div> */}
            <div className={styles.back}>
              <select className={styles.title} defaultValue={"SKILLS"} onChange={(e) => { settop2(e.target.value) }}>
              <option className={styles.check} value="SKILLS" name="SKILLS">SKILLS</option>
              <option className={styles.check} value="LANGUAGES" name="LANGUAGES">LANGUAGES</option>
              <option className={styles.check} value="CERTIFICATION" name="CERTIFICATION">CERTIFICATION</option>
              </select>
            </div>
            <div className={styles.comp1}>
              {(top2 === "CERTIFICATION") ? certificateCat
                      : (top2 === "SKILLS") ? skills
                        : (top2 === "LANGUAGES") ? languages
                            : <></>
              }
            </div>
          </div>
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
        <div className={`${styles.AboutSection} ${styles.experiences_break}`}>
          {/* set third component */}
          <div className={styles.title}>EXPERIENCE</div>
          {/* <div className={styles.back2}> */}
          {/* <select className={styles.title} defaultValue={"EXPERIENCE"} onChange={(e) => { settop3(e.target.value) }}>
              {
                options.map((e, key) => {
                  return <option className={styles.check} value={e} name={e} key={key}>{e}</option>
                })
              }
            </select>
          </div> */}

          <div className={styles.comp2}>
            {/* {(top3 === "AWARDS") ? awards
              : (top3 === "CERTIFICATES") ? certificateCat
                  : (top3 === "EDUCATION") ? education
                    : (top3 === "EXPERIENCE") ? experience
                      : (top3 === "SKILLS") ? skills
                        : (top3 === "LANGUAGES") ? languages
                          : (top3 === "PROJECTS") ? projects
                            : <></>
            } */}
            {
              experience
            }
          </div>

        </div>
        <div className={`${styles.experiences} ${styles.skills_break}`}>

          {/* component 4 */}
          {/* <div className={styles.title}>SKILLS</div> */}
          <div className={styles.back2}>
            <select className={styles.title} defaultValue={"PROJECTS"} onChange={(e) => { settop4(e.target.value) }}>
            <option className={styles.check} value="PROJECTS" name="PROJECTS">PROJECTS</option>
            <option className={styles.check} value="EDUCATION" name="EDUCATION">EDUCATION</option>
            <option className={styles.check} value="SKILLS" name="SKILLS">SKILLS</option>
            </select>
          </div>

          <div className={styles.comp2}>
            {(top4 === "EDUCATION") ? education
                    : (top4 === "SKILLS") ? skills
                        : (top4 === "PROJECTS") ? projects
                          : <></>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Design1;
