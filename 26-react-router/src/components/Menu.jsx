import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/About">About</NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="/Contacts">Contacts</NavLink>
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
      >
        Home
      </NavLink>
    </nav>
  );
};

export default Menu;
