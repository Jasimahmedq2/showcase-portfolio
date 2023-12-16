const CodingExperience = () => {
  return (
    <div className="px-4 pt-16 mt-72 sm:mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:flex justify-between items-center sm:space-x-8">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="max-w-xl mb-10 md:mx-auto text-start lg:max-w-2xl md:mb-12"
      >
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase ">
          Hands-On Coding Experience
        </h2>
        <p className="text-base text-white md:text-lg sm:pt-6">
          I worked at Herocodecamp as a full-stack developer for two months.
          Additionally, I have successfully completed some contract projects as
          an independent MERN stack developer.
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-[#404040] rounded-sm transition-color sm:items-stretch ">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase sm:text-5xl">
              2+ years
            </h6>
            <p className="text-center text-white pt-6">
              Passionate full-stack developer with over 2 years of immersive
              learning, translating enthusiasm for cutting-edge technologies
              into innovative projects and continuous skill advancement.{" "}
            </p>
          </div>
          <div className="w-11/12 mx-auto h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase  sm:text-5xl">
              70 + Repo
            </h6>
            <p className="text-center text-white pt-6">
              Maintained and contributed to over 70 diverse GitHub repositories,
              showcasing a wide range of projects and demonstrating proficiency
              in various technologies and development stacks.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingExperience;
