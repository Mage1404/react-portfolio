import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Contact from "./components/Contacts";

function App() {
  const [categories] = useState([
    {
      name: "About me",
      description:
        "My name is Luyan Zhang, I am a graduate from University of Toronto in honours Bachelor of Art with major program in media studies and minor program in economics for management studies. I have completed 2-year studies in Computer Science program during university, and I am familiar with python and java programming languages.",
    },
    { name: "Portfolio", description: "My projects" },
    { name: "Resume", description: "" },
  ]);

  const blank = "_blank";
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
      <footer class="text-center">
        <a class="mr-5" href="https://github.com/Mage1404" target={blank}>
          <i class="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luyan-zhang-327495211/"
          target={blank}
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <p>Made by Luyan Zhang</p>
        &copy; 2022
      </footer>
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
