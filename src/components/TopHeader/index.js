import React, { useState } from "react";
import styles from "./TopHeader.module.scss";
import { Link } from "react-router-dom";
import { Modal } from "../../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirstRegister, LoginStep, RegisterVerify, SecondRegister } from "../Register";
const TopHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const [singUpSteps, setSingUpSteps] = useState(1);

  const RenderSignUpBody = () => {
    switch (singUpSteps) {
      case 1:
        return <FirstRegister nextStep={() => setSingUpSteps(2)} />;
      case 2:
        return <SecondRegister nextStep={() => setSingUpSteps(4)} prevStep={() => setSingUpSteps(1)} />;
      case 3:
        return <LoginStep nextStep={() => setSingUpSteps(4)} prevStep={() => setSingUpSteps(1)} />;
      case 4:
        return <RegisterVerify prevStep={() => setSingUpSteps(1)} />;
      default:
        return <FirstRegister prevStep={() => console.log("prev")} />;
    }
  };

  return (
    <div className={styles.headerIconContainer}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.buttonContainer}>
          <a onClick={() => setOpenModal((prev) => !prev)} className={styles.registerButton} to="/">
            ورود / ثبت نام
          </a>
          <Link className={styles.addButton} to="/">
            ثبت آگهی
          </Link>
          <Modal open={openModal} onClose={() => setOpenModal(!openModal)} className={styles.modalContainer}>
            <RenderSignUpBody />
          </Modal>
        </div>

        <Link className={styles.navbarBrand} to="/">
          <span>شاویلا</span>
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TopHeader;
