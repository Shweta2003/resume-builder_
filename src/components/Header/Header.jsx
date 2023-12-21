import React from "react";
import style from "./Header.module.css";
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
import { getAnswerForTailered } from "../../Designs/Backend";
import { useDispatch } from "react-redux";
import { addAbout } from "../../redux/reducers/resumeSlice";
import CloseIcon from "@mui/icons-material/Close";

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
    const enhancedAbout = await getAnswerForTailered(JD, 70, "about");
    dispatch(addAbout(enhancedAbout.evaluation));
    const enhancedExperience = await getAnswerForTailered(
      JD,
      100,
      "experience"
    );
  };

  const options = ["Roboto", "Ubuntu", "Nunito", "Poppins", "Raleway"];
  const templates = {
    Design1: Design1,
    Design2: Design2,
    Design3: Design3,
    Design4: Design4,
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
    <div className={style.header}>
      <div className={style.resume}>
        <Button
          onClick={handleOpenResumeModal}
          variant="contained"
          style={{ fontFamily: "kamra" }}
        >
          Select Resume
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
            width: "100vw",
          }}
        >
          <div className={style.modal} onClick={handleCloseResumeModal}>
            <div className={style.modalTitle}>Select Resume</div>
            <div className={style.modalContent}>
              {Object.keys(templates).map((template, key) => {
                return (
                  <div
                    key={key}
                    className={style.template}
                    onClick={() => {
                      navigate(
                        `/resume/design/${template.charAt(template.length - 1)}`
                      );
                    }}
                  >
                    <img
                      src={templates[template]}
                      alt=""
                      className={style.templateImage}
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
          onClick={() => setTailorOpen(true)}
          variant="contained"
          style={{ fontFamily: "kamra" }}
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
              className={style.textarea}
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
      <div className={style.buttons}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleUploadClick}
          style={{ fontFamily: "kamra" }}
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
              <Button variant="contained" style={{ fontFamily: "kamra" }}>
                Download Resume
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
