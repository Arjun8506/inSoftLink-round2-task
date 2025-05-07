import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Heading from "../components/Heading";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Varun Kasyap",
      location: "Uttar Pradesh",
      text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Vishal Kumar",
      location: "Delhi",
      text: `"My daughter used to despise math, but now she can confidently take math tests." She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support.`,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Ravi Kaushal",
      location: "Indore, Madhya Pradesh",
      text: `Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer.`,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Rasmi Panday",
      location: "Delhi",
      text: `I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions. Thank you, School Aura!`,
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  return (
    <section className="py-12 bg-[#f1f1f1] my-20 mb-44">
      <div className="w-full flex items-center justify-center">
        <Heading
          firstPart={"WHAT"}
          secondPart={"PARENT SAYS"}
          isFlexCol={false}
        />
      </div>
      <div className="mt-10 px-4 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            enabled: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-primary !w-8 !h-[2px] !rounded-lg custom-bullet"></span>`;
            },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="mb-12">
              <div className="testimonialCard bg-white rounded-lg p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-sm text-orange-500">{item.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
