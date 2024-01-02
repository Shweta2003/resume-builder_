import React, { useRef, useState, useEffect } from "react";
import styles from "./Design2.module.css";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useOutletContext } from "react-router-dom";

const Design2 = () => {
  const resume = useSelector((state) => state.resume);
  const [opt2, setopt2] = useState("EDUCATION")
  const [opt1, setopt1] = useState("PROJECTS")
  const [resumeRef] = useOutletContext();
  const [maxheight, setheight] = useState(1120)

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleResize = (entries) => {
      if (resumeRef.current?.scrollHeight > resumeRef.current?.clientHeight) {
        setheight(maxheight + 1090)
      }
      else if (leftRef.current?.clientHeight < (maxheight - 1090) && rightRef.current?.clientHeight < (maxheight - 1090)) {
        setheight(maxheight - 1090)
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
      }
      else if (leftRef.current) {
        resizeObserverLeft.unobserve(leftRef.current)
      }
    };


  }, [resumeRef, maxheight, leftRef, rightRef]);
  // education component
  const educationCat = resume.education.educationDetails.map((educationDetail, key) => {
    return (
      <div className={styles.edu} key={key}>
        <div className={styles.edu_sub}>
          <div className={styles.duration}>
            {educationDetail.startDate} - {educationDetail.endDate}
          </div>

          {/* <div className={`${styles.course} ${styles.cgpa}`}>CGPA : {educationDetail.cgpa}</div> */}
          <div className={styles.ins}>
            {educationDetail.institution} | {educationDetail.degree}
          </div>
          <div className={styles.edu_sub}>
            <div className={styles.course}>{educationDetail.course}</div>
          </div>



        </div>
      </div>
    );
  })

  // skills component
  const skills = <>
    <div className={styles.languages}>
      {resume.skills.languages.map((language, key) => {
        return (
          <div style={{ display: "flex", width: "100%", wordWrap: "break-word", alignItems: "center", paddingLeft: "5px" }}>
            <li></li><div key={key} className={styles.language}>
              {language.language}{" "}
              {key === resume.skills.languages.length - 1 ? "" : " "}
            </div>
          </div>
        );
      })}
    </div>
  </>

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
    }
  )

    // projectLeft component
    const projectLeft = resume.projects.projectDetails.map(
      (item, key) => {
        return (
          <div key={key} className={styles.ceta}>
            <a
              className={styles.projectp} href={item.link}>
              {item.name}
            </a>
            <a
              className={styles.prop} href={item.github}>
              <GitHubIcon sx={{ height: "20px" }} style={{ marginTop: "5px", marginRight:"7px"}} /><span style={{wordWrap:"break-word", width:"87%"}}>{item.github}</span>
            </a>
            <div className={styles.procp}>{"( "}{item.technologies}{" )"}
            </div>
            <div className={styles.prodp}>
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

  // awardLeft component
  const awardLeft = resume.additionalInformation.additionalInformationDetails.map((language, key) => {
    return (
      <div key={key} className={styles.awardl}>
        <span class="material-symbols-outlined icon">bookmark
        </span>{language.award}{" "}
      </div>
    );
  })

  // certificates component
  const certificateCat = resume.certificates.certificatesDetails.map(
    (certificateDetail, key) => {
      return (
        <div key={key} className={styles.temp}>
          <span class="material-symbols-outlined icong">circle</span>
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


  return (
    <div className={styles.container}>
      <div className={styles.resume} style={{ fontFamily: `${(resume.fontFamily === "") ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}`, height: `${maxheight}px` }} ref={resumeRef}>
        <div className={styles.left} style={{ fontFamily: `${(resume.fontFamily === "") ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}` }}>
          <div className={styles.subleft} ref={leftRef} style={{ height: "max-content", width:"100%" }}>
            <div className={styles.contacts}>
              <div className={styles.title}>Contacts</div>
              <div className={styles.phone}>
                <span class="material-symbols-outlined icon">phone_in_talk</span>
                <span style={{width:"78%"}}>{resume.personalInformation.phone}</span>
              </div>
              <div className={styles.phone}>
                <span class="material-symbols-outlined icon">drafts</span>
                <span style={{width:"78%"}}>{resume.personalInformation.email}</span>
              </div>
              <div className={styles.links}>
                {resume.personalInformation.links.map((link) => (
                  <a href={link.url} target="_blank" className={styles.link}>
                    {link.name === "GitHub" ? (
                      <GitHubIcon sx={{ height: "30px" }} style={{ marginTop: "10px", marginRight: "20px" }} />
                    ) : link.name === "LinkedIn" ? (
                      <LinkedInIcon sx={{ height: "30px" }} style={{ marginTop: "10px", marginRight: "20px" }} />
                    ) : link.name === "Portfolio" ? (
                      <CoPresentIcon sx={{ height: "30px" }} style={{ marginTop: "10px", marginRight: "20px" }} />
                    ) : (
                      ""
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.sk}>
              <select className={styles.title3} defaultValue={"PROJECTS"} onChange={(e) => { setopt1(e.target.value) }}>
                <option className={styles.check} value="PROJECTS" name="PROJECTS">Projects</option>
                <option className={styles.check} value="AWARDS" name="AWARDS">Awards</option>
                <option className={styles.check} value="EDUCATION" name="EDUCATION">Education</option>
              </select>

              <div className={styles.comp1} style={{width:"100%"}}>
                {(opt1 === "PROJECTS") ? projectLeft
                :(opt1 === "EDUCATION")? educationCat
                  : (opt1 === "AWARDS") ? awardLeft
                    : <></>
                }
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.title}>Skills</div>
              <div className={styles.part1}>
                {skills}
              </div>
            </div>
            <div className={styles.certifications}>
              <div className={styles.title}>Certifications</div>
              <div className={styles.part1}>
                {certificateCat}
              </div>
            </div>
            <div className={styles.languagesCom}>
              <div className={styles.title}>Languages</div>
              <div className={styles.part1}>
                {resume.languages.languagesDetails.map((languageDetail) => (
                  <div className={styles.languageDetail}>
                    <span class="material-symbols-outlined icong">circle</span>{languageDetail.language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right} style={{ fontFamily: `${(resume.fontFamily === "") ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}` }}>
          <div className={styles.subright} style={{ height: "max-content", width:"100%" }} ref={rightRef}>
            <div className={styles.personalInfo}>
              <div className={styles.name}>{resume.personalInformation.name}</div>
              <div className={styles.jobTitle}>
                {resume.personalInformation.jobTitle}
              </div>
              <div className={styles.about}>
                {resume.personalInformation.about}
              </div>
            </div>
            <div className={styles.experiences}>
              <div className={styles.title} style={{ color: "#402b54" }}>Experience</div>
              {resume.experiences.experienceDetails.map((experienceDetail, key) => {
                return (
                  <div className={styles.exp} key={key}>
                    <span class="material-symbols-outlined iconl">circle</span>
                    <div className={styles.expDetail}>

                      <div className={styles.duration}>
                        {experienceDetail.duration}
                      </div>
                      <div className={styles.company}>
                        {experienceDetail.company}
                      </div>
                      <div className={styles.pos}>
                        {experienceDetail.jobTitle}
                      </div>

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
                  </div>
                );
              })}
            </div>

            <div className={styles.part2}>
              <select className={styles.title2} defaultValue={"EDUCATION"} onChange={(e) => { setopt2(e.target.value) }}>
                <option className={styles.check} value="PROJECTS" name="PROJECTS">Projects</option>
                <option className={styles.check} value="AWARDS" name="AWARDS">Awards</option>
                <option className={styles.check} value="EDUCATION" name="EDUCATION">Education</option>
              </select>

              <div className={styles.comp1}>
                {(opt2 === "PROJECTS") ? projects
                  : (opt2 === "AWARDS") ? awards
                  : (opt2 === "EDUCATION") ? educationCat
                    : <></>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
