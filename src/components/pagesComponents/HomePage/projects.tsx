import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Projects.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import github from "../../../assets/github-sign.png";
import live from "../../../assets/eye.png";
const Projects = () => {
  return (
    <div className="pt-8 min-h-screen sm:pt-12 sm:pl-12 pl-4">
      <h1 className="text-2xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase">
        Recent Projects
      </h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
                  project Name
                </h5>
                <div className="flex items-center justify-around space-x-3 pt-3">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={live}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
                  project Name
                </h5>
                <div className="flex items-center justify-around space-x-3 pt-3">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={live}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
                  project Name
                </h5>
                <div className="flex items-center justify-around space-x-3 pt-3">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={live}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
                  project Name
                </h5>
                <div className="flex items-center justify-around space-x-3 pt-3">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={live}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
                  project Name
                </h5>
                <div className="flex items-center justify-around space-x-3 pt-3">
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={live}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">live</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className="w-1/2 mx-auto"
                      style={{ width: "24px", height: "24px" }}
                      src={github}
                      alt=""
                    />
                    <p className="text-sm text-white pb-1">backend</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
