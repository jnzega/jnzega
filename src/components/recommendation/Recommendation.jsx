import "./recommendation.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";


const Recommendation = () => {
    return (
        <section className="recommendation container section">
            <h2 className="section__title">Recommendation</h2>
            <span className="section__subtitle">What people say about me</span>

            <Swiper 
                className="recommendation__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="recommendation__card" key={id}>
                            <img src={image} alt="Person" className="recommendation__img" />

                            <h3 className="recommendation__name">{title}</h3>
                            <p className="recommendation__description">{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Recommendation;