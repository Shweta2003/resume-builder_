import classes from "./Design5.module.css";
import { useSelector } from "react-redux";
import pic from '../../assets/Templates/mypic.png'
import { useState } from "react";

const Design5 = () => {
  const [value,setval] = useState(50)
  const [value1,setval1] = useState(50)
  const [value2,setval2] = useState(50)
  const [value3,setval3] = useState(50)
  const ChangeHandle = (e) => {
    setval(e.target.value)
  }
  const ChangeHandle2 = (e) => {
    setval2(e.target.value)
  }
  const ChangeHandle3 = (e) => {
    setval3(e.target.value)
  }
  const ChangeHandle1 = (e) => {
    setval1(e.target.value)
  }
  const resume = useSelector((state) => state.resume);
  console.log(resume)
  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <div className={classes.back}></div>
        <img src={pic} className={classes.pic} alt="" />
        <div className={classes.general}>
          <p className={classes.g1}>CONTACT</p>
          <p className={classes.c1}>
            <span class="material-symbols-outlined icon">contact_page</span>{resume.personalInformation.phone}</p>
          <p className={classes.c1}><span class="material-symbols-outlined icon">drafts</span>{resume.personalInformation.email}</p>
          <p className={classes.c1}><span class="material-symbols-outlined icon">computer</span>{(resume.personalInformation.links.length === 0)?"reallygreatsite.com" : resume.personalInformation.links[0].url}</p>
        </div>

        <div className={classes.pro}>
          <p className={classes.subh}>PROFESSIONAL SKILLS</p>

          <div className={classes.pen}>
            <label className={classes.label}>Analytical & problem solving skills</label>
            <input type="range" className={classes.input} min="0" max="100" defaultValue="50" onChange={(e) => ChangeHandle(e)}/>
            <p className={classes.p}>{value}%</p>
          </div>

          <div className={classes.pen}>
            <label className={classes.label}>Communication Team</label>
            <input type="range" min="0" className={classes.input} max="100" defaultValue="50" onChange={(e) => ChangeHandle1(e)}/>
            <p className={classes.p}>{value1}%</p>
          </div>

          <div className={classes.pen}>
            <label className={classes.label}>Ability to work in multiple projects</label>
            <input type="range" min="0" className={classes.input} max="100" defaultValue="50" onChange={(e) => ChangeHandle2(e)}/>
            <p className={classes.p}>{value2}%</p>
          </div>

          <div className={classes.pen}>
            <label className={classes.label}>Others</label>
            <input type="range" min="0" className={classes.input} max="100" defaultValue="50" onChange={(e) => ChangeHandle3(e)}/>
            <p className={classes.p}>{value3}%</p>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.name}>
          {resume.personalInformation.name}
        </h1>
        <p className={classes.job}>
          {resume.personalInformation.jobTitle}
        </p>
        <div className={classes.sub}>
          <p className={classes.subh}>
            ABOUT ME
          </p>
          <p className={classes.det}>
            {resume.personalInformation.about}
          </p>
        </div>

        <div className={classes.sub}>
          <p className={classes.subh}>
            EDUCATION
          </p>
          <p className={classes.det2}>
          {
              resume.education.educationDetails.map((e) => {
                return <div className={classes.exp}>
                  <p className={classes.cat1}>{e.institution} | {e.endDate}</p>
                  <p className={classes.cat2}>{e.course}</p>
                  <p className={classes.cat32}>CGPA : {e.cgpa}</p>
                </div>
              })
            }
          </p>
        </div>

        <div className={classes.sub}>
          <p className={classes.subh}>
            EXPERIENCES
          </p>
          <p className={classes.det}>
            {
              resume.experiences.experienceDetails.map((e) => {
                return <div className={classes.exp}>
                  <p className={classes.cat1}>{e.jobTitle} | {e.duration}</p>
                  <p className={classes.cat2}>{e.company}</p>
                  <p className={classes.cat3}>{e.description}</p>
                </div>
              })
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design5;
