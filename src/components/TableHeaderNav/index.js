import React from "react";
import "./index.scss";
import { CustomDropDown2, CustomInput1 } from "../../components";
const TableHeaderNav = () => {
  return (
    <section id="tableHeader-container">
      <div className="headerDirection">
        <span>فیلترها</span>
        <span>اتحادیه-آژانس ها</span>
      </div>
      <div className="navContainer">
        <button>افزودن</button>
        <CustomDropDown2 icon="fa-solid fa-arrow-down-short-wide" />
        <CustomInput1 icon="fa-light fa-magnifying-glass" />
      </div>
    </section>
  );
};

export default TableHeaderNav;
