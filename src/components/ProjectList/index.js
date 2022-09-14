import React, { useState } from "react";

const List = ({ category }) => {
  const [selection] = useState([
    {
      name: "ClubQ",
      sub: "HTML/CSS/JavaScript/Node/SQL/Express/GraphQL/React",
      category: "Portfolio",
      description: "Project 1",
      href: "https://pacific-beyond-43744.herokuapp.com/",
      github: "https://github.com/Project3-Team2/ClubQ",
      target: "_blank",
    },
    {
      name: "Google Map Marker",
      sub: "HTML/BootStrap/TypeScript/React/API",
      category: "Portfolio",
      description: "Project 2",
      href: "https://stackblitz.com/edit/github-krxmnl-6mhzan",
      github: "https://github.com/Mage1404/Map-Marker-GoogleMap",
      target: "_blank",
    },
    {
      name: "Budget Tracker",
      sub: "HTML/CSS/JavaScript/Node.js/Express.js/JQuery/Bootstrap",
      category: "Portfolio",
      description: "Project 3",
      href: "https://luyan-budget-tracker.herokuapp.com",
      github: "https://github.com/Mage1404/Budget-Tracker",
      target: "_blank",
    },
    {
      name: "Weather Tracker",
      sub: "HTML/CSS/JavaScript/Bootstrap/API",
      category: "Portfolio",
      description: "Project 4",
      href: "https://mage1404.github.io/Weather-checker/",
      github: "https://github.com/Mage1404/Weather-checker",
      target: "_blank",
    },
    {
      name: "Calender Manager",
      sub: "HTML/CSS/JavaScript/Bootstrap",
      category: "Portfolio",
      description: "Project 5",
      href: "https://mage1404.github.io/calender-pro",
      github: "https://github.com/Mage1404/calender-pro",
      target: "_blank",
    },
    {
      name: "Drinkaholics",
      sub: "HTML/CSS/JavaScript/API",
      category: "Portfolio",
      description: "Project 6",
      href: "https://drinkaholics.github.io/Drinkaholics",
      github: "https://github.com/Drinkaholics/Drinkaholics",
      target: "_blank",
    },
  ]);

  const currentSelection = selection.filter(
    (selection) => selection.category === category
  );

  return (
    <div>
      <div className="flex-row">
        {currentSelection.description}
        {currentSelection.map((image, i) => (
          <div class="vstack">
            <a href = {image.github} target={image.target}><i class="fa fa-github">{image.name}</i></a>
            <p>{image.sub}</p>
            <a href={image.href} target={image.target}>
              <img
                src={require(`../../assets/Large/${category}/${i}.png`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
