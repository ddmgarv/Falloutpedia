import React from "react";
import { falloutLogo } from "../../constants/imgs";

const NavItems = ({ options, games }) => {
  const insertGames = () => (
    <div className="">
      <ul>
        {games.map(game => (
          <li className="">{game}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <ul className="nav__list">
      <li>
        <img src={falloutLogo} alt="" className="img" />
      </li>
      {options.map(option =>
        option === "juegos" ? (
          <li className="nav__list--item">
            {option}
            {insertGames()}
          </li>
        ) : (
          <li className="nav__list--item">{option}</li>
        )
      )}
    </ul>
  );
};

export default NavItems;
