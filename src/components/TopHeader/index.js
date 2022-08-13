import React, { useState } from 'react';
import styles from './TopHeader.module.scss'
import { Link } from 'react-router-dom';
import { Modal, } from "..";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirstRegister, LoginStep, RegisterVerify, SecondRegister } from "../Register";
const TopHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={styles.headerIconContainer}>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className={styles.buttonContainer}>
                    <a onClick={() => setOpenModal((prev) => !prev)} className={styles.registerButton} to="/">ورود / ثبت نام</a>
                    <Link className={styles.addButton} to="/">ثبت آگهی</Link>
                    <Modal
                        open={openModal}
                        onClose={() => setOpenModal((prev) => !prev)}
                        className={styles.modalContainer}>
                        {/* <FirstRegister /> */}
                        {/* <SecondRegister /> */}
                        {/* <LoginStep /> */}
                        <RegisterVerify />
                    </Modal>
                </div>
               
                <Link className={styles.navbarBrand} to="/">
                    <span>
                        شاویلا
                    </span>
                    <i className="fas fa-home"></i>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TopHeader;