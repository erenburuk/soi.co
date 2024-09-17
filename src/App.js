import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

import data from "./data/menuData.json";

function App() {
  const [language, setLanguage] = useState("TR");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />
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

export default App;
