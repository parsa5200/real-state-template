import React from "react";
import { CustomDropDown2, CustomInput1 } from "../../components";
import "./index.scss";
const SearchAndFilter = ({ hasAddButton, hasFilter, hasSearch }) => {
  return (
    <section id="search-and-filter-container">
      <div className="nav-buttons-container" >
        {hasAddButton && <button>افزودن</button>}
        {hasFilter && <CustomDropDown2 icon="fa-solid fa-arrow-down-short-wide"></CustomDropDown2>}
        {hasSearch && <CustomInput1 icon="fa-light fa-magnifying-glass" />}
      </div>
    </section>
  );
};

export default SearchAndFilter;
