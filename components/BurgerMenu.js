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

    return(
        <>
        <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        <MenuLinks isOpen={isOpen}>
            <Link href="/">Home</Link>
            <Link href="/cottage-talk">Cottage Talk</Link>
            <Link href="/recommendations">Recommendations</Link>
            <Link href="/feedback">Tips & Tops</Link>
            <Link href="/contact">Contact</Link>
        </MenuLinks>
        </>
    )
}