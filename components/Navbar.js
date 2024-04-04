import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const NavTitle = styled(Link)`
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
`;

const MenuList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ isOpen }) => (isOpen ? '100vh' : 'none')};
  width: ${({ isOpen }) => (isOpen ? '100%' : 'none')};
  justify-content: ${({ isOpen }) => (isOpen ? 'space-evenly' : 'none')};
  background-color: rgba(255, 255, 255, 0.2); // For a semi-transparent background
  backdrop-filter: blur(10px);
  z-index: 2;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
    position: static;
    flex-direction: row;
    padding-top: 0;
    background-color: transparent;
    margin-left: auto;
    gap: 20px;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  text-align: center;
  padding: 12px 0;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  padding: 8px;
  text-decoration: none;
  color: black;
  display: block;
  &:hover {
  text-decoration: underline;
}
`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  z-index: 4;
  @media (min-width: 800px) {
    display: none;
    cursor: pointer;
  }
`;


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function closeMenu() {
      setIsOpen(false)
    }

    return(
        <NavContainer>
          <h1>
          <NavTitle href="/">Meergefühl</NavTitle>
          </h1>
      <MenuIcon onClick={toggleMenu}>{isOpen ? 'x' : '☰'}</MenuIcon>
      <MenuList isOpen={isOpen}>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/cottage-talk">cottage talk.</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
             <StyledLink href="/recommendations">recommendations.</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/feedback">tips & tops.</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/contact">contact.</StyledLink>
        </MenuItem>

      </MenuList>
    </NavContainer>
    )
}

