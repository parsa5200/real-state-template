import { Link } from "react-router-dom";

const FlatItem = ({
    slug,
    image,
    description,
    price,
    propertyCode,
    location

}) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={image} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">{description}</span>
                        <span className="item-price">{price} میلیارد</span>
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                        <div>
                            <i class="fa-solid fa-location-dot"></i> <span>{location}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-qrcode"></i> <span>{propertyCode}</span>
                        </div>
                        <Link to={`/flat/${slug}`} className="item-title">
                            <button className="btn btn-detail">بیشتر</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatItem