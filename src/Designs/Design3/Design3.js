import style from "./Design3.module.css";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import address from "../../assets/address.svg";
import { useRef, useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { getAnswer } from "../Backend";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { usePDF } from "react-to-pdf";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import fontFamily from "../../assets/font-family.svg";
import fontSize from "../../assets/font-size.svg";
import Header from "../../components/Header/Header";

const Design3 = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pdfRef = useRef();
  const [img, setImg] = useState(null);
  const [fontSizeOption, setFontSizeOption] = useState("medium");
  const [fontStyleOption, setFontStyleOption] = useState("normal");
  const [contentEditable, setContentEditable] = useState(false);

  const fontSizeInput = {
    fontSize:
      fontSizeOption === "small"
        ? "12px"
        : fontSizeOption === "large"
        ? "24px"
        : "16px",
  };
  const fontSizeName = {
    fontSize:
      fontSizeOption === "small"
        ? "30px"
        : fontSizeOption === "large"
        ? "40px"
        : "35px",
  };
  const fontSizeHeading = {
    fontSize:
      fontSizeOption === "small"
        ? "12px"
        : fontSizeOption === "large"
        ? "24px"
        : "16px",
  };
  const fontStyleInput = {
    fontFamily:
      fontStyleOption === "Ubuntu"
        ? "Ubuntu"
        : fontStyleOption === "Nunito"
        ? "Nunito"
        : fontStyleOption === "Poppins"
        ? "Poppins"
        : fontStyleOption === "Raleway"
        ? "Raleway"
        : "Roboto",
  };

  const [data, setData] = useState({
    name: "SAMIRA HADID",
    title: "Graphic Designer",
    phone: "123-456-7890",
    address: "123 Anywhere St., Any City",
    email: "hello@reallygreatsite.com",
    education: "Education".toUpperCase(),
    educationDetails: [
      {
        year: "2014",
        college: "Borcelle University",
        degree: "Bachelor of Arts in Graphic Design",
      },
      {
        year: "2018",
        college: "Fradel and Spies Academy",
        degree: "Bachelor of Arts in Graphic Design",
      },
    ],
    skills: "SKILLS",
    skillsDetails: [
      {
        skill: "JavaScript",
      },
      {
        skill: "Css",
      },
      {
        skill: "React",
      },
      {
        skill: "Machine Learning",
      },
      {
        skill: "Python",
      },
    ],
    about:
      "As a computer science engineering student, I am passionate about solving complex problems through technology. I possess a strong foundation in programming and a drive to continuously learn and adapt in this ever-evolving field.",
    workExperience: "WORK EXPERIENCE",
    workExperiences: [
      {
        year: "2014-2016",
        company: "ABC Company",
        position: "Graphic Designer",
        description: "I am a software engineer ",
      },
      {
        year: "2014-2016",
        company: "ABC Company",
        position: "Graphic Designer",
        description: "I am a cab driver",
      },
    ],
  });

  const enhanceSection = async (key, inputState, index, maxTokens) => {
    const enhancedInput = await getAnswer(inputState, maxTokens);
    setProgress((prevProgress) =>
      prevProgress > 100 ? 0 : prevProgress + 33.33333333333333
    );
    console.log(progress);
    if (key === "about") {
      setData((prevData) => ({
        ...prevData,
        [key]: enhancedInput.evaluation,
      }));
    }
    if (key === "workExperiences") {
      const newWorkExperiences = [...data.workExperiences];
      newWorkExperiences[index].description = enhancedInput.evaluation;
      setData((prevData) => ({
        ...prevData,
        [key]: newWorkExperiences,
      }));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={style.container}>
      <Header
        pdfRef={pdfRef.current}
        setImg={setImg}
        setFontSizeOption={setFontSizeOption}
        fontSizeOption={fontSizeOption}
        setFontStyleOption={setFontStyleOption}
        fontStyleOption={fontStyleOption}
      />
      <div className={style.resume}>
        <div className={style.design} ref={pdfRef} style={fontStyleInput}>
          <div className={style.left}>
            <div className={style.name}>
              <input
                type="text"
                rows={2}
                name="title"
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, name: e.target.value.toUpperCase() })
                }
                style={{ ...fontSizeName, ...fontStyleInput }}
              />
            </div>
            <div className={style.title}>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                style={{ ...fontSizeHeading, ...fontStyleInput }}
              />
            </div>
            <div className={style.details}>
              <div className={style.phone}>
                <img src={phone} alt="" />
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  style={{ ...fontSizeInput, ...fontStyleInput }}
                />
              </div>
              <div className={style.email}>
                <img src={email} alt="" />
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  style={{ ...fontSizeInput, ...fontStyleInput }}
                />
              </div>
              <div className={style.address}>
                <img src={address} alt="" />
                <input
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={(e) => {
                    setData({ ...data, address: e.target.value });
                  }}
                  style={{ ...fontSizeInput, ...fontStyleInput }}
                />
              </div>
            </div>
            <div className={style.education}>
              <div className={style.educationHeading}>
                <input
                  type="text"
                  name="education"
                  value={data.education}
                  onChange={(e) =>
                    setData({
                      ...data,
                      education: e.target.value.toUpperCase(),
                    })
                  }
                  style={{ ...fontSizeHeading, ...fontStyleInput }}
                />
              </div>
              <div className={style.educationDetails}>
                {data.educationDetails.map((educationDetail, index) => (
                  <div key={index} className={style.educationDetail}>
                    <input
                      type="text"
                      name="educationDetails"
                      value={data.educationDetails[index].year}
                      onChange={(e) => {
                        const newEducationDetails = [...data.educationDetails];
                        newEducationDetails[index].year = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [educationDetail]: newEducationDetails,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <input
                      type="text"
                      name="educationDetails"
                      value={data.educationDetails[index].college}
                      onChange={(e) => {
                        const newEducationDetails = [...data.educationDetails];
                        newEducationDetails[index].college = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [educationDetail]: newEducationDetails,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <input
                      type="text"
                      name="educationDetails"
                      value={data.educationDetails[index].degree}
                      onChange={(e) => {
                        const newEducationDetails = [...data.educationDetails];
                        newEducationDetails[index].degree = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [educationDetail]: newEducationDetails,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={style.skills}>
              <div className={style.skillHeading}>
                <input
                  type="text"
                  name="skills"
                  value={data.skills}
                  onChange={(e) =>
                    setData({ ...data, skills: e.target.value.toUpperCase() })
                  }
                  style={{ ...fontSizeHeading, ...fontStyleInput }}
                />
              </div>
              <div className={style.skillDetails}>
                {data.skillsDetails.map((skill, index) => (
                  <div key={index} className={style.skill}>
                    <input
                      type="text"
                      name="skillsDetails"
                      value={data.skillsDetails[index].skill}
                      onChange={(e) => {
                        const newSkillDetails = [...data.skillsDetails];
                        newSkillDetails[index].skill = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [skill]: newSkillDetails,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <Box sx={{ width: 100 }}>
                      <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        size="small"
                        valueLabelDisplay="auto"
                        step={10}
                        min={0}
                        max={100}
                        sx={{ color: "grey", height: 4 }}
                      />
                    </Box>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={style.divider}>
            <div className={style.line}></div>
            <div className={style.circle}></div>
            <div className={style.line}></div>
            <div className={style.circle}></div>
            <div className={style.line}></div>
          </div>
          <div className={style.right}>
            {/* <div className={style.background}></div> */}
            <div className={style.picture}>
              {img ? (
                <div>
                  <img
                    src={img}
                    alt="Uploaded"
                    style={{
                      width: "10rem",
                      borderRadius: "50%",
                      height: "10rem",
                    }}
                  />
                </div>
              ) : (
                <img
                  src="https://media-public.canva.com/e4VII/MAEnbbe4VII/1/tl.jpg"
                  alt=""
                  style={{
                    width: "10rem",
                    borderRadius: "50%",
                    height: "10rem",
                  }}
                />
              )}
            </div>
            <div className={style.about}>
              {!contentEditable ? (
                <div
                  style={{
                    ...fontSizeInput,
                    ...fontStyleInput,
                    // width: "20rem",
                    // width: "15rem",
                  }}
                  onClick={() => {
                    setContentEditable(true);
                  }}
                >
                  {data.about}
                </div>
              ) : (
                <div
                  contentEditable={true}
                  type="text"
                  name="about"
                  value={data.about}
                  onChange={(e) => {
                    setData({ ...data, about: e.target.value });
                  }}
                  style={{
                    ...fontSizeInput,
                    ...fontStyleInput,
                    // width: "20rem",
                  }}
                >
                  {data.about}
                </div>
              )}
            </div>

            <div className={style.workExperiences}>
              <div className={style.workExperienceHeading}>
                <input
                  type="text"
                  name="workExperience"
                  value={data.workExperience}
                  onChange={(e) => setData({ ...data, about: e.target.value })}
                  style={{ ...fontSizeHeading, ...fontStyleInput }}
                />
              </div>
              <div className={style.workExperience} style={fontSizeInput}>
                {data.workExperiences.map((workExperience, index) => (
                  <div
                    key={index}
                    className={style.workExperienceDetails}
                    style={{ ...fontSizeInput, ...fontStyleInput }}
                  >
                    <input
                      type="text"
                      name="workExperiences"
                      value={data.workExperiences[index].year}
                      onChange={(e) => {
                        const newWorkExperiences = [...data.workExperiences];
                        newWorkExperiences[index].year = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [workExperience]: newWorkExperiences,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <input
                      type="text"
                      name="workExperiences"
                      value={data.workExperiences[index].company}
                      onChange={(e) => {
                        const newWorkExperiences = [...data.workExperiences];
                        newWorkExperiences[index].company = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [workExperience]: newWorkExperiences,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <input
                      type="text"
                      name="workExperiences"
                      value={data.workExperiences[index].position}
                      onChange={(e) => {
                        const newWorkExperiences = [...data.workExperiences];
                        newWorkExperiences[index].position = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [workExperience]: newWorkExperiences,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                    <textarea
                      type="text"
                      rows={5}
                      name="workExperiences"
                      value={data.workExperiences[index].description}
                      maxLength="420"
                      onChange={(e) => {
                        const newWorkExperiences = [...data.workExperiences];
                        newWorkExperiences[index].description = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          [workExperience]: newWorkExperiences,
                        }));
                      }}
                      style={{ ...fontSizeInput, ...fontStyleInput }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.enhanceButtons}>
          <div className={style.aboutEnhanceButton}>
            <button
              onClick={() => {
                enhanceSection("about", data.about, 0, 85);
              }}
            >
              Enhance
            </button>
          </div>
          <div className={style.workExperiencesEnhanceButtons}>
            <div className={style.workExperiencesEnhanceButton}>
              <button
                onClick={() => {
                  enhanceSection(
                    "workExperiences",
                    data.workExperiences[0].description,
                    0,
                    120
                  );
                }}
              >
                Enhance
              </button>
            </div>
            <div className={style.workExperiencesEnhanceButton}>
              <button
                onClick={(prevData) => {
                  enhanceSection(
                    "workExperiences",
                    data.workExperiences[1].description,
                    1,
                    120
                  );
                }}
              >
                Enhance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
