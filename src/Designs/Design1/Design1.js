import React from "react";
import styles from "./Design1.module.css";
import { PDFDocument, rgb } from "pdf-lib";

const Design1 = () => {
  const handleDownloadResume = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Add content to the PDF page
    const { width, height } = page.getSize();
    page.drawText("Your Resume Content Goes Here", {
      x: 50,
      y: height - 100,
      color: rgb(0, 0, 0),
    });

    // Save the PDF as a Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Convert the Uint8Array to a Blob
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a download link and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" />
      <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
  );
};

export default Design1;
