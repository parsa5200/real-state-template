// import { useRef } from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./index.scss";
import api from "../../api";
import { LoadingSvg } from "../../components";
function SwiperImages() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState([]);

  const getImages = async () => {
    const images = await api.get.products();
    console.log({ parsa: images });
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
      <Swiper modules={[Navigation, EffectFade]} navigation effect speed={800}>
        {imageData.properties.map((img,index) => {
          return (
            <SwiperSlide key={img.id}>
              <img src={"http://eflare.ir" + img.images[0].path_thumbnail} alt={img.images.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default SwiperImages;
