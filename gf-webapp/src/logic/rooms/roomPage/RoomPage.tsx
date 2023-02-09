import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./roomPage.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import {Keyboard} from "swiper";

type RoomParams = {
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<RoomParams>();
  const [room, setRoom] = useState({
    id: "",
    services: "",
    images: {},
    apartmentsType: "",
    description: "",
    descriptionLong: "",
    price: 200,
    promo: "",
    slider: "",
    slider2: "",
    slider3: "",
    slider4: "",
    slider5: "",
    rating: 8,
  });

  const url = "http://localhost:3600/api/rooms";

  const fetchData = async () => {
    const res = await fetch(url);
    const final = await res.json();
    console.log(final[Number(id)]);
    setRoom(final[Number(id)]);
    return final[Number(id)];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageBorder>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={room.promo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {room.description}
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          {`Apartment type: ${room.apartmentsType} Apartment type: ${room.apartmentsType}`}
        </div>
        <div className={styles.description}>
          {`Price: ${room.price}$ Price: ${room.price}$`}
        </div>
      </div>
      <div className={styles.about}>
        {room.descriptionLong}
      </div>
      <Swiper className={styles.swiper}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        keyboard={{enabled: true}}
        modules={[Keyboard]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className={styles.slide}
            src={room.slider}
            alt="Slider image"
          />
          <p className={styles.number}>
            01
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide}
            src={room.promo}
            alt="Slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide}
            src={room.slider2}
            alt="Slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide}
            src={room.slider3}
            alt="Slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slide}
            src={room.slider4}
            alt="Slider image"
          />
        </SwiperSlide>
      </Swiper>
    </PageBorder>
  );
};