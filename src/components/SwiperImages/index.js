import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

//import api & loading
import api from "../../api";
import { LoadingSvg } from "../../components";

const SwiperImages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState([]);

  const getImages = async () => {
    const images = await api.get.products();
    setImageData(images.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingSvg />
      </div>
    );
  }
  return (
    <section>
      <Swiper
        dir="rtl"
        spaceBetween={30}
        navigation={true}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Navigation, Pagination, EffectFade]}
      >
        {imageData.properties.map((img) => {
          return (
            <SwiperSlide key={img.id}>
              <img src={"http://eflare.ir" + img.images[0].path_thumbnail} alt={img.images.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default SwiperImages;
