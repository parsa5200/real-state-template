import React, { useState } from 'react';
import './Banner.scss'
import { CustomInput1, CustomDropDown1, Modal } from '../../components'
const Banner = () => {
    const [openModal, setOpenModal] = useState(false);

    const State = [
        {
            name: "همه استان ها",
            value: "superAgent",
        },
        {
            name: "Agent",
            value: "agent",
        },
        {
            name: "Driver",
            value: "driver",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]
    const city = [
        {
            name: "همه شهر ها",
            value: "superAgent",
        },
        {
            name: "Agent",
            value: "agent",
        },
        {
            name: "Driver",
            value: "driver",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]
    const Region = [
        {
            name: "همه مناطق",
            value: "superAgent",
        },
        {
            name: "Agent",
            value: "agent",
        },
        {
            name: "Driver",
            value: "driver",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]
    const PropertyType = [
        {
            name: "نوع ملک",
            value: "superAgent",
        },
        {
            name: "Agent",
            value: "agent",
        },
        {
            name: "Driver",
            value: "driver",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]
    const sellingType = [
        {
            name: "نوع فروش",
            value: "superAgent",
        },
        {
            name: "1.000.000.000",
            value: "agent",
        },
        {
            name: "Driver",
            value: "driver",
        },
        {
            name: "Admin",
            value: "admin",
        },
    ]
    return (
        <div className="banner">
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className="banner-area">
                                <p>با راهنمایی و پیشنهادهای تیم حرفه‌ای شاویلا </p>
                                <h2 className="banner-title"><strong> خانه رویایی خود را پیدا کنید</strong> </h2>
                                <div className="form-wrap">
                                    <form>
                                        <div className="row g-3 align-items-center flex-row-reverse">
                                            <div className="col-lg-2">
                                                <CustomDropDown1 className="dropDown-style" itemsList={State} />
                                            </div>
                                            <div className="col-lg-2">
                                                <CustomDropDown1 className="dropDown-style" itemsList={city} />
                                            </div>
                                            <div className="col-lg-2 ">
                                                <CustomDropDown1 className="dropDown-style" itemsList={PropertyType} />
                                            </div>
                                            <div className="col-lg-2 ">
                                                <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                            </div>
                                            <div className="col-lg-2">
                                                <button className="btn-search"><i className="fa fa-search" aria-hidden="true"></i> جستجو </button>
                                            </div>
                                            <div className="col-lg-2">
                                                <a onClick={() => setOpenModal((prev) => !prev)} className="btn-search-option"><i className="fa-light fa-filters"></i> جستجو پیشرفته </a>
                                                <Modal
                                                    open={openModal}
                                                    onClose={() => setOpenModal((prev) => !prev)}
                                                    className='modalContainer'
                                                >
                                                    <form className='searchOptionContainer'>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <CustomDropDown1 className="dropDown-style" itemsList={sellingType} />
                                                        </div>
                                                    </form>
                                                </Modal>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;