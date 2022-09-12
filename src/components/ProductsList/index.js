import { TitleComponents, VillaMapItem, ApartmentMapItems, LandMapItems } from "../../components";
import "./ProductsList.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductsList = () => {
  const [toggleState, setToggleState] = useState("villa");
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const title = {
    text: "گالری املاک شاویلا",
    description: "جدیدترین آگهی‌های شما",
  };
  return (
    <section className="Products-list">
      <div className="container">
        <TitleComponents title={title.text} description={title.description} />

        <div className="properties-nav">
          <div className={toggleState === "villa" ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab("villa")}>
            ویلا
          </div>
          <div className={toggleState === "land" ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab("land")}>
            زمین
          </div>
          <div
            className={toggleState === "apartment" ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab("apartment")}
          >
            آپارتمان
          </div>
        </div>
        <div className="property-content ">
          <div className={toggleState === "villa" ? "content active-content" : "content"}>
            <VillaMapItem />
          </div>
          <div className={toggleState === "land" ? "content active-content" : "content"}>
            <LandMapItems />
          </div>
          <div className={toggleState === "apartment" ? "content  active-content" : "content"}>
            <ApartmentMapItems />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Link to="/productsList" className="btn-more">
            موارد بیشتر
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
