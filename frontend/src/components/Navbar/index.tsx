import { useState } from 'react'
import { NavbarContainer, Logo, Hamburger, Menu } from './styles';

import CompAmostraLogo from '../../assets/Logo base.png'

export function Navbar() {
  
  return (
    <NavbarContainer>
    <Logo href="#">
      <img src={CompAmostraLogo} alt=" Logo da Computação Amostra" />
      CompAmostra
    </Logo>

    <Hamburger>
      <span />
      <span />
      <span />
    </Hamburger>

    <Menu>
      <a href="#">Início</a>
      <a href="#">Sobre</a>
      <a href="#">Projetos</a>
    </Menu>
    </NavbarContainer>
  
  )
}