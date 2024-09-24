import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slider";

function Homepage({ language, setLanguage }) {
  return (
    <div>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        hideOptionalMenu={true}
      />
      <Slideshow language={language} />
      <Footer language={language} />
    </div>
  );
}

export default Homepage;
