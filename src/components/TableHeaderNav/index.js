import React from "react";
import "./index.scss";
import { SearchAndFilter, CustomDropDown2 } from "../../components";
const TableHeaderNav = () => {
  return (
    <section id="tableHeader-container">
      <div className="headerDirection">
        <span>فیلترها</span>
        <span>اتحادیه-آژانس ها</span>
      </div>
      <div className="desktopMood">
        <SearchAndFilter hasFilter hasSearch hasAddButton />
      </div>
      <div className="humbuggerButton">
        <CustomDropDown2 icon="fa-solid fa-align-justify">
          <SearchAndFilter hasFilter hasSearch hasAddButton />
        </CustomDropDown2>
      </div>
    </section>
  );
};

export default TableHeaderNav;
