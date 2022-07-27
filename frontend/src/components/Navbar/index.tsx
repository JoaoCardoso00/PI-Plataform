import { useState } from "react";
import { NavbarContainer, Logo, Hamburger, Menu, Close } from "./styles";

import CompAmostraLogo from "../../assets/Logo_base.png";
import { Link } from "react-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function changeNavBarState() {
    setIsOpen((curr) => !curr);
  }

  function closeNavBar() {
    setIsOpen(false);
  }

  return (
    <NavbarContainer>
        <img src={CompAmostraLogo} alt="logo_comp_amostra" />
        CompAmostra
      </Logo>
      </Link>

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
        <Link to="home" smooth={true} onClick={closeNavBar}>
          Início
          <span />
        </Link>
        <Link to="about" smooth={true} onClick={closeNavBar}>
          Sobre
          <span />
        </Link>
        <Link to="periods" smooth={true} onClick={closeNavBar}>
          Projetos
          <span />
        </Link>
      </Menu>
    </NavbarContainer>
  );
}
