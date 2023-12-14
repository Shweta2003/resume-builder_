import React from "react";
import { Outlet } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { downloadPDF } from "./utils/downloadPdf";
import { usePDF } from "react-to-pdf";
import ReactToPrint from "react-to-print";

const Layout = () => {
  const resumeRef = React.useRef();
  // const { toPDF, targetRef: resumeRef } = usePDF({ filename: "page.pdf" });

  return (
    <>
      <Header resumeRef={resumeRef} />
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "5rem",
          padding: "1rem",
        }}
      >
        <Form />
        <Outlet context={[resumeRef]} />
      </div>
    </>
  );
};

export default Layout;
