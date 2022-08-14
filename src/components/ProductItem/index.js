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
                </Link>
                <div className="item-description">
                    <Link className="item-title" to={`/flat/${slug}`}>{description}</Link>
                    <span className="item-price">تومان {price}</span>
                    <div className="item-icon">
                        {/* <div>
                            <i class="fa-solid fa-location-dot"></i> <span>{location}</span>
                        </div> */}
                        <div className="product-detail">
                            <i className="fa-light fa-qrcode"></i> <Link to={`/flat/${slug}`}>{propertyCode}</Link>
                        </div>
                        <div className="product-detail">
                            <i className="fa-light fa-map-location-dot"></i> <Link to={`/flat/${slug}`}>{locationType}</Link>
                        </div>
                        <div className="product-detail">
                            <i className="fa-light fa-house-building"></i> <Link to={`/flat/${slug}`}>{foundation}</Link>
                        </div>
                        <div className="product-detail">
                            <i className="fa-light fa-earth-asia"></i> <Link to={`/flat/${slug}`}>{landSize}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem; 