import styled from 'styled-components';

export const Container = styled.div`
  main {
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
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

      .moreinfo, .cesupa-logo-nav {
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
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #004B23;

  gap: 5.625rem;
`;

export const LeftHome = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  font-weight: 400;

  p:first-child  {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 0.875rem;

    color: var(--text-font);

    margin-bottom: 0.5rem;
  }

  p{
    color: var(--title-font);
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.125rem;
    margin-bottom: 3.313rem;

    width: 52ch;
  }

  h1 {
    font-weight: 700;
    font-size: 3.25rem;
    margin-bottom: 1.188rem;
  }

  button {
    width: 10.25rem;
    height: 3rem;
    background: #48CAE4;
    border-radius: 1.563rem;
    border: none;

    font-weight: 700;
    font-size: 0.875rem;
    color: #000066;
  }

  a {
    text-underline-offset: 0.20rem;
    color: var(--text-font);
  }

  div {
    display:flex;
    align-items: center;
    gap:3.5rem;
  }
`

export const RightHome = styled.div`
  img {
  }
`

export const Period = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
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
  font-family: 'Roboto', serif;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 300px;
  color: #000;
  position: relative;
  cursor: pointer;
  margin: 15px 0;
  padding: 30px;
  box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.5);

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
