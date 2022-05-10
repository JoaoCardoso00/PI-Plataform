import { useState } from "react";
import { NavbarContainer, Logo, Hamburger, Menu, Close } from "./styles";

import CompAmostraLogo from "../../assets/Logo base.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo href="#">
        <img src={CompAmostraLogo} alt="logo_comp_amostra" />
        CompAmostra
      </Logo>

      <Hamburger
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((curr) => !curr);
        }}
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <Close
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((curr) => !curr);
        }}
      >
        X
      </Close>

      <Menu isOpen={isOpen}>
        <a href="#">
          Início
          <span />
        </a>
        <a href="#">
          Sobre
          <span />
        </a>
        <a href="#">
          Projetos
          <span />
        </a>
      </Menu>
    </NavbarContainer>
  );
}
