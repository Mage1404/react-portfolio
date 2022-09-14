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
      href: "https://utoronto-my.sharepoint.com/:b:/g/personal/luyan_zhang_mail_utoronto_ca/ETQPXTpy2C5JiSbWh_a19AkBbaWzCz2HQg4B4Mfl0L50aw?e=Mjcamo",
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
