import React from "react";
import { Outlet } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <div style={{ display: "flex" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
