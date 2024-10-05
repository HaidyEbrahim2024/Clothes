import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import './swiper.css';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Swiiper() {
    // Define image paths
    const images = [
        '/image-api/1.jpeg',
        '/image-api/2.jpeg',
        '/image-api/3.jpeg',
        '/image-api/4.jpeg',
        '/image-api/9.jpeg',
        '/image-api/11.jpg',
        '/image-api/133.jpg',
        '/image-api/12.webp',
        '/image-api/toy1.jpg',
        '/image-api/toy7.jpg',
        '/image-api/toy3.jpg',
        '/image-api/toy4.jpg',
    ];

    return (
        <div className="container">
            {/* Swiper container */}
            <Swiper
    effect="coverflow"
    slidesPerView={1} // Default slides per view
    centeredSlides={true}
    loop={true}
    navigation={true}
    pagination={{
        type: 'bullets',
        clickable: true,
    }}
    autoplay={{
        delay: 1800,
        disableOnInteraction: false,
    }}
    className="mySwiper"
    coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }}
    breakpoints={{
        // When window width is >= 1024px (laptop)
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // When window width is >= 768px and < 1024px (tablet)
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // When window width is < 768px (phone)
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }}
>
    {/* Render Swiper slides */}
    {images.map((image, index) => (
        <SwiperSlide key={index}>
            <img src={image} className="image" alt={`Slide ${index + 1}`}
            
            style={{ width: "100%", height: "100%" }}
            />
        </SwiperSlide>
    ))}
</Swiper>

            {/* View All Products link */}
            <div className="  d-flex justify-content-center my-5" >
                <Link to="/AllProduct" className="icon">
                    <div style={{ background: "#81d1e5", borderRadius: "20px", padding: "4px" }}>
                        <div className="btn" style={{ background: "#81d1e5", borderRadius: "20px", border: "2px white dashed", padding: "10px" }}>View All Products</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
