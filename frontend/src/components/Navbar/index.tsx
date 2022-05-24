import { useState } from "react";
import { NavbarContainer, Logo, Hamburger, Menu, Close } from "./styles";

import CompAmostraLogo from "../../assets/Logo_base.png";
import { Link } from "react-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function changeNavBarState() {
    setIsOpen((curr) => !curr);
  }

  return (
    <NavbarContainer>
      <Logo href="#">
        <img src={CompAmostraLogo} alt="logo_comp_amostra" />
        CompAmostra
      </Logo>

      <Hamburger isOpen={isOpen} onClick={changeNavBarState}>
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
        <a href="">
          Início
          <span />
        </a>
        <Link to="about" smooth={true} onClick={changeNavBarState}>
          Sobre
          <span />
        </Link>
        <Link to="periods" smooth={true} onClick={changeNavBarState}>
          Projetos
          <span />
        </Link>
      </Menu>
    </NavbarContainer>
  );
}
