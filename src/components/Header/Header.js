import React from "react";
import style from "./Header.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import fontFamily from "../../assets/font-family.svg";
import fontSize from "../../assets/font-size.svg";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Design3 from "../../Designs/Design3/Design3";
import { PDFDocument, rgb } from "pdf-lib";
import Design5 from "../../Designs/Design5/Design5";
import ReactToPrint from "react-to-print";

const Header = ({
  resumeRef,
  setImg,
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

  const options = ["Roboto", "Ubuntu", "Nunito", "Poppins", "Raleway"];

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
      setImg(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // const downloadPDF = () => {
  //   const input = pdfRef;

  //   const scale = window.devicePixelRatio || 1;

  //   html2canvas(input, {
  //     scale: scale,
  //     useCORS: true, // Enable CORS to load images from external sources
  //     scrollY: -window.scrollY,
  //     windowWidth: document.documentElement.offsetWidth,
  //     windowHeight: document.documentElement.offsetHeight,
  //   }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/jpeg", 1.0); // Adjust the image quality (0.0 - 1.0)
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     // Calculate the width and height based on the page size
  //     const pdfWidth = pdf.internal.pageSize.getWidth() + 10;
  //     const pdfHeight = pdf.internal.pageSize.getHeight();

  //     // Add the image to the PDF with the correct dimensions
  //     pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

  //     // Save the PDF with the desired filename
  //     pdf.save("download.pdf");
  //   });
  // };

  return (
    <div className={style.header}>
      <div style={{ width: "15rem" }}></div>
      <div className={style.iconContainer}>
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
      </div>
      <div className={style.buttons}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleUploadClick}
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
            return <Button variant="contained">Download Resume</Button>;
          }}
          content={() => resumeRef.current}
        />
      </div>
    </div>
  );
};

export default Header;
