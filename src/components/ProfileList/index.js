import React, { useState } from "react";

const List = ({ category }) => {
  const [selection] = useState([
    {
      name: "Me",
      category: "About me",
      description: "Photo",
      href: "https://github.com/Mage1404",
      target: "_blank",
    },
    {
      name: "My school",
      category: "About me",
      description: "My school",
      href: "https://www.utoronto.ca",
      target: "_blank",
    },
    {
      name: "Click to Download",
      category: "Resume",
      description: "My school",
      href: "https://drive.google.com/file/d/1trn39_KkdnluAcW2dBy9E5H3PNLZQ_Iy/view?usp=sharing",
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
            {image.name}
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
