import styled from "styled-components";

interface MenuProps {
  isOpen: Boolean;
}

export const NavbarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 54.391px;

  width: 100%;
  background-color: #004b23;

  padding: 2rem 5rem 0rem 5rem;

  @media (max-width: 768px) {
    justify-content: end;
    align-items: center;
  }
`;

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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  gap: 54px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in;

    span {
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.2s;
    }

    &:hover span {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;

  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
