import React from "react";
import "./ShowProperty.scss";
import { SwiperImages } from "../../components";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
const ShowProperty = () => {
 
  return (
    <div className="property-detail">
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top">
              <div className="text-end">
                <h3 className="flat-detail-title">فروش ویلای استخردار لوکس در رامسر</h3>
                <span className="fd-price">قیمت :1.000.000.000 تومان</span>
              </div>
              <div className="text-start">
                <p className="fd-address">
                  مازندران - رامسر <i className="fa-light fa-location-dot"></i>
                </p>
                <span className="fd-address">
                  کد ملک : 44262 <i className="fa-light fa-qrcode"></i>
                </span>
              </div>
            </div>
            <SwiperImages />
  
            <div className="row flex-row-reverse">
              <div className="col-lg-8">
                <div className="fd-item fd-property-detail">
                  <h4>مشخصات ملک</h4>
                  <div className="row flex-row-reverse">
                    <div className="col-lg-4">
                      <span>مساحت زمین: </span>
                      <span>320 متر</span>
                      <span>
                        <i className="fa-light fa-earth-asia ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>مساحت بنا: </span>
                      <span>200 متر</span>
                      <span>
                        <i className="fa-light fa-house ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>تعداد طبقات: </span>
                      <span>2</span>
                      <span>
                        <i className="fa-light fa-stairs ms-1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="row flex-row-reverse">
                    <div className="col-lg-4">
                      <span>تعداد خواب : </span>
                      <span>3</span>
                      <span>
                        <i className="fa-light fa-bed ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>انشعابات: </span>
                      <span>آب-برق-گاز</span>
                      <span>
                        <i className="fa-light fa-code-fork ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>نوع ملک: </span>
                      <span>شهری</span>
                      <span>
                        <i className="fa-light fa-font-awesome ms-1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="row flex-row-reverse">
                    <div className="col-lg-4">
                      <span>نوع معامله: </span>
                      <span>فروش</span>
                      <span>
                        <i className="fa-light fa-file-contract ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>نوع سند: </span>
                      <span>شش دانگ</span>
                      <span>
                        <i className="fa-light fa-file ms-1"></i>
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <span>چشم‌انداز: </span>
                      <span>کوه - دریا</span>
                      <span>
                        <i className="fa-light fa-binoculars ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="fd-item fd-features">
                  <h4>سایر امکانات</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>پارکینگ مسقف</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>کولر اسپلیت</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>پکیج دیواری</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>سیستم هوشمند</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>جکوزی</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>دزدگیر و دوربین</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>روف گاردن</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>آب نما</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                    <div className="col-lg-4">
                      <span>انباری</span>
                      <i className="fa fa-check ms-1"></i>
                    </div>
                  </div>
                </div>
                <div className="fd-item">
                  <h4>توضیحات</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                    گیرد.
                  </p>
                </div>
                <div className="fd-item">
                  <h4>Maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>پروفایل فروشنده</h4>
                  <div className="profileContainer">
                    <img src="/img/profile.png" />
                    <span className="profileText">
                      مهندس جعفر جعفریان <i className="fa-light fa-user"></i>
                    </span>
                    <span className="profilePhoneNumber">
                      09381655200 <i className="fa-solid fa-phone-flip"></i>
                    </span>
                  </div>
                </div>

                <div className="fd-sidebar-item">
                  <h4>موارد پیشنهادی</h4>
                  <div className="recently-item">
                    <Link className="imageContainer" to="/">
                      <img src="/img/product1.jpeg" alt="detail" />

                      <div className="hiddenContainer ">
                        <span className="recently-title">فروش ویلا 400متری در رامسر</span>
                        <span className="recently-price">10.000.000.000 تومان</span>
                      </div>
                    </Link>
                    <div className="property-detail">
                      <div className="product-detail">
                        <Link to="/">1387</Link> <i className="fas fa-digging"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">4</Link> <i className="fas fa-bed-alt"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">2345m</Link> <i className="fas fa-globe-asia"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">125m</Link> <i className="fas fa-home-lg"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">شهری</Link> <i className="fa-solid fa-map-location-dot ms-1"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">گیلان-رشت</Link>
                        <i className="fa-solid fa-location-dot ms-1"></i>
                      </div>
                    </div>
                  </div>
                  <div className="recently-item">
                    <Link className="imageContainer" to="/">
                      <img src="/img/product1.jpeg" alt="detail" />

                      <div className="hiddenContainer ">
                        <span className="recently-title">فروش ویلا 400متری در رامسر</span>
                        <span className="recently-price">10.000.000.000 تومان</span>
                      </div>
                    </Link>
                    <div className="property-detail">
                      <div className="product-detail">
                        <Link to="/">1387</Link> <i className="fas fa-digging"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">4</Link> <i className="fas fa-bed-alt"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">2345m</Link> <i className="fas fa-globe-asia"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">125m</Link> <i className="fas fa-home-lg"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">شهری</Link> <i className="fa-solid fa-map-location-dot ms-1"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">گیلان-رشت</Link>
                        <i className="fa-solid fa-location-dot ms-1"></i>
                      </div>
                    </div>
                  </div>
                  <div className="recently-item">
                    <Link className="imageContainer" to="/">
                      <img src="/img/product1.jpeg" alt="detail" />

                      <div className="hiddenContainer ">
                        <span className="recently-title">فروش ویلا 400متری در رامسر</span>
                        <span className="recently-price">10.000.000.000 تومان</span>
                      </div>
                    </Link>
                    <div className="property-detail">
                      <div className="product-detail">
                        <Link to="/">1387</Link> <i className="fas fa-digging"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">4</Link> <i className="fas fa-bed-alt"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">2345m</Link> <i className="fas fa-globe-asia"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">125m</Link> <i className="fas fa-home-lg"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">شهری</Link> <i className="fa-solid fa-map-location-dot ms-1"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">گیلان-رشت</Link>
                        <i className="fa-solid fa-location-dot ms-1"></i>
                      </div>
                    </div>
                  </div>
                  <div className="recently-item">
                    <Link className="imageContainer" to="/">
                      <img src="/img/product1.jpeg" alt="detail" />

                      <div className="hiddenContainer ">
                        <span className="recently-title">فروش ویلا 400متری در رامسر</span>
                        <span className="recently-price">10.000.000.000 تومان</span>
                      </div>
                    </Link>
                    <div className="property-detail">
                      <div className="product-detail">
                        <Link to="/">1387</Link> <i className="fas fa-digging"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">4</Link> <i className="fas fa-bed-alt"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">2345m</Link> <i className="fas fa-globe-asia"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">125m</Link> <i className="fas fa-home-lg"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">شهری</Link> <i className="fa-solid fa-map-location-dot ms-1"></i>
                      </div>
                      <div className="product-detail">
                        <Link to="/">گیلان-رشت</Link>
                        <i className="fa-solid fa-location-dot ms-1"></i>
                      </div>
                    </div>
                  </div>
            
                </div>

     
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProperty;
