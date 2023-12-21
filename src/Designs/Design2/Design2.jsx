import React, { useRef } from "react";
import styles from "./Design2.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useOutletContext } from "react-router-dom";

const Design2 = () => {
  const resume = useSelector((state) => state.resume);
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

  return (
    <div className={styles.resume} ref={resumeRef}>
      <div className={styles.left}>
        <div className={styles.contacts}>
          <div className={styles.title}>Contacts</div>
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
        <div className={styles.education}>
          <div className={styles.title}>Education</div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {resume.education.educationDetails.map((educationDetail, key) => {
              return (
                <div key={key}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={styles.duration}>
                      {educationDetail.startDate} - {educationDetail.endDate}
                    </div>
                    {educationDetail.cgpa && (
                      <div className={styles.cgpa}>
                        CGPA : {educationDetail.cgpa}
                      </div>
                    )}
                  </div>
                  <div
                    style={{ display: "flex", gap: "1rem", fontWeight: "800" }}
                  >
                    <div className={styles.degree}>
                      {educationDetail.degree}
                    </div>
                    <div className={styles.course}>
                      {educationDetail.course}
                    </div>
                  </div>
                  <div className={styles.institute}>
                    {educationDetail.institution}
                  </div>
                </div>
              );
            })}
          </div>
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
        <div className={styles.certifications}>
          <div className={styles.title}>Certifications</div>
          {resume.certificates.certificatesDetails.map((certificateDetail) => (
            <div className={styles.certificatesDetails}>
              <a
                className={styles.certificateDetaillink}
                href={certificateDetail.link}
              >
                {certificateDetail.name}
              </a>
              <div className={styles.certificateDetailAuthority}>
                {certificateDetail.authority}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.languagesCom}>
          <div className={styles.title}>Languages</div>
          {resume.languages.languagesDetails.map((languageDetail) => (
            <div className={styles.languageDetail}>
              {languageDetail.language}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.personalInfo}>
          <div className={styles.name}>{resume.personalInformation.name}</div>
          <div className={styles.jobTitle}>
            {resume.personalInformation.jobTitle}
          </div>
          <div className={styles.aboutSection}>
            <div className={styles.about}>
              {resume.personalInformation.about}
            </div>
          </div>
        </div>
        <div className={styles.experiences}>
          <div className={styles.title}>Experience</div>
          {resume.experiences.experienceDetails.map((experienceDetail, key) => {
            return (
              <div className={styles.exp} key={key}>
                <div className={styles.expBorder}>
                  <div className={styles.circle}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.expDetail}>
                  <div className={styles.duration}>
                    {experienceDetail.duration}
                  </div>
                  <div className={styles.company}>
                    {experienceDetail.company}
                  </div>
                  <div className={styles.jobTitle}>
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
      </div>
    </div>
  );
};

export default Design2;
