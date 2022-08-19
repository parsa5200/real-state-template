import React from 'react';
import './ProSearch.scss'
import { dropDownData } from '../dropDownData';
import { CustomDropDown1, CustomInput1, CustomCheckBox1 } from '../../components'
const ProSearch = ({ className }) => {
    return (
        <section>
            <form className={`${className ? className : 'searchOptionContainer'}`} >
                <div className="row g-3 align-items-center flex-row-reverse">
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.State} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.city} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.Region} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.PropertyType} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.sellingType} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.locationType} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.landSize} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.foundation} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.propertyPosition} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.propertyBedRoom} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.propertyPrice} />
                    </div>
                    <div className="col-lg-3 ">
                        <CustomDropDown1 itemsList={dropDownData.propertyLifetime} />
                    </div>
                    <div className="col-lg-2">
                        <CustomInput1 placeHolder="کد ملک" />
                    </div>
                    <div className="col-lg-2">
                        <CustomCheckBox1 inputName="pool" title="استخردار" />
                    </div>
                    <div className="col-lg-2">
                        <CustomCheckBox1 inputName="furnished" title="مبله" />
                    </div>
                    <div className="col-lg-2">
                        <CustomCheckBox1 inputName="Penthouse" title="پنت هاوس" />
                    </div>
                    <div className="col-lg-2">
                        <CustomCheckBox1 inputName="quickSale" title="فروش فوری" />
                    </div>
                    <div className="col-lg-2">
                        <CustomCheckBox1 inputName="special" title="ویژه ها" />
                    </div>
                </div>
                <div className='mt-4 w-100'>
                    <button className="btn-search"><i className="fa fa-search" aria-hidden="true"></i> جستجو </button>
                </div>
            </form>
        </section>
    );
};

export default ProSearch;