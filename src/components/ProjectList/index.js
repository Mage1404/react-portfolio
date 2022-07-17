import React, { useState } from "react";

const List = ({ category }) => {
  const [selection] = useState([
    {
      name: "Drinkaholics",
      category: "Portfolio",
      description: "Project 1",
      href: "https://drinkaholics.github.io/Drinkaholics",
      github: "https://github.com/Drinkaholics/Drinkaholics",
      target: "_blank",
    },
    {
      name: "run-buddy",
      category: "Portfolio",
      description: "Project 2",
      href: "https://mage1404.github.io/run-buddy",
      github: "https://github.com/Mage1404/run-buddy",
      target: "_blank",
    },
    {
      name: "Weather Tracker",
      category: "Portfolio",
      description: "Project 3",
      href: "https://mage1404.github.io/Weather-checker/",
      github: "https://github.com/Mage1404/Weather-checker",
      target: "_blank",
    },
    {
      name: "Calender Manager",
      category: "Portfolio",
      description: "Project 4",
      href: "https://mage1404.github.io/calender-pro",
      github: "https://github.com/Mage1404/calender-pro",
      target: "_blank",
    },
    {
      name: "Employee Tracker",
      category: "Portfolio",
      description: "Project 5",
      href: "https://github.com/Mage1404/Employee-Tracker",
      github: "https://github.com/Mage1404/Employee-Tracker",
      target: "_blank",
    },
    {
      name: "Budget Tracker",
      category: "Portfolio",
      description: "Project 6",
      href: "https://luyan-budget-tracker.herokuapp.com",
      github: "https://github.com/Mage1404/Budget-Tracker",
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
            <br></br>
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
