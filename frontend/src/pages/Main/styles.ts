import styled from "styled-components";

export const Container = styled.div`
  main {
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
  }

  @media only screen and (max-width: 1200px) {
    main {
      margin-left: 0;
      margin-bottom: 5rem;
    }

    nav {
      bottom: 0;
      width: 100vw;
      height: 5rem;
      z-index: 999;

      .moreinfo,
      .cesupa-logo-nav {
        display: none;
      }

      ul {
        flex-direction: row;

        li {
          display: flex;
          place-content: center;
          font-size: 18px;
        }
      }
    }
  }
`;

export const IntroductionContent = styled.div`
  display: flex;
  min-height: calc(100vh - 54px);
  align-items: center;
  justify-content: center;
  background-color: #004b23;
  flex-wrap: wrap;
`;

export const IntroductionContentContainer = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: calc(54px + 2rem);

  img {
    max-width: 100%;
  }
`;

export const LeftHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "Roboto";
  font-weight: 400;

  span {
    color: var(--text-font);
    font-size: 0.95rem;
    text-shadow: 2px 2px 8px #00000081;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--title-font);
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1.125rem;
    text-shadow: 2px 2px 8px #00000099;
    margin: 0 2rem 3rem 2rem;
    text-align: left;

    max-width: 36.5rem;
  }

  h1 {
    font-weight: 700;
    font-size: 3.25rem;
    margin-bottom: 1.188rem;
    text-shadow: 2px 2px 8px #00000099;
  }

  button {
    width: 10.25rem;
    height: 3rem;
    background: #48cae4;
    border-radius: 1.563rem;
    border: none;

    font-weight: 700;
    font-size: 0.875rem;
    color: #fff3f3;
    text-shadow: 2px 2px 8px #00000099;
  }

  a {
    text-underline-offset: 0.2rem;
    color: var(--text-font);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.5rem;
  }

  @media screen and (max-width: 1203px) {
    margin-top: 3rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  text-align: center;
  align-items: center;

  //Primeira div *Responsividade
  img {
    margin: 0.5rem 0 0.75rem 0;
  }

  //Segunda div *Responsividade e deixar ela no final da pagina
  img:nth-child(4) {
    margin-top: 55px;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;

    color: var(--text-secondary);
  }

  //Div dos conteudos
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 21px;

    gap: 59px;
  }

  @media only screen and (max-width: 1200px) {
    div {
      justify-content: center;
    }
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  //Deixar mais responsivel
  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0 2rem 3rem 2rem;

    max-width: 36.5rem;
  }

  iframe {
    width: 23rem;

    //Nao conseguir deixar a altura automatica
    margin: auto;
    border: none;
  }
`;

export const AboutRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  //Deixar Responsivel
  img {
    min-width: 100%;
  }
`;

export const Period = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  color: #7380f3;
  margin-left: 5rem;
  margin-top: 2rem;

  h3 {
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-size: 30px;
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 50px;
  }

  @media (max-width: 400px) {
    display: flex;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    /* margin-top: 1r; */
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: grid;
  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  font-family: "Roboto", serif;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 300px;
  color: #000;
  position: relative;
  cursor: pointer;
  margin: 15px 0;
  padding: 30px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);

  header {
    display: flex;

    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }

    h1 {
      font-size: 30px;
      font-weight: 600;
    }
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300;
  }

  span {
    position: absolute;
    font-size: 16px;
    font-weight: 100;
    bottom: 30px;
  }
`;
