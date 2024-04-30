import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, NavLink as Starlink, useNavigate } from "react-router-dom";
import my from "../files/Karengula-Dinakar-Resume.pdf";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { auth } from "../firebase";
import toast from "react-hot-toast";

export const NavBar = () => {
  const handleResumeDownload = () => {
    const pdfUrl = my;
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "Karengula-Dinakar.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sessionStorage.removeItem("usermail");
        toast.success("Signed out successfully");
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Navbar
      expand="md"
      dark
      className="main-navbar  text-dark "
      fixed="top"
      style={{ backgroundColor: "#B5C18E", fontSize: "1.3rem" }}
    >
      <NavbarBrand to="/" tag={Starlink} className="text-dark ">
        <i className="fa-solid fa-map ">&nbsp; &nbsp;</i>
        Journal-X
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        {/* <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Starlink} to="/log">
              Trade Log
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} to="/charts">
              Trade Challenges
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Starlink} to="/cinterest">
              Compound Interest
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} to="/rules">
              Rules
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav> */}

        <Nav navbar className="ms-auto   text-dark   ">
          <NavItem>
            <NavLink to="/" tag={Starlink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" tag={Starlink}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} onClick={handleResumeDownload} to="/s">
              Resume
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
