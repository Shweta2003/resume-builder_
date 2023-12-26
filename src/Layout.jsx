import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { downloadPDF } from "./utils/downloadPdf";
import { usePDF } from "react-to-pdf";
import ReactToPrint from "react-to-print";

const Layout = () => {
  const resumeRef = React.useRef();
  const [imgUrl, setImgUrl] = useState("");
  // const { toPDF, targetRef: resumeRef } = usePDF({ filename: "page.pdf" });

  return (
    <>
      <Header resumeRef={resumeRef} setImgUrl={setImgUrl} />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems:"flex-start",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Form />
        <Outlet context={[resumeRef, imgUrl]} />
      </div>
    </>
  );
};

export default Layout;
