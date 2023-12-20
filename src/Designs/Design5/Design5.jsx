import styles from "./Design5.module.css";
import { useSelector } from "react-redux";

const Design5 = () => {
  const resume = useSelector((state) => state.resume);
  return (
    <div className={styles.resume}>
      <div className={styles.personalInfo}>
        <div className={styles.name}>
          {resume.personalInformation.name.toUpperCase()}
        </div>
        <div className={styles.contacts}>
          <div className={styles.phoneEmail}>
            <div className={styles.phone}>
              {resume.personalInformation.phone}
            </div>
            <div className={styles.email}>
              {resume.personalInformation.email}
            </div>
          </div>
          <div className={styles.links}>
            {resume.personalInformation.links.map((link, key) => {
              return (
                <a href={link.url} key={key}>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.title}>OBJECTIVE</div>
        <div className={styles.description}>
          {resume.personalInformation.about}
        </div>
      </div>
    </div>
  );
};

export default Design5;
