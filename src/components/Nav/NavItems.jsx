import React, { Fragment } from "react";
import { falloutLogo } from "../../constants/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faChevronRight,
  faImage,
  faInfo,
  faRegistered
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavItems = ({ options, games, dropdown, handleDropdown }) => {
  const icons = [faHome, faGamepad, faImage, faInfo, faRegistered];

  const insertGames = () => (
    <div className={dropdown ? "games-container show" : "games-container"}>
      <ul className="games__container--list">
        {games.map(game => (
          <li className="item">{game}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <ul className="nav__list">
      <li>
        <img src={falloutLogo} alt="" className="img" />
      </li>
      {options.map((option, index) =>
        option === "juegos" ? (
          <Fragment>
            <li
              className="nav__list--item"
              onClick={handleDropdown}
              key={index}
            >
              <Link>
                <FontAwesomeIcon
                  style={{ width: "40px" }}
                  icon={icons[index]}
                />
                {option}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={dropdown ? "chevron active" : "chevron"}
                />
              </Link>
            </li>
            {insertGames()}
          </Fragment>
        ) : (
          <li className="nav__list--item" key={index}>
            <Link to={`/${option}`}>
              <FontAwesomeIcon style={{ width: "40px" }} icon={icons[index]} />
              {option}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavItems;
