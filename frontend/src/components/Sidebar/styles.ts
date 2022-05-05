import { darken } from "polished";
import styled from "styled-components";

export const NavBar = styled.nav`
  width: 15rem;
  height: 100vh;
  font-family: "Montserrat", serif;
  position: fixed;
  background-color: #7380f3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: #fefefe;

  .cesupa-logo-nav {
    width: 150px;
    margin-bottom: 40px;
  }

  p {
    align-self: center;
    margin-bottom: 30px;
  }

  header {
    display: flex;
    align-self: center;
    align-items: center;
    margin-top: 30px;

    img {
      width: 150px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    width: 100%;

    .active {
      background-color: #fefefe;
      color: #7380f3;
    }

    a {
      display: flex;
      align-items: center;
      height: 5rem;
      font-size: 25px;
      width: 100%;
      justify-content: space-between;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #fefefe;
        background-color: ${darken(0.03, "#7380F3")};
      }
    }

    li {
      display: flex;
      place-content: center;
      width: 100%;
      transition: 0.3s background-color;
    }
  }
`;
