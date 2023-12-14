import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../../assets/banner_backround.png";
import resume from "../../../assets/jasim-resume (2).pdf";
import "./Banner.css";
AOS.init();

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="home"
    >
      <div className="pl-8 pr-4  mx-auto">
        <div className="sm:flex justify-between items-center sm:h-screen">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <div className="pb-4 h-20">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "I'm Jasim Ahmed A web developer", // initially rendered starting point
                    1000,
                    "I'm Jasim Ahmed A Mern Stack developer",
                    1000,
                    "I'm Jasim Ahmed A frontend Developer",
                    1000,
                    "I'm Jasim Ahmed A backend Developer",
                    500,
                  ]}
                  className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase"
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
              <p
                data-aos="fade-up-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="text-base text-white md:text-lg pt-8 lg:pt-16"
              >
                Seasoned Web Developer adept in crafting dynamic, responsive
                applications with React, Next.js, and Redux, leveraging strong
                back-end skills in Node.js, Express.js, and database management.
                Committed to transforming concepts into exceptional,
                high-performance web solutions.
              </p>
            </div>
            <div className="pt-6 lg-pt-12">
              <a href={resume} download="jasim_resume">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8 hover-3d">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://i.ibb.co/XYQFDQC/pexels-kevin-ku-577585-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://i.ibb.co/cLm3LGb/pexels-tranmautritam-68763-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://i.ibb.co/dm434Dh/html-system-website-concept-1.jpg
              ?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
