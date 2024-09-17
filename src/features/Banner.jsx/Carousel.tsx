import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";

import { getHeadings } from "../AdminHeadings/store/action";
import { selectHeadings } from "../AdminHeadings/store/selectors";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useSelector(selectHeadings);

  React.useEffect(() => {
    dispatch(getHeadings(0));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const renderSlides = () => {
    if (items?.length === 0) {
      return (
        <SwiperSlide>
          <p>No slides available</p>
        </SwiperSlide>
      );
    }

    return items?.map(({ title, image, id }) => (
      <SwiperSlide key={id}>
        <div
          className="relative w-full h-[500px] md:h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(#0001, #000), url(${image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="absolute bottom-[200px] md:bottom-[250px] lg:bottom-[250px] w-full md:w-3/4 text-2xl md:text-5xl font-semibold text-white ml-4 md:ml-[40px] lg:ml-[100px]">
            {title}
          </h1>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={(items?.length as number) > 1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default Carousel;
