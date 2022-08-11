import { Link } from "react-router-dom"
const BestFlatItem = ({ flatState }) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                    <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">فروش زمین دو بر در رامسر</Link></h4>
                    <span className="best-estate-price">1.000.000.000 تومان</span>
                    <span>فروش ویلای 380متری 2طبقه با 3خواب و 500 متر زمین</span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <span> 44625</span>
                            <i class="fa-solid fa-qrcode ms-1"></i>
                        </div>
                        <div className="best-estate-feature">
                            <span>مازندران-رامسر</span>
                            <i class="fa-solid fa-location-dot ms-1"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestFlatItem