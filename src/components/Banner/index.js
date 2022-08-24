import React, { useState } from "react";
import { dropDownData } from "../dropDownData";
import "./Banner.scss";
import { CustomDropDown1, Modal, ProSearch } from "../../components";
const Banner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalsValue, setModalsValue] = useState({
    province: null,
    city: null,
    propertyType: null,
    sailType: null,
  });

  return (
    <div className="banner">
      <div className="bg-custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="banner-area">
                <p>با راهنمایی و پیشنهادهای تیم حرفه‌ای شاویلا </p>
                <h2 className="banner-title">
                  <strong> خانه رویایی خود را پیدا کنید</strong>{" "}
                </h2>
                <div className="form-wrap">
                  <form>
                    <div className="row g-3 align-items-center flex-row-reverse">
                      <div className="col-lg-2">
                        <CustomDropDown1
                          selected={modalsValue.province}
                          defaultValue={"همه استان ها"}
                          itemsList={dropDownData.State}
                          onSelect={(item) => {
                            setModalsValue({ ...modalsValue, province: item });
                          }}
                        />
                      </div>
                      <div className="col-lg-2">
                        <CustomDropDown1
                          selected={modalsValue.city}
                          defaultValue={"همه شهر ها"}
                          itemsList={dropDownData.city}
                          onSelect={(item) => setModalsValue({ ...modalsValue, city: item })}
                        />
                      </div>
                      <div className="col-lg-2 ">
                        <CustomDropDown1
                          selected={modalsValue.propertyType}
                          defaultValue={"همه‌ی مناطق"}
                          itemsList={dropDownData.PropertyType}
                          onSelect={(item) => setModalsValue({ ...modalsValue, propertyType: item })}
                        />
                      </div>
                      <div className="col-lg-2 ">
                        <CustomDropDown1
                          selected={modalsValue.sailType}
                          defaultValue={"نوع فروش"}
                          itemsList={dropDownData.sellingType}
                          onSelect={(item) => setModalsValue({ ...modalsValue, sailType: item })}
                        />
                      </div>

                      <div className="col-lg-2">
                        <a onClick={() => setOpenModal((prev) => !prev)} className="btn-search-option">
                          <i className="fa-light fa-filters"></i> جستجو پیشرفته{" "}
                        </a>
                        <Modal open={openModal} onClose={() => setOpenModal((prev) => !prev)} className=" ">
                          <ProSearch className="searchOptionContainer" />
                        </Modal>
                      </div>
                      <div className="col-lg-2">
                        <button className="btn-search">
                          <i className="fa fa-search" aria-hidden="true"></i> جستجو{" "}
                        </button>
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
  );
};

export default Banner;
