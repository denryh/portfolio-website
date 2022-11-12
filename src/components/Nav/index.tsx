import avatar from "../../assets/avatar.jpg";
import "./Nav.css";

const Nav: React.FunctionComponent = () => {
  return (
    <nav>
      <img className="nav-avatar" src={avatar} alt="" />
      <ul className="nav-menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <span className="nav-location">Ho Chi Minh, Vietnam</span>
    </nav>
  );
};

export default Nav;
