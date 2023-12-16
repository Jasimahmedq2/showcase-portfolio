import About from "@/components/pagesComponents/HomePage/About";
import Banner from "@/components/pagesComponents/HomePage/Banner";
import Contact from "@/components/pagesComponents/HomePage/Contact";
import Footer from "@/components/pagesComponents/HomePage/Footer";
import Projects from "@/components/pagesComponents/HomePage/projects";
import { Toaster } from "@/components/ui/toaster";

const HomePage = () => {
  return (
    <div>
      <div className="sm:pt-8 sm:pb-8">
        <Banner />
      </div>
      <div className="sm:pt-8 sm:pb-8">
        <About />
      </div>
      <div className="sm:pt-8 sm:pb-8">
        <Projects />
      </div>
      <div className="sm:pt-8 sm:pb-8">
        <Contact />
      </div>
      <div className="sm:pt-8 sm:pb-8">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default HomePage;
