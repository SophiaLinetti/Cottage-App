import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
position: relative;
`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
`;

const MenuLinks = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  width: auto;
  z-index: 1;
`;

const MenuItem = styled.li`
list-style: none;
`;

const StyledLink = styled(Link)`
padding: 8px;
text-decoration: none;
color: black;
display: block;
&:hover {
  background-color: #f0f0f0;
}
`;

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function closeMenu() {
        setIsOpen(false)
    }

    return(
        <Container>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
      <MenuLinks $isOpen={isOpen}>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/">Home</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/cottage-talk">Cottage Talk</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
             <StyledLink href="/recommendations">Recommendations</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/feedback">Tips & Tops</StyledLink>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
            <StyledLink href="/contact">Contact</StyledLink>
        </MenuItem>

      </MenuLinks>
    </Container>
    )
}

