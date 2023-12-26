import React from "react";
import styles from "./Header.module.css";
import { useRef, useState } from "react";
import fontFamily from "../../assets/font-family.svg";
import fontSize from "../../assets/font-size.svg";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactToPrint from "react-to-print";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Design1 from "../../assets/Templates/1.png";
import Design2 from "../../assets/Templates/2.png";
import Design3 from "../../assets/Templates/3.png";
import Design4 from "../../assets/Templates/4.png";
import Design5 from "../../assets/Templates/5.png";
import Design6 from "../../assets/Templates/6.png";
import Design7 from "../../assets/Templates/7.png";
import Design8 from "../../assets/Templates/8.png";
import Design9 from "../../assets/Templates/9.png";
import Design10 from "../../assets/Templates/10.png";
import { getAnswerForTailered } from "../../Designs/Backend";
import { useDispatch } from "react-redux";
import { addAbout, addOrUpdateDescription, toggleIsSmart } from "../../redux/reducers/resumeSlice";
import { useSelector } from "react-redux";

const Header = ({

  
  resumeRef,
  setImgUrl,
  pdfRef,
  onDownload,
  setFontSizeOption,
  fontSizeOption,
  setFontStyleOption,
  fontStyleOption,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [fontFamilyMenuOpen, setFontFamilyMenuOpen] = useState(false);
  const [fontSizeMenuOpen, setFontSizeMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [tailorOpen, setTailorOpen] = React.useState(false);
  const [JD, setJD] = useState("");
  const handleOpenResumeModal = () => setOpen(true);
  const handleCloseResumeModal = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resume = useSelector((state) => state.resume);
  const isSmart = resume.isSmart;

  const handleClick = (event, menuType) => {
    setAnchorEl(event.currentTarget);
    if (menuType === "fontFamily") {
      setFontFamilyMenuOpen(true);
      setFontSizeMenuOpen(false);
    } else if (menuType === "fontSize") {
      setFontSizeMenuOpen(true);
      setFontFamilyMenuOpen(false);
    }
  };
  const handleClose = () => {
    setFontFamilyMenuOpen(false);
    setFontSizeMenuOpen(false);
    setAnchorEl(null);
  };
  const handleClickFontStyle = (e) => {
    setFontStyleOption(e.target.innerText);

    handleClose();
  };

  const enhanceSection = ["about", "experience", "skills"];

  const handleJD = async () => {
    setTailorOpen(false);
    const enhancedAbout = await getAnswerForTailered(JD,resume.personalInformation.about, 70, "profile");
    dispatch(addAbout(enhancedAbout.evaluation));

    console.log(resume)

    resume.experiences.experienceDetails.map(async(e) => {
      const enhancedExperience = await getAnswerForTailered(
          JD,
          e.description,
          100,
          "experience"
      );

      dispatch(
        addOrUpdateDescription({
          description: enhancedExperience.evaluation,
          _id: e._id,
        })
      );
    })
    // const enhancedExperience = await getAnswerForTailered(
    //   JD,
    //   100,
    //   "experience"
    // );
  };

  const options = ["Roboto", "Ubuntu", "Nunito", "Poppins", "Raleway"];
  const templates = {
    Design1: Design1,
    Design2: Design2,
    Design3: Design3,
    Design4: Design4,
    Design5: Design5,
    Design6: Design6,
    Design7: Design7,
    Design8: Design8,
    Design9: Design9,
    Design10: Design10,
  };

  const ITEM_HEIGHT = 48;

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgUrl(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
    console.log(fileInputRef);
  };

  return (
    <div className={styles.header}>
      <div className={styles.resume}>
        <Button
          onClick={handleOpenResumeModal}
          variant="contained"
          style={{
            background: "none",
  padding: "8px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  border: "1px solid rgba(194, 178, 178, 0.605)",
  marginLeft:"10px",
  marginRight:"600px",
  width:"max-content"
          }}
        ><span class="material-symbols-outlined icons">
        widgets
        </span>
          Select Template
        </Button>
        <Modal
          open={open}
          onClose={handleCloseResumeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            overflowY: "scroll",
            width: "100vw",
            overflowX: "hidden"
            
          }}
        >
          <div className={styles.modal} onClick={handleCloseResumeModal}>
            <div className={styles.modalTitle}>Select Template</div>
            <div className={styles.modalContent}>
              {Object.keys(templates).map((template, key) => {
                return (
                  <div
                    key={key}
                    className={styles.template}
                    onClick={() => {
                      navigate(
                        `/design/${template.charAt(template.length - 1)}`
                      );
                    }}
                  >
                    <img
                      src={templates[template]}
                      alt=""
                      className={styles.templateImage}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      </div>

      <div>
        <Button
          variant="contained"
          style={{
            background: "none",
  padding: "8px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  border: "1px solid rgba(194, 178, 178, 0.605)",
  marginRight: "20px",
  width:"max-content"
          }}
          onClick={() => dispatch(toggleIsSmart(!isSmart))}
        >
          Smart Resume
        </Button>
      </div>

      <div>
        <Button
          onClick={() => setTailorOpen(true)}
          variant="contained"
          style={{
            background: "none",
  padding: "8px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  border: "1px solid rgba(194, 178, 178, 0.605)",
  marginRight: "20px",
  width:"max-content"
          }}
        >
          Tailored Resume
        </Button>
        <Modal
          open={tailorOpen}
          onClose={() => setTailorOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea
              placeholder="Enter Job Description here only after you have filled all the details in the form"
              className={styles.textarea}
              onChange={(e) => setJD(e.target.value)}
            />
            <Button
              disabled={!JD}
              variant="contained"
              onClick={handleJD}
              style={{ fontFamily: "kamra" }}
              sx={{ width: "100%" }}
            >
              Done
            </Button>
          </div>
        </Modal>
      </div>
      {/* <div className={style.iconContainer}>
        <Tooltip title="Font Family" placement="bottom">
          <img
            src={fontFamily}
            alt=""
            className={style.icon}
            onClick={(e) => handleClick(e, "fontFamily")}
          />
        </Tooltip>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={fontFamilyMenuOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
          //   value={fontStyleOption}
          //   onChange={(e) => setFontStyleOption(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === fontStyleOption}
              onClick={handleClickFontStyle}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Tooltip title="Font Size" placement="bottom">
          <img
            src={fontSize}
            alt=""
            className={style.icon}
            onClick={(e) => handleClick(e, "fontSize")}
          />
        </Tooltip>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={fontSizeMenuOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <RadioGroup
            defaultValue="small"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            value={fontSizeOption}
            onChange={(e) => setFontSizeOption(e.target.value)}
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1rem",
            }}
          >
            <FormControlLabel
              value="small"
              control={<BpRadio />}
              label="Small"
              onClick={handleClose}
            />
            <FormControlLabel
              value="medium"
              control={<BpRadio />}
              label="Medium"
              onClick={handleClose}
            />
            <FormControlLabel
              value="large"
              control={<BpRadio />}
              label="Large"
              onClick={handleClose}
            />
          </RadioGroup>
        </Menu>
      </div> */}
      <div className={styles.buttons}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleUploadClick}
          className={styles.upload}
          style={{
            background: "none",
  padding: "8px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  border: "1px solid rgba(194, 178, 178, 0.605)",
  marginRight: "35px",
  width:"max-content"
          }}
        >
          Upload photo
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <ReactToPrint
          trigger={() => {
            return (
              <Button style={{
                right: "15px",
                backgroundColor: "#5d25e7",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }} 
              variant="contained"
>
                <span class="material-symbols-outlined icons">download</span>Download
              </Button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
    </div>
  );
};

export default Header;
