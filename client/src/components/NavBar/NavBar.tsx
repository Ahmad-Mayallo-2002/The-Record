import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  type NavbarProps,
  NavbarToggler,
} from "reactstrap";
import { navLinks } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import "./NavBar.scss";
import { FaSearch } from "react-icons/fa";

function NavBar({ args }: { args?: NavbarProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();

  return (
    <Navbar className="bg-white" {...args} container expand="md">
      <NavbarBrand href="/" className="fw-bold fs-3 text-primary-800">
        The Record
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar
        className="flex items-center justify-space-between"
      >
        <Nav navbar className="fs-5 gap-3 justify-center items-center">
          {navLinks.map((link, index) => (
            <NavItem
              key={index}
              className={`${index === 0 && "ms-md-auto ms-0"}`}
            >
              <NavLink
                href={link.path}
                className={`nav-link text-md-start text-center ${pathname === link.path ? "active" : ""}`}
              >
                {link.name}
              </NavLink>
            </NavItem>
          ))}

          <NavItem className="flex items-center gap-3 ms-md-auto ms-0">
            <button
              style={{ width: "36px", height: "36px" }}
              className="bg-transparent border-color-transparent"
            >
              <FaSearch fontSize={20} color="#505F76" />
            </button>
          </NavItem>
          <NavItem>
            <a className="btn btn-primary w-full" href="/register">
              Sign Up
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
