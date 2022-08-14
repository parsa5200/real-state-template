import { Link } from "react-router-dom";
import "./ProductList.scss"
const ProductItem = ({
    slug,
    image,
    description,
    price,
    propertyCode,
    location

}) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item" to={`/flat/${slug}`}>
                <Link className="item-image" to={`/flat/${slug}`}>
                    <img src={image} alt="flat" />
                </Link>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <Link className="item-title" to={`/flat/${slug}`}>{description}</Link>
                        <span className="item-price">{price} میلیارد</span>
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa-solid fa-location-dot"></i> <span>{location}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-qrcode"></i> <Link to={`/flat/${slug}`}>{propertyCode}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem; 