import { useState, useEffect, useRef } from "react";
import "./index.scss";
import classNames from "classnames";
const CustomDropDown1 = ({ title, className, itemsList, onSelect, defaultValue, selected }) => {
  //flag to show dropdown menu
  // const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //list of dropdown items
  //reference /index to user selected element
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <section ref={menuRef} className={`${className ? className : "custom-dropDown-container"}`}>
      {/* dropdown */}
      <div
        className={"dd-selection " + (isOpen ? "visible" : "")}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        {!selected?.value ? defaultValue : selected.name}
      </div>
      <div className={classNames("dd-itemHolder", { "scale-up-ver-top": isOpen }, "dropDown")}>
        {itemsList.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              onSelect(item);
              setIsOpen(false);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomDropDown1;
