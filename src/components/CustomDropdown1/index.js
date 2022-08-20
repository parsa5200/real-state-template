import { useState, useEffect, useRef } from "react";
import "./index.scss";
import classNames from "classnames";
const CustomDropDown1 = ({ title, className, itemsList,  onSelect, defaultValue, selected }) => {
  console.log({ defaultValue, selected });
  //flag to show dropdown menu
  // const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //list of dropdown items
  //reference /index to user selected element
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      console.log({ menuRef });
      if (!menuRef.current.contains(e.target)) {
        console.warn("salam");
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
        {!selected?.value ? defaultValue : selected.value}
      </div>
      <div className={classNames("dd-itemHolder", { "scale-up-ver-top": isOpen })}>
        {itemsList.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              onSelect(item);
              setIsOpen(false);
              // onClose();
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
