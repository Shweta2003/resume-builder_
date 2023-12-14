import React from "react";
import style from "./Certifications.module.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addCertificate,
  addOrUpdateCertificateAuthority,
  addOrUpdateCertificateLink,
  addOrUpdateCertificateName,
  deleteCertificate,
} from "../../../redux/reducers/resumeSlice";
import AddButton from "../../../utils/AddButton";

const Certifications = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const certificates = resume.certificates.certificatesDetails;

  const handleAddCertificate = () => {
    dispatch(
      addCertificate({ _id: uuidv4(), name: "", authority: "", link: "" })
    );
  };
  return (
    <div className={style.container}>
      <h5>Certifications</h5>
      {certificates?.map((certificate, key) => {
        return (
          <div key={key}>
            <input
              type="text"
              placeholder="Certificate Name"
              value={certificate.name}
              onChange={(e) => {
                dispatch(
                  addOrUpdateCertificateName({
                    _id: certificate._id,
                    name: e.target.value,
                  })
                );
              }}
            />
            <input
              type="text"
              placeholder="Certificate Authority"
              value={certificate.authority}
              onChange={(e) => {
                dispatch(
                  addOrUpdateCertificateAuthority({
                    _id: certificate._id,
                    authority: e.target.value,
                  })
                );
              }}
            />
            <input
              type="text"
              placeholder="Certificate Link"
              value={certificate.link}
              onChange={(e) => {
                dispatch(
                  addOrUpdateCertificateLink({
                    _id: certificate._id,
                    link: e.target.value,
                  })
                );
              }}
            />
            <button
              onClick={() => {
                dispatch(deleteCertificate({ _id: certificate._id }));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <AddButton field="CERTIFICATE" handleAdd={handleAddCertificate} />
    </div>
  );
};

export default Certifications;
