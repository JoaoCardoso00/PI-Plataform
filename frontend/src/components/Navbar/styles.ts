import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: fixed;

  padding: 2rem;
`


export const Logo = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: white;

  img {
    margin-right: 0.375rem;
    width: 4rem;
    height: 3.4rem;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 54px;
  position: relative;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;


  a { 
    text-decoration: none;
    color: white;
    filter: brightness(.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .2s ease-in;

    span {
      width: 0;
      height: 2px;
      background-color: white;
      transition: width .2s;
    }

    &:hover span {
      width: 100%;
    }

    &:hover{
      filter: brightness(1);
    }
/* 
    &[data-active]{
      filter: brightness(1);
    }

    &[data-active] span{
      width: 100%;
    } */
  }

  @media (max-width: 768px) {
    display: none;
    overflow: hidden;
    flex-direction: column; 
    width: 100%;
  }
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;

  cursor: pointer;

  span{
    height: 2px;
    width: 25px;
    background-color: #FFFFFF;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
