import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import style from "./Design4.module.css";

const Design4 = () => {
  const pdfRef = useRef();
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.resume} ref={pdfRef}>
          <div className={style.left}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maiores recusandae quos?
          </div>
          <div className={style.right}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aperiam maiores illum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Design4;
