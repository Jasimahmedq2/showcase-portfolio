import AboutTabs from "@/components/pagesComponents/AboutTabs";
import About from "@/components/pagesComponents/HomePage/About";
import Banner from "@/components/pagesComponents/HomePage/Banner";
import Projects from "@/components/pagesComponents/HomePage/projects";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
