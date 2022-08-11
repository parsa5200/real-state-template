import React, { useState } from 'react';
import { Modal } from "../components"
import { Link } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FirstRegister, SecondRegister, LoginStep, RegisterVerify } from "../components/Register"
const HeaderIcon = () => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className='icon-header'>
            <div className='container'>
                <div className='navbar'>
                    <div className='container-fluid'>
                        <div className='d-flex'>
                            <Link className="add-button" to="/AddProperty">ثبت آگهی</Link>
                            <a onClick={() => setOpenModal((prev) => !prev)} className="button-hover" to="/">ورود یا ثبت‌ نام</a>
                            {/* <Modal
                                open={openModal}
                                onClose={() => setOpenModal((prev) => !prev)}
                                className="modalStyle"
                            > */}
                                {/* <FirstRegister /> */}
                                {/* <SecondRegister /> */}
                                {/* <LoginStep /> */}
                                {/* <RegisterVerify />
                            </Modal> */}
                        </div>
                        <div className='wrapper'>
                            <a className='hover-fx'><i className="fa-brands fa-instagram"></i></a>
                            <a className='hover-fx'><i className="fa-brands fa-whatsapp"></i></a>
                            <a className='hover-fx'><i className="fa-brands fa-facebook"></i></a>
                            <a className='hover-fx'><i className="fa-brands fa-github"></i></a>
                        </div>
                        <Link className="navbar-brand" to="/">
                            <div className="logo-style">
                                <span className="ms-2">
                                    شاویلا
                                </span>
                                <i className="fas fa-home"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default HeaderIcon;