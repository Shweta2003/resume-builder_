import React, { useRef, useState } from "react";
import styles from "./Design2.module.css";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useOutletContext } from "react-router-dom";

const Design2 = () => {
  const resume = useSelector((state) => state.resume);
  const [opt2, setopt2] = useState("PROJECTS")
  const ref = useRef();
  const [resumeRef] = useOutletContext();
  const handleDownload = () => {
    const input = ref.current;

    const scale = window.devicePixelRatio || 1;



    html2canvas(input, {
      scale: scale,
      useCORS: true, // Enable CORS to load images from external sources
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Adjust the image quality (0.0 - 1.0)
      const pdf = new jsPDF("p", "mm", "a4");

      // Calculate the width and height based on the page size
      const pdfWidth = pdf.internal.pageSize.getWidth() + 10;
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Add the image to the PDF with the correct dimensions
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

      // Save the PDF with the desired filename
      pdf.save("download.pdf");
    });
  };

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
    <div className={styles.temp}>
      {(resume.skills.languages.length > 0) ? <span class="material-symbols-outlined icong">circle</span>
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
      {(resume.skills.frameworks.length > 0) ? <span class="material-symbols-outlined icong">circle</span>
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
      {(resume.skills.tools.length > 0) ? <span class="material-symbols-outlined icong">circle</span>
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
      {(resume.skills.databases.length > 0) ? <span class="material-symbols-outlined icong">circle</span>
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
      {(resume.skills.otherSkills.length > 0) ? <span class="material-symbols-outlined icong">circle</span>
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

  // awards component
  const awards = resume.additionalInformation.additionalInformationDetails.map((language, key) => {
    return (
      <div key={key} className={styles.award}>
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
      <div className={styles.resume} style={{fontFamily:`${(resume.fontFamily === "")? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}`}} ref={resumeRef}>
        <div className={styles.left} style={{fontFamily:`${(resume.fontFamily === "")? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}`}}>
          <div className={styles.contacts}>
            <div className={styles.title}>Contacts</div>
            <div className={styles.phone}>
              <span class="material-symbols-outlined icon">phone_in_talk</span>
              {resume.personalInformation.phone}
            </div>
            <div className={styles.phone}>
              <span class="material-symbols-outlined icon">drafts</span>
              {resume.personalInformation.email}
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
          <div className={styles.education}>
            <div className={styles.title}>Education</div>
            <div className={styles.part1}>
              {educationCat}
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
        <div className={styles.right} style={{fontFamily:`${(resume.fontFamily === "")? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : resume.fontFamily}`}}>
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
                      {experienceDetail.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.part2}>
            <select className={styles.title2} defaultValue={"PROJECTS"} onChange={(e) => { setopt2(e.target.value) }}>
              <option className={styles.check} value="PROJECTS" name="PROJECTS">Projects</option>
              <option className={styles.check} value="AWARDS" name="AWARDS">Awards</option>
            </select>

            <div className={styles.comp1}>
              {(opt2 === "PROJECTS") ? projects
                : (opt2 === "AWARDS") ? awards
                  : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
