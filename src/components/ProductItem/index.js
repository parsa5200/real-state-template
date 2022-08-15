import { Link } from "react-router-dom";
import "./ProductItem.scss"
const ProductItem = ({
    slug,
    image,
    description,
    price,
    propertyCode,
    location,
    foundation,
    landSize,
    locationType
}) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item" to={`/flat/${slug}`}>
                <Link className="item-image" to={`/flat/${slug}`}>
                    <img src={image} alt="flat" />
                    <div className="location-container">
                        <span>{location}</span> <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="share-button">
                        <i className="fa-light fa-share-nodes"></i>
                    </div>
                    <div className="favorite-button">
                        <i className="fa-light fa-bookmark"></i>
                    </div>
                </Link>
                <div className="item-description">
                    <Link className="item-title" to={`/flat/${slug}`}>{description}</Link>
                    <span className="item-price">تومان {price}</span>
                    <div className="item-icon">

                        <div className="product-detail">
                            <Link to={`/flat/${slug}`}>{propertyCode}</Link>   <i className="fa-light fa-qrcode"></i>
                        </div>
                        <div className="product-detail">
                            <Link to={`/flat/${slug}`}>{locationType}</Link>   <i className="fa-light fa-map-location-dot"></i>
                        </div>
                        <div className="product-detail">
                            <Link to={`/flat/${slug}`}>{landSize}</Link>    <i className="fa-light fa-earth-asia"></i>
                        </div>
                        <div className="product-detail">
                            <Link to={`/flat/${slug}`}>{foundation}</Link>  <i className="fa-light fa-house-building"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem; 