import React, { useState } from "react";
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

  const [opt1, setopt1] = useState("EDUCATION")
  const [opt2, setopt2] = useState("SKILLS")
  const [opt3, setopt3] = useState("CERTIFICATION")
  const [opt4, setopt4] = useState("PROJECTS")

  // certificates component
  const certificateCat = resume.certificates.certificatesDetails.map(
    (certificateDetail, key) => {
      return (
        <div key={key} className={styles.temp}>
          <span class="material-symbols-outlined icongh">circle</span>
          <div className={styles.cet}>
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
            className={styles.project} href={item.link}>
            {item.name}
          </a>
          <a
            className={styles.pro} href={item.github}>
            <GitHubIcon sx={{ height: "25px" }} style={{ marginTop: "5px", marginRight: "10px" }} />{item.github}
          </a>
          <div className={styles.proc}>{"( "}{item.technologies}{" )"}
          </div>
          <div className={styles.prod}>{item.description}</div>
        </div>
      );
    }
  )

  // skills component
  const skills = <>
    <div className={styles.temp}>
      {(resume.skills.languages.length > 0) ? <span class="material-symbols-outlined icongh">circle</span>
        : <></>
      }

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
    </div>
    <div className={styles.temp}>
      {(resume.skills.frameworks.length > 0) ? <span class="material-symbols-outlined icongh">circle</span>
        : <></>
      }
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
    </div>
    <div className={styles.temp}>
      {(resume.skills.tools.length > 0) ? <span class="material-symbols-outlined icongh">circle</span>
        : <></>
      }
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
    </div>

    <div className={styles.temp}>
      {(resume.skills.databases.length > 0) ? <span class="material-symbols-outlined icongh">circle</span>
        : <></>
      }
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
    </div>

    <div className={styles.temp}>
      {(resume.skills.otherSkills.length > 0) ? <span class="material-symbols-outlined icongh">circle</span>
        : <></>
      }
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
    </div>
  </>

  // education component
  const educationCat = resume.education.educationDetails.map((educationDetail, key) => {
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
  })

  // languages component
  const languages = resume.languages.languagesDetails.map((item, key) => {

    return (

      <div key={key} className={styles.temp}>
        <span class="material-symbols-outlined icongh">circle</span>
        <div className={styles.cet}>
          <div key={key} className={styles.check}>
            {item.language}
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className={styles.container}>
      <div className={styles.resume} style={{fontFamily:`${(resume.fontFamily === "")? "'Arvo', serif" : resume.fontFamily}`}} ref={resumeRef}>
        <div className={styles.personalDetails} style={{fontFamily:`${(resume.fontFamily === "")? "'Arvo', serif" : resume.fontFamily}`}}>
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

        <div className={styles.aboutSection} style={{fontFamily:`${(resume.fontFamily === "")? "'Arvo', serif" : resume.fontFamily}`}}>
          <div className={styles.title2}>PROFILE</div>
          <div className={styles.about}>{resume.personalInformation.about}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.left} style={{fontFamily:`${(resume.fontFamily === "")? "'Arvo', serif" : resume.fontFamily}`}}>
            <div className={styles.education}>
              {/* <div className={styles.title}>EDUCATION</div> */}
              <div className={styles.back}>
                <select className={styles.title3} defaultValue={"EDUCATION"} onChange={(e) => { setopt1(e.target.value) }}>
                  <option className={styles.check} value={"PROJECTS"} name="PROJECTS" >PROJECTS</option>
                  <option className={styles.check} value={"CERTIFICATION"} name="CERTIFICATION" >CERTIFICATION</option>
                  <option className={styles.check} value={"EDUCATION"} name="EDUCATION" >EDUCATION</option>
                </select>
              </div>
              <>
                {(opt1 === "PROJECTS") ? projects
                  : (opt1 === "CERTIFICATION") ? certificateCat
                    : (opt1 === "EDUCATION") ? educationCat
                      : <></>
                }
              </>

            </div>
            <div className={styles.skills}>
              {/* <div className={styles.title}>SKILLS</div> */}
              <div className={styles.back}>
                <select className={styles.title3} defaultValue={"SKILLS"} onChange={(e) => { setopt2(e.target.value) }}>
                  <option className={styles.check} value={"SKILLS"} name="SKILLS" >SKILLS</option>
                  <option className={styles.check} value={"CERTIFICATION"} name="CERTIFICATION" >CERTIFICATION</option>
                  <option className={styles.check} value={"LANGUAGES"} name="LANGUAGES" >LANGUAGES</option>
                </select>
              </div>
              <>
                {(opt2 === "SKILLS") ? skills
                  : (opt2 === "LANGUAGES") ? languages
                    : (opt2 === "CERTIFICATION") ? certificateCat
                      : <></>
                }
              </>
            </div>
            <div className={styles.certificates}>
              {/* <div className={styles.title}>CERTIFICATES</div> */}
              <div className={styles.back}>
                <select className={styles.title3} defaultValue={"CERTIFICATION"} onChange={(e) => { setopt3(e.target.value) }}>
                  <option className={styles.check} value={"AWARDS"} name="AWARDS" >AWARDS</option>
                  <option className={styles.check} value={"CERTIFICATION"} name="CERTIFICATION" >CERTIFICATION</option>
                </select>
              </div>
              <>
                {(opt3 === "AWARDS") ? awards
                  : (opt3 === "CERTIFICATION") ? certificateCat
                    : <></>
                }
              </>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.right} style={{fontFamily:`${(resume.fontFamily === "")? "'Arvo', serif" : resume.fontFamily}`}}>
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
                        {experienceDetail.company} | {experienceDetail.duration}
                      </div>
                      <div className={styles.description}>
                        {experienceDetail.description}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className={styles.experiences}>
              {/* <div className={styles.title}>CERTIFICATES</div> */}
              <div className={styles.back}>
                <select className={styles.title3} defaultValue={"PROJECTS"} onChange={(e) => { setopt4(e.target.value) }}>
                  <option className={styles.check} value={"PROJECTS"} name="PROJECTS" >PROJECTS</option>
                  <option className={styles.check} value={"CERTIFICATION"} name="CERTIFICATION" >CERTIFICATION</option>
                  <option className={styles.check} value={"AWARDS"} name="AWARDS" >AWARDS</option>
                </select>
              </div>
              <>
                {(opt4 === "PROJECTS") ? projects
                  : (opt4 === "CERTIFICATION") ? certificateCat
                    : (opt4 === "AWARDS") ? awards
                      : <></>
                }
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
