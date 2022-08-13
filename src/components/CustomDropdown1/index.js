import { useState, useEffect, useRef } from "react";
import "./index.scss";
import classNames from "classnames";
const CustomDropDown1 = ({ title, className, itemsList }) => {
  //flag to show dropdown menu
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //list of dropdown items
  //reference /index to user selected element
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const menuRef = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropDownVisible(false)
      }
    })
  }, [])


  return (
    <section className={`${className ? className : "custom-dropDown-container"}`}>

      {/* dropdown */}
      <div
       
        className={"dd-selection " + (isDropDownVisible ? "visible" : "")}
        onClick={(e) => {
          setIsDropDownVisible(!isDropDownVisible);
        }}
      >
        {selectedItemIndex !== null
          ? itemsList[selectedItemIndex].name
          : "please select item ..."}
      </div>
      <div  ref={menuRef} className={classNames("dd-itemHolder", { "scale-up-ver-top": isDropDownVisible })}>
        {itemsList.map((item, index) => (
          <div
            key={item.value}
            onClick={() => {
              setSelectedItemIndex(index);
              setIsDropDownVisible(false);
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
// {isDropDownVisible ? (
//   <div className="dd-itemHolder">
//     {itemsList.map((item, index) => (
//       <div
//         key={item.value}
//         onClick={() => {
//           setSelectedItemIndex(index);
//           setIsDropDownVisible(false);
//         }}
//       >
//         {item.name}
//       </div>
//     ))}
//   </div>
// ) : (
//   <></>
// )}