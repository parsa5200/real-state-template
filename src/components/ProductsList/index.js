import { TitleComponents, ProductsMapItem } from "../../components";

import "./ProductsList.scss";
import { Link } from "react-router-dom";
const ProductsList = () => {
  const title = {
    text: "گالری املاک شاویلا",
    description: "جدیدترین آگهی‌های شما",
  };
  return (
    <section className="Products-list">
      <div className="container">
        <TitleComponents title={title.text} description={title.description} />
        <ProductsMapItem />
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
