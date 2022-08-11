import React from 'react';

import { CustomInput1, CustomDropDown1 } from "../components"

import banner from "../images/product1.jpeg"
const Banner = () => {
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
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>با راهنمایی و پیشنهادهای تیم حرفه‌ای شاویلا </p>
                                <h2 className="mt-2 mb-4 banner-title"><strong> خانه رویایی خود را پیدا کنید</strong> </h2>
                                <div className="form-wrap">
                                    <form>
                                        <div className="row g-3 align-items-center flex-row-reverse">
                                            <div className="col-lg-3">
                                                <CustomDropDown1 className="dropDown-style" itemsList={State}/>
                                            </div>
                                            <div className="col-lg-3">
                                                <CustomDropDown1 className="dropDown-style" itemsList={city} />
                                            </div>
                                            <div className="col-lg-3">
                                                <CustomDropDown1 className="dropDown-style" itemsList={Region} />
                                            </div>
                                            <div className="col-lg-3 end_date">
                                                <CustomDropDown1 className="dropDown-style" itemsList={PropertyType} />
                                            </div>
                                            <div className="col-lg-2 economy">
                                                <CustomInput1 className="price-input" placeHolder="کد ملک" />
                                            </div>
                                            <div className="col-lg-2 economy">
                                                <CustomInput1 className="price-input" placeHolder="کد ملک" />
                                            </div>
                                            <div className="col-lg-3">
                                                <CustomInput1 className="price-input" placeHolder="قیمت از" />
                                            </div>
                                            <div className="col-lg-3">
                                                <CustomInput1 className="price-input" placeHolder="قیمت تا" />
                                            </div>
                                            <div className="col-lg-2">
                                                <button className="btn-search"><i className="fa fa-search" aria-hidden="true"></i> جستجو </button>
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