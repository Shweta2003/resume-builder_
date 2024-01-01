import React, { useEffect, useRef, useState } from "react";
import styles from "./Design1.module.css";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PortfolioIcon from "../../assets/gentle.png";
import { useOutletContext } from "react-router-dom";

const Design1 = () => {
  const resume = useSelector((state) => state.resume);
  const [top1, settop1] = useState("PROJECTS");
  const [top2, settop2] = useState("SKILLS");
  const [top4, settop4] = useState("CERTIFICATION");
  const [resumeRef, imgUrl] = useOutletContext();
  const [maxheight, setheight] = useState(1120);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    console.log(resumeRef.current.clientHeight);

    const handleResize = (entries) => {
      if (resumeRef.current.scrollHeight > resumeRef.current.clientHeight) {
        setheight(maxheight + 1090);
      } else if (
        leftRef.current.clientHeight < maxheight - 1090 &&
        rightRef.current.clientHeight < maxheight - 1090
      ) {
        setheight(maxheight - 1090);
      }
    };

    const resizeObserverLeft = new ResizeObserver(handleResize);
    const resizeObserverRight = new ResizeObserver(handleResize);

    // Observe the target element (div)
    if (rightRef.current) {
      resizeObserverRight.observe(rightRef.current);
    }
    // Observe the target element (div)
    else if (leftRef.current) {
      resizeObserverLeft.observe(rightRef.current);
    }

    // Cleanup when the component is unmounted
    return () => {
      if (rightRef.current) {
        resizeObserverRight.unobserve(rightRef.current);
      } else if (leftRef.current) {
        resizeObserverLeft.unobserve(leftRef.current);
      }
    };
  }, [resumeRef, maxheight, leftRef, rightRef]);

  // certificates component
  const certificateCat = resume.certificates.certificatesDetails.map(
    (certificateDetail, key) => {
      return (
        <div key={key} className={styles.cet}>
          <a className={styles.certificateName} href={certificateDetail.link}>
            <span class="material-symbols-outlined icon">star_half</span>
            {certificateDetail.name}
          </a>
          <div className={styles.issuer}>{certificateDetail.authority}</div>
        </div>
      );
    }
  );

  // awards component
  const awards = resume.additionalInformation.additionalInformationDetails.map(
    (language, key) => {
      return (
        <div key={key} className={styles.award}>
          <span class="material-symbols-outlined icon">bookmark</span>
          {language.award}{" "}
        </div>
      );
    }
  );

  // project component
  const projects = resume.projects.projectDetails.map((item, key) => {
    return (
      <div key={key} className={styles.ceta}>
        <a className={styles.project} href={item.link}>
          <span class="material-symbols-outlined icon">
            radio_button_partial
          </span>
          {item.name}
        </a>
        <a className={styles.pro} href={item.github}>
          <GitHubIcon
            sx={{ height: "30px" }}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
          <span style={{width:"92%",wordWrap:"break-word"}}>{item.github}</span>
        </a>
        <div className={styles.proc}>
          {"("}
          {item.technologies}
          {")"}
        </div>
        <div className={styles.prod}>
          {/* {item.description} */}
          {
              item.description.split("\n").map((e) => {
                return <div className={styles.jump}><li className={styles.companyl}></li>
                  <p>{e}</p></div>
              })
            }
        </div>
      </div>
    );
  });

  // skills component
  const skills = (
    <>
      <div className={styles.languages}>
        {resume.skills.languages.map((language, key) => {
          return (
            <div style={{ display: "flex", width: "50%", wordWrap: "break-word", alignItems: "center", paddingLeft: "5px" }}>
              <li></li><div key={key} className={styles.language}>
                {language.language}{" "}
                {key === resume.skills.languages.length - 1 ? "" : " "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  // education component
  const education = resume.education.educationDetails.map(
    (educationDetail, key) => {
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
    }
  );

  // experience component
  const experience = resume.experiences.experienceDetails.map(
    (experienceDetail, key) => {
      return (
        <div className={styles.xp} key={key}>
          <div className={styles.company}>
            {experienceDetail.company} | {experienceDetail.jobTitle}
          </div>
          <div className={styles.duration}>{experienceDetail.duration}</div>
          <div className={styles.description}>
            {/* {experienceDetail.description} */}
            {
              experienceDetail.description.split("\n").map((e) => {
                return <div className={styles.jump}><li className={styles.companyl}></li>
                  <p>{e}</p></div>
              })
            }
          </div>
        </div>
      );
    }
  );

  // languages component
  const languages = resume.languages.languagesDetails.map((item, key) => {
    return (
      <div key={key} className={styles.check}>
        {item.language}
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.resume} style={{ fontFamily: `${(resume.fontFamily === "") ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}`, height: `${maxheight}px` }} ref={resumeRef}>
        <div className={styles.left} >
          <div className={styles.subleft} ref={leftRef} style={{ height: "max-content" }}>
            <div className={styles.dp}>
              <img src={imgUrl ? imgUrl : PortfolioIcon} alt="" className={styles.img} />
            </div>
            <div className={styles.details}>
              <div className={styles.personalInfo}>
                <div className={styles.info}>
                  <div className={styles.phone}>
                    <span class="material-symbols-outlined iconk">
                      phone_in_talk
                    </span>
                    {resume.personalInformation.phone}
                  </div>
                  <div className={styles.email}>
                    <span class="material-symbols-outlined iconk">drafts</span>
                    {resume.personalInformation.email}
                  </div>
                  <div className={styles.links}>
                    {resume.personalInformation.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        className={styles.link}
                      >
                        {link.name === "GitHub" ? (
                          <GitHubIcon
                            sx={{ height: "30px" }}
                            style={{ marginLeft: "20px", marginRight: "30px" }}
                          />
                        ) : link.name === "LinkedIn" ? (
                          <LinkedInIcon
                            sx={{ height: "30px" }}
                            style={{ marginLeft: "20px", marginRight: "30px" }}
                          />
                        ) : link.name === "Portfolio" ? (
                          <CoPresentIcon
                            sx={{ height: "30px" }}
                            style={{ marginLeft: "20px", marginRight: "30px" }}
                          />
                        ) : (
                          ""
                        )}
                        {link.url}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${styles.certificates} ${styles.certificates_break}`}
              >
                {/* get first component */}
                {/* <div className={styles.title}>CERTIFICATES</div> */}
                <div className={styles.back}>
                  <select
                    className={styles.title}
                    defaultValue={"PROJECTS"}
                    onChange={(e) => {
                      settop1(e.target.value);
                    }}
                  >
                    <option
                      className={styles.check}
                      value={"AWARDS"}
                      name="AWARDS"
                    >
                      AWARDS
                    </option>
                    <option
                      className={styles.check}
                      value={"CERTIFICATION"}
                      name="CERTIFICATION"
                    >
                      CERTIFICATION
                    </option>
                    <option
                      className={styles.check}
                      value={"PROJECTS"}
                      name="PROJECTS"
                    >
                      PROJECTS
                    </option>
                    <option
                      className={styles.check}
                      value={"EDUCATION"}
                      name="EDUCATION"
                    >
                      EDUCATION
                    </option>
                  </select>
                </div>
                <div className={styles.comp1}>
                  {top1 === "AWARDS" ? (
                    awards
                  ) : top1 === "CERTIFICATION" ? (
                    certificateCat
                  ) : top1 === "EDUCATION" ? (
                    education
                  ) : top1 === "PROJECTS" ? (
                    projects
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div
                className={`${styles.certificates} ${styles.eduction_break}`}
              >
                {/* get second component */}
                {/* <div className={styles.title}>EDUCATION</div> */}
                <div className={styles.back}>
                  <select
                    className={styles.title}
                    defaultValue={"SKILLS"}
                    onChange={(e) => {
                      settop2(e.target.value);
                    }}
                  >
                    <option
                      className={styles.check}
                      value="SKILLS"
                      name="SKILLS"
                    >
                      SKILLS
                    </option>
                    <option
                      className={styles.check}
                      value="LANGUAGES"
                      name="LANGUAGES"
                    >
                      LANGUAGES
                    </option>
                    <option
                      className={styles.check}
                      value="CERTIFICATION"
                      name="CERTIFICATION"
                    >
                      CERTIFICATION
                    </option>
                  </select>
                </div>
                <div className={styles.comp1}>
                  {top2 === "CERTIFICATION" ? (
                    certificateCat
                  ) : top2 === "SKILLS" ? (
                    skills
                  ) : top2 === "LANGUAGES" ? (
                    languages
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.subright}
            style={{ height: "max-content" }}
            ref={rightRef}
          >
            <div className={styles.identity}>
              <div
                className={styles.name}
                style={{
                  fontFamily: `${resume.fontFamily === ""
                    ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    : resume.fontFamily
                    }`,
                  height: { maxheight },
                }}
              >
                {resume.personalInformation.name.toUpperCase()}
              </div>
              <div
                className={styles.jobTitle}
                style={{
                  fontFamily: `${resume.fontFamily === ""
                    ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    : resume.fontFamily
                    }`,
                }}
              >
                {resume.personalInformation.jobTitle.toUpperCase()}
              </div>
            </div>
            <div className={styles.AboutSection}>
              <div className={styles.title}>PROFILE</div>
              <div className={styles.about}>
                {resume.personalInformation.about}
              </div>
            </div>
            <div
              className={`${styles.AboutSection} ${styles.experiences_break}`}
            >
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
                {experience}
              </div>
            </div>
            <div className={`${styles.experiences} ${styles.skills_break}`}>
              {/* component 4 */}
              {/* <div className={styles.title}>SKILLS</div> */}
              <div className={styles.back2}>
                <select
                  className={styles.title}
                  defaultValue={"CERTIFICATION"}
                  onChange={(e) => {
                    settop4(e.target.value);
                  }}
                >
                  <option
                    className={styles.check}
                    value="PROJECTS"
                    name="PROJECTS"
                  >
                    PROJECTS
                  </option>
                  <option
                    className={styles.check}
                    value="EDUCATION"
                    name="EDUCATION"
                  >
                    EDUCATION
                  </option>

                  <option
                    className={styles.check}
                    value="AWARDS"
                    name="AWARDS"
                  >
                    AWARDS
                  </option>

                  <option
                    className={styles.check}
                    value="CERTIFICATION"
                    name="CERTIFICATION"
                  >
                    CERTIFICATION
                  </option>
                  <option className={styles.check} value="SKILLS" name="SKILLS">
                    SKILLS
                  </option>
                </select>
              </div>

              <div className={styles.comp2}>
                {top4 === "EDUCATION" ? (
                  education
                ) : top4 === "SKILLS" ? (
                  skills
                  ) : top4 === "AWARDS" ? (
                    awards
                    ) : top4 === "CERTIFICATION" ? (
                      certificateCat
                ) : top4 === "PROJECTS" ? (
                  projects
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
};

        export default Design1;
