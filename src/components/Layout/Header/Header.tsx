import logo from "../../../assets/photos/logo-white.svg";

import { links } from "../../../core/constants/links";
import { General } from "../../../core/models";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="solis" />
      </a>
      <nav>
        <ul className="header-nav-list">
          {links.map((link: General.Link, index: number) => {
            const { title } = link;
            return (
              <li key={index} className="header-nav-list__item">
                <a href="/">{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
