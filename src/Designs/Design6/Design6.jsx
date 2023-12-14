import React, { useRef } from "react";
import styles from "./Design6.module.css";
import { useSelector } from "react-redux";
import PhotoIcon from "../../assets/phone.svg";
import EmailIcon from "../../assets/email.svg";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import PortfolioIcon from "../../assets/portfolio.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useOutletContext } from "react-router-dom";

const Design6 = () => {
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
    <div className={styles.container}>
      <div className={styles.resume} ref={resumeRef}>
        <div className={styles.left}>
          <div className={styles.contacts}>
            <div className={styles.title}>Contacts</div>
            <div className={styles.phone}>
              <img src={PhotoIcon} alt="phone" className={styles.icon} />
              {resume.personalInformation.phone}
            </div>
            <div className={styles.email}>
              <img src={EmailIcon} alt="email" className={styles.icon} />
              {resume.personalInformation.email}
            </div>
            <div className={styles.links}>
              {resume.personalInformation.links.map((link) => (
                <div
                  className={styles.link}
                  onClick={() => window.open(link.url, "_blank")}
                  style={{ color: link.color, cursor: "pointer" }}
                >
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
                    alt=""
                  />
                  {link.name}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.title}>Education</div>
            {resume.education.educationDetails.map((educationDetail, key) => {
              return (
                <div key={key}>
                  <div className={styles.institute}>
                    {educationDetail.institution}
                  </div>
                  <div className={styles.degree}>{educationDetail.degree}</div>
                  <div className={styles.course}>{educationDetail.course}</div>
                  <div className={styles.duration}>
                    {educationDetail.startDate} - {educationDetail.endDate}
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
                    {language.language}
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
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.certifications}>
            <div className={styles.title}>Certifications</div>
            {resume.certificates.certificatesDetails.map(
              (certificateDetail) => (
                <div className={styles.certificatesDetails}>
                  <div className={styles.certificateDetailTitle}>
                    {certificateDetail.name}
                  </div>
                  <div className={styles.certificateDetailAuthority}>
                    {certificateDetail.authority}
                  </div>
                  <div className={styles.certificateDetaillink}>
                    {certificateDetail.link}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.personalInfo}>
            <div className={styles.name}>{resume.personalInformation.name}</div>
            <div className={styles.jobTitle}>
              {resume.personalInformation.jobTitle}
            </div>
          </div>
          <div className={styles.personalInfo}></div>
          <div className={styles.experience}>
            <div className={styles.title}>Experience</div>
            {resume.experiences.experienceDetails.map(
              (experienceDetail, key) => {
                return (
                  <div key={key}>
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
  );
};

export default Design6;
