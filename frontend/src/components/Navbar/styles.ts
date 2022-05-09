import styled from "styled-components";
export const NavbarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  position: fixed;

  padding: 30px 45px 30px 30px;
`

export const Logo = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 150%;
  color: white;

  img {
    margin-right:0.375rem;
    width: 3.313rem;
    height: 2.75rem;
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

  cursor: pointer;

  a { 
    text-decoration: none;
    color: white;
    opacity: 0.7;

    &:hover{
      font-weight: 700;
      opacity: 100;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
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
