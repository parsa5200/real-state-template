import { Link } from "react-router-dom";
import "./LandItems.scss";
const LandItems = ({
  slug,
  image,
  description,
  price,
  propertyCode,
  propertyState,
  propertyCity,
  landSize,
  locationType,
  propertyType,
  documents,
  landUse,
  PricePerMeter,
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
            <div className="product-detail col">
              <Link to={`/flat/${slug}`}>{landSize}</Link> <div><span> متراژ</span></div>
            </div>
            <div className="product-detail col">
              <Link to={`/flat/${slug}`}>{documents}</Link>
              <div>
                <span> مدرک</span>
              </div>
            </div>
            <div className="product-detail col">
              <Link to={`/flat/${slug}`}>{landUse}</Link>{" "}
              <div>
                <span> کاربری</span>
              </div>
            </div>
            <div className="product-detail col">
              <Link to={`/flat/${slug}`}>{PricePerMeter}</Link> <div><span> متری</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandItems;

{
  /* <Link className="" to={`/flat/${slug}`}>{propertyCode} <span>کد ملک</span></Link> */
}
