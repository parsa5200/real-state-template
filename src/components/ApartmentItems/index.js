import { Link } from "react-router-dom";
import "./ApartmentItems.scss";
const ApartmentItems = ({
  slug,
  image,
  description,
  price,
  propertyCode,
  propertyState,
  propertyCity,
  PricePerMeter,
  unitSize,
  locationType,
  unitFloor,
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
              <Link to={`/flat/${slug}`}>{unitSize}m</Link> <span>: متراژ</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{unitFloor}</Link> <span>: طبقه</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{bedNumber}</Link> <span>: خواب</span>
            </div>
            <div className="product-detail">
              <Link to={`/flat/${slug}`}>{PricePerMeter}m</Link> <span>: متری</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentItems;
