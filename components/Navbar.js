import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.nav`
position: relative;
display: flex;
align-items: center;
`;

const Heading = styled.h1`
margin-left: 10px;
/* margin-top: 0; */

`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 4;
  @media (min-width: 800px) {
    display: none;
    cursor: pointer;
  }
`;

const MenuLinks = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding-top: 0;
  margin-left: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  z-index: 2;
  align-items: center;
  justify-content: center;
  
 
//width: 100%; list-style: none; display: felx; justify-content: flex-end; align-items: center;
//

  @media (min-width: 800px) {
    display: flex;
    position: static;
    flex-direction: row;
    width: auto;
    height: auto;
    padding-top: 0;
    margin-right: 10px;
    border: none;
    background-color: transparent;
    margin-left: auto; // Richtet die Links rechts aus
    gap: 20px; // Größerer Abstand zwischen den Links
  }
`;

const MenuItem = styled.li`
list-style: none;
text-align: center;
padding: 12px 0;

@media (max-width: 799px) {
    width: 100%; // Volle Breite der Listenelemente in der mobilen Ansicht
  }

`;

const StyledLink = styled(Link)`
padding: 8px;
text-decoration: none;
color: black;
display: block;
text-align: center;
&:hover {
  text-decoration: underline;
}
`;

const Home = styled(Link)`
  padding: 8px;
  text-decoration: none;
  color: black;
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
        <Container>
          <Heading>
          <Home href="/">Meergefühl</Home>
          </Heading>
      <MenuIcon onClick={toggleMenu}>{isOpen ? 'x' : '☰'}</MenuIcon>
      <MenuLinks $isOpen={isOpen}>

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

      </MenuLinks>
    </Container>
    )
}

