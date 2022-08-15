import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    {
      name: "About me",
      description:
        "My name is Luyan Zhang, I am a graduate from University of Toronto in honours Bachelor of Art with major program in media studies and minor program in economics for management studies. This year, I completed a Bootcamp Program from UofT - Full-Stack Web Development, with 3.7 CGPA. I was mainly engaged in video game and eSports field during last 4 years and I am looking forward to changing my career path, now I am ready to become a web developer.",
    },
    { name: "Portfolio", description: "My projects" },
    { name: "Resume", description: "" },
  ]);
  
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main class="text-center">
        {!contactSelected ? (
          <>
            <Menu currentCategory={currentCategory}></Menu>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      ></link>
    </div>
  );
}

export default App;
