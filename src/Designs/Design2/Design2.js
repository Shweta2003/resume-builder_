import Header from "../../components/Header/Header";
import styles from "./Design2.module.css";
import { useSelector } from "react-redux";

export const Design2 = () => {
  const resume = useSelector((state) => state.resume);
  const links = resume.personalInformation.links;
  // console.log(resume);
  // console.log(links);
  return (
    <div>
      <div className={styles.container}>{resume.personalInformation.name}</div>
      <div className={styles.container}>{resume.personalInformation.email}</div>
      <div className={styles.container}>{resume.personalInformation.phone}</div>
      <div>
        {links.map((link, key) => {
          return <div key={key}>{link.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Design2;
