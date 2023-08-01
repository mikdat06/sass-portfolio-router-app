import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../pages/home/Home.scss";

const AppRouter = () => {
  return (
    <div className="home-bgImg-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
