import About from "@/components/pagesComponents/HomePage/About";
import Banner from "@/components/pagesComponents/HomePage/Banner";
import Contact from "@/components/pagesComponents/HomePage/Contact";
import Footer from "@/components/pagesComponents/HomePage/Footer";
import Projects from "@/components/pagesComponents/HomePage/projects";
import { Toaster } from "@/components/ui/toaster";

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
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default HomePage;
