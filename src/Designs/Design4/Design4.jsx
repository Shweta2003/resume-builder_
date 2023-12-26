import styles from "./Design4.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import skill from '../../assets/skill.svg'
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Design4 = () => {

  const resume = useSelector((state) => state.resume);
  console.log(resume)
  const [resumeRef] = useOutletContext();
  const [opt1, setopt1] = useState("SKILLS");
  const [opt2, setopt2] = useState("EDUCATION")
  const [opt3, setopt3] = useState("PROJECTS")

  const skills = <>
    <div className={styles.languages}>
      {resume.skills.languages.length > 0 && (
        <div className={styles.subtitle}>Languages : </div>
      )}
      <div className={styles.div2}>
        {resume.skills.languages.map((language, key) => {
          return (
            <div key={key} className={styles.language}>
              {language.language}
              {key === resume.skills.languages.length - 1 ? "" : ", "}
            </div>
          );
        })}
      </div>
    </div>
    <div className={styles.frameworks}>
      {resume.skills.frameworks.length > 0 && (
        <div className={styles.subtitle}>Frameworks : </div>
      )}
      <div className={styles.div2}>
      {resume.skills.frameworks.map((framework, key) => {
        return (
          <div key={key} className={styles.framework}>
            {framework.framework}
            {key === resume.skills.frameworks.length - 1 ? "" : ", "}
          </div>
        );
      })}
      </div>
    </div>

    <div className={styles.tools}>
      {resume.skills.tools.length > 0 && (
        <div className={styles.subtitle}>Tools : </div>
      )}
      <div className={styles.div2}>
      {resume.skills.tools.map((tool, key) => {
        return (
          <div key={key} className={styles.tool}>
            {tool.tool}
            {key === resume.skills.tools.length - 1 ? "" : ", "}
          </div>
        );
      })}
      </div>
    </div>
    <div className={styles.databases}>
      {resume.skills.databases.length > 0 && (
        <div className={styles.subtitle}>Databases : </div>
      )}
      <div className={styles.div2}>
      {resume.skills.databases.map((database, key) => {
        return (
          <div key={key} className={styles.database}>
            {database.database}
            {key === resume.skills.databases.length - 1 ? "" : ", "}
          </div>
        );
      })}
      </div>
    </div>

    <div className={styles.languages}>
      {resume.skills.otherSkills.length > 0 && (
        <div className={styles.subtitle}>Others : </div>
      )}
      <div className={styles.div2}>
        {resume.skills.otherSkills.map((language, key) => {
          return (
            <div key={key} className={styles.language}>
              {language.otherSkill}
              {key === resume.skills.otherSkills.length - 1 ? "" : ", "}
            </div>
          );
        })}
      </div>
    </div>
  </>

  // awards component
  const awards = resume.additionalInformation.additionalInformationDetails.map((language, key) => {
    return (
      <div key={key} className={styles.award}>
        <span class="material-symbols-outlined icon">bookmark
        </span>{language.award}{" "}
      </div>
    );
  })

  // certificate component
  const certificates = resume.certificates.certificatesDetails.map((item, key) => {
    return (
      <div className={styles.exp} key={key}>
        <span class="material-symbols-outlined icona">circle</span>
        <div className={styles.expDetail1}>
          <a href={item.link} className={styles.pos}>
            {item.name}
          </a>
          <div className={styles.play}>
            {item.authority}
          </div>
        </div>
      </div>
    );
  })

  // education component
  const education = resume.education.educationDetails.map((item, key) => {
    return (
      <div className={styles.exp} key={key}>
        <span class="material-symbols-outlined icona">circle</span>
        <div className={styles.expDetail1}>
        <a
            className={styles.pos} href={item.link}>
            {item.course}|{item.degree}
          </a>
          <div className={styles.play}>
            {item.institution}
          </div>
          <div className={styles.desc}>
            <div className={styles.ddd}>
            {item.startDate} - {item.endDate}
            </div>
            <a
            className={styles.pro} href={item.github}>
            CGPA : {item.cgpa}
          </a>
          </div>
        </div>
      </div>
    );
  })

  // projects component
  const projects = resume.projects.projectDetails.map((item, key) => {
    return (
      <div className={styles.exp} key={key}>
        <span class="material-symbols-outlined icona">circle</span>
        <div className={styles.expDetail1}>
        <a
            className={styles.pos} href={item.link}>
            {item.name}
          </a>
          <div className={styles.play}>
            {"("}{item.technologies}{")"}
          </div>
          <div className={styles.desc}>
            <div className={styles.ddd}>
            {item.description}
            </div>
            <a
            className={styles.pro} href={item.github}>
            <GitHubIcon sx={{ height: "25px" }} style={{ marginTop: "5px", marginRight: "10px" }} />{item.github}
          </a>
          </div>
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
            <PhoneIcon sx={{ width: "17px" }} style={{ marginRight: "20px", marginLeft: "-20px" }} />
            {resume.personalInformation.phone}
          </div>
          <div className={styles.email}>
            <EmailIcon sx={{ width: "17px" }} style={{ marginRight: "20px", marginLeft: "-20px" }} />
            {resume.personalInformation.email}
          </div>
          {resume.personalInformation.links.map((link) => (
            <a href={link.url} target="_blank" className={styles.link}>
              {link.name === "GitHub" ? (
                <GitHubIcon sx={{ width: "17px" }} style={{ marginRight: "20px", marginLeft: "-20px" }} />
              ) : link.name === "LinkedIn" ? (
                <LinkedInIcon sx={{ width: "17px" }} style={{ marginRight: "20px", marginLeft: "-20px" }} />
              ) : link.name === "Portfolio" ? (
                <CoPresentIcon sx={{ width: "17px" }} style={{ marginRight: "20px", marginLeft: "-20px" }} />
              ) : (
                ""
              )}
              {link.name}
            </a>
          ))}
        </div>
        <div className={styles.skills}>
          <div className={styles.skillHeading}>
            {/* <img src={VectorIcon} alt="Vector" /> */}
            {/* <div className={styles.title}><img src={skill} alt="" className={styles.img} /> SKILLS</div> */}
            <img src={skill} alt="" className={styles.img} /><select className={styles.title2} defaultValue={"SKILLS"} onChange={(e) => { setopt1(e.target.value) }}>
            <option className={styles.check} value="AWARDS" name="AWARDS">AWARDS</option>
            <option className={styles.check} value="SKILLS" name="SKILLS">SKILLS</option>
            <option className={styles.check} value="LANGUAGES" name="LANGUAGES">LANGUAGES</option>
          </select>
          </div>

          <div className={styles.comp1}>
            {(opt1 === "AWARDS") ? <div className={styles.loop}>{awards}</div>
            :(opt1 === "LANGUAGES") ? <div className={styles.loop}>{languages}</div>
              : (opt1 === "SKILLS") ? skills
                  : <></>
            }
          </div>
        </div>
        <div className={styles.horLine}>
          <div className={styles.purple}></div>
          <div className={styles.blue}></div>
          <div className={styles.sky}></div>
        </div>
        <div className={styles.experiences}>
          <div className={styles.title} style={{ marginBottom: "20px" }}><span class="material-symbols-outlined iconw">work</span>WORK EXPERIENCE</div>
          {resume.experiences.experienceDetails.map((experienceDetail, key) => {
            return (
              <div className={styles.exp} key={key}>
                <span class="material-symbols-outlined icona">circle</span>
                <div className={styles.expDetail}>
                  <div className={styles.pos}>
                    {experienceDetail.jobTitle}
                  </div>
                  <div className={styles.company}>
                    {experienceDetail.company} | {experienceDetail.duration}
                  </div>


                  <div className={styles.description}>
                    {experienceDetail.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.horLine}>
          <div className={styles.purple}></div>
          <div className={styles.blue}></div>
          <div className={styles.sky}></div>
        </div>

        <div className={styles.skills}>
          <div className={styles.skillHeading}>
            {/* <img src={VectorIcon} alt="Vector" /> */}
            {/* <div className={styles.title}><img src={skill} alt="" className={styles.img} /> SKILLS</div> */}
            <span class="material-symbols-outlined iconw">hub</span>
            <select className={styles.title2} defaultValue={"EDUCATION"} onChange={(e) => { setopt2(e.target.value) }}>
            <option className={styles.check} value="EDUCATION" name="EDUCATION">EDUCATION</option>
            <option className={styles.check} value="CERTIFICATION" name="CERTIFICATION">CERTIFICATION</option>
            <option className={styles.check} value="PROJECTS" name="PROJECTS">PROJECTS</option>
          </select>
          </div>

          <div className={styles.comp1}>
            {(opt2 === "CERTIFICATION") ?certificates
            :(opt2 === "EDUCATION") ?education
              : (opt2 === "PROJECTS") ? projects
                  : <></>
            }
          </div>
        </div>

        <div className={styles.horLine}>
          <div className={styles.purple}></div>
          <div className={styles.blue}></div>
          <div className={styles.sky}></div>
        </div>

        <div className={styles.skills}>
          <div className={styles.skillHeading}>
            {/* <img src={VectorIcon} alt="Vector" /> */}
            {/* <div className={styles.title}><img src={skill} alt="" className={styles.img} /> SKILLS</div> */}
            <span class="material-symbols-outlined iconw">history_edu</span><select className={styles.title2} defaultValue={"PROJECTS"} onChange={(e) => { setopt3(e.target.value) }}>
            <option className={styles.check} value="EDUCATION" name="EDUCATION">EDUCATION</option>
            <option className={styles.check} value="CERTIFICATION" name="CERTIFICATION">CERTIFICATION</option>
            <option className={styles.check} value="PROJECTS" name="PROJECTS">PROJECTS</option>
          </select>
          </div>

          <div className={styles.comp1}>
            {(opt3 === "CERTIFICATION") ?certificates
            :(opt3 === "EDUCATION") ?education
              : (opt3 === "PROJECTS") ? projects
                  : <></>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design4;
