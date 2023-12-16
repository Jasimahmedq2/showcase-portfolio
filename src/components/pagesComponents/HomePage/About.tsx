import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import leftArrow from "../../../assets/curved-arrow.png";
import "./About.css";
import AboutTabs from "../AboutTabs";
import CodingExperience from "./codingExperience";
// const cards = [
//   "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
// ];

const cards = [
  "https://i.ibb.co/m9kZVgW/1.png",
  "https://i.ibb.co/kM3XZ4J/2.png",
  "https://i.ibb.co/MP63hdf/3.png",
  "https://i.ibb.co/FxyBTzH/4.png",
  "https://i.ibb.co/xXtkTRj/5.png",
  "https://i.ibb.co/WWRGykK/6.png",
  "https://i.ibb.co/d66r78M/7.png",
  "https://i.ibb.co/ts5tsqY/8.png",
  "https://i.ibb.co/VvSNtr7/9.png",
  "https://i.ibb.co/fpDsYpq/10.png",
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const About = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  // const bind = useDrag(
  //   ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
  //     const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
  //     const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
  //     if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
  //     api.start((i) => {
  //       if (index !== i) return; // We're only interested in changing spring-data for the current spring
  //       const isGone = gone.has(index);
  //       const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
  //       const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
  //       const scale = down ? 1.1 : 1; // Active cards lift up a bit
  //       return {
  //         x,
  //         rot,
  //         scale,
  //         delay: undefined,
  //         config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
  //       };
  //     });
  //     if (!down && gone.size === cards.length)
  //       setTimeout(() => {
  //         gone.clear();
  //         api.start((i) => to(i));
  //       }, 600);
  //   }
  // );

  const bind = useDrag(({ args: [index], down, movement: [mx], velocity }) => {
    const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
    const dir = -1; // Set direction to -1 to always point left

    if (!down && trigger && mx < 0) gone.add(index); // If button/finger's up, trigger velocity is reached, and movement is to the left, flag the card ready to fly out to the left

    api.start((i) => {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone, it flies out to the left, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1; // Active cards lift up a bit

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 600);
    }
  });

  return (
    <div id="about" className="sm:pt-12 pt-8 sm:pl-8 pr-4  sm:min-h-[800px]">
      <h1 className="text-2xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase pl-8 sm:pl-0">
        About Me
      </h1>
      <div className="flex items-center justify-center mt-12 p-4">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="w-1/2 p-4 hidden sm:block"
        >
          <img
            className="w-44 h-44 hidden sm:block"
            src={leftArrow}
            alt="icon"
          />
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              className="deck mt-96 sm:mt-0"
              key={i}
              style={{ x, y }}
            >
              {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(${cards[i]})`,
                }}
              />
            </animated.div>
          ))}
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 sm:inline-block text-transparent bg-clip-text uppercase hidden ">
            Skills
          </h1>
        </div>
        {/* hidden for small devices */}
        <div className="w-1/2 p-4 sm:hidden">
          <img
            className="w-44 h-44 hidden sm:block"
            src={leftArrow}
            alt="icon"
          />
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              className="deck mt-96 sm:mt-0"
              key={i}
              style={{ x, y }}
            >
              {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(${cards[i]})`,
                }}
              />
            </animated.div>
          ))}
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 sm:inline-block text-transparent bg-clip-text uppercase hidden ">
            Skills
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="sm:w-1/2 p-2"
        >
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase">
            Jasim Ahmed
          </h1>
          <p className="mb-6 text-white text-xl font-semibold tracking-wide mt-4">
            I am a passionate and versatile web developer with a strong
            background in both front-end and back-end technologies. With a deep
            love for creating intuitive and visually appealing user interfaces,
            I specialize in leveraging the power of modern web technologies to
            craft engaging web applications
          </p>
          <div className="pt-6 sm:h-80 ">
            <AboutTabs />
          </div>
        </div>
      </div>
      {/* coding experience */}
      <div className="sm:pt-12 pb-12">
        <CodingExperience />
      </div>
    </div>
  );
};

export default About;
