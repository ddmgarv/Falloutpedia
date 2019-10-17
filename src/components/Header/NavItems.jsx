import React from "react";
import { falloutLogo } from "../../constants/imgs";

const NavItems = ({ options, games }) => (
  <ul className="nav__list">
    <li>
      <img src={falloutLogo} alt="" className="img" />
    </li>
    {options.map(option => (
      <li className="nav__list--item">{option}</li>
    ))}
  </ul>
);

export default NavItems;
