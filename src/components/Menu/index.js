import React from "react";
import ProjectList from "../ProjectList";
import ProfileList from "../ProfileList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Menu(props) {
  const { currentCategory } = props;
  if (currentCategory.name === "Portfolio") {
    return (
      <section class="text-center">
        <h1 data-testid="h1tag">
          {capitalizeFirstLetter(currentCategory.name)}
        </h1>
        <p>{currentCategory.description}</p>
        <ProjectList category={currentCategory.name} />
      </section>
    );
  } else {
    return (
      <section class="text-center">
        <h1 data-testid="h1tag">
          {capitalizeFirstLetter(currentCategory.name)}
        </h1>
        <p>{currentCategory.description}</p>
        <ProfileList category={currentCategory.name} />
      </section>
    );
  }
}
export default Menu;
