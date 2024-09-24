import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

function Homepage({
  data,
  selectedCategory,
  setSelectedCategory,
  language,
  setLanguage,
}) {
  return (
    <div>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        hideOptionalMenu={false}
      />
      <Main
        data={data}
        language={language}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Footer language={language} />
    </div>
  );
}

export default Homepage;
