import { Link } from "react-router-dom";
import "./VillaItem.scss";
const VillaItem = ({
  slug,
  image,
  description,
  price,
  propertyCode,
  propertyState,
  propertyCity,
  foundation,
  landSize,
  locationType,
  constructionYear,
  bedNumber,
  propertyType,
}) => {
  return (
    <div className="text-center col-lg-4 col-12 col-md-6 ">
      <div className="item" to={`/flat/${slug}`}>
        <Link className="item-image" to={`/flat/${slug}`}>
          <img src={image} alt="flat" />
          <div className="location-container">
            <span>{propertyCity}</span> - <span>{propertyState}</span>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="locationType-container">
            <span>{locationType}</span>
            <i className="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="share-button">
            <i className="fa-light fa-share-nodes"></i>
          </div>
          <div className="favorite-button">
            <i className="fa-light fa-bookmark"></i>
          </div>
        </Link>
        <div className="item-description">
          <Link className="item-title" to={`/flat/${slug}`}>
            {description}
          </Link>
          <div className="description-detail">
            <span className="item-price">
              <p className="me-2">تومان </p>
              {price}
            </span>
            <span className="propertyType">{propertyType}</span>
          </div>
          <div className="item-icon">
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{constructionYear}</Link> <span>: سال ساخت</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{bedNumber}</Link> <span>: خواب</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{landSize}m</Link> <span>: متراژ</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{foundation}m</Link> <span>: زیر بنا</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaItem;

{
  /* <Link className="" to={`/flat/${slug}`}>{propertyCode} <span>کد ملک</span></Link> */
}
