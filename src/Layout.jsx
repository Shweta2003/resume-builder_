import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

const Layout = () => {
  const resumeRef = React.useRef();
  const [imgUrl, setImgUrl] = useState("");
  const [isSmart, setIsSmart] = useState(false);

  return (
    <>
      <Header resumeRef={resumeRef} setImgUrl={setImgUrl} />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          gap: "5rem",
          padding: "1rem",
          justifyContent: "center",
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
