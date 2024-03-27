import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const MenuIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const MenuLinks = styled.nav`
display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function handleClickedLink() {
        setIsOpen(false)
    }

    return(
        <>
        <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        <MenuLinks isOpen={isOpen}>
            <Link onClick={handleClickedLink} href="/">Home</Link>
            <Link onClick={handleClickedLink} href="/cottage-talk">Cottage Talk</Link>
            <Link onClick={handleClickedLink} href="/recommendations">Recommendations</Link>
            <Link onClick={handleClickedLink} href="/feedback">Tips & Tops</Link>
            <Link onClick={handleClickedLink} href="/contact">Contact</Link>
        </MenuLinks>
        </>
    )
}