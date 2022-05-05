import styled from 'styled-components';

export const Container = styled.div`
  main {
    margin-left: 15rem;
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
  place-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  background-color: #040a3c;

  .softamostra-logo {
    width: 500px;
    align-self: center;
    padding: 20px 30px;
    background-color: #fefefe;
    border-radius: 30px;
    margin-bottom: 20px;
  }

  a {
    color: #fefefe;
    margin-top: 20px;
  }
   p b {
     font-size: 30px;
   }

  .cesupa-logo {
    width: 200px;
    align-self: center;
    margin-top: 50px;
  }
  .text {
    font-size: 25px;
  }

  .box {
    padding: 10px 25px;
    border-radius: 10px;
    background-color: #fefefe;
    color: #040a3c;
  }

  >p {
    max-width: 700px;
    align-self: center;
    color: #fefefe;
    font-size: 20px;
    margin-top: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    >p {
      color: #fefefe;
      margin: 40px 0 10px 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: #fefefe;
      max-width: 800px;

      img {
        width: 150px;
        padding: 5px;
      }
    }
  }

  .vote-timer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fefefe;
    margin-top: 50px;

    p {
      font-size: 25px;
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    section {
      div {
        img {
          width: 150px;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .softamostra-logo {
      width: 400px;
    }

    >p {
      font-size: 18px;
    }

    .cesupa-logo {
      margin: 20px 0 20px 0;
    }

  }

  @media (max-width: 450px) {
    .softamostra-logo {
      width: 300px;
      margin-top: 20px;
    }

    >p {
      font-size: 16px;
      max-width: 350px;
    }

    section {
      div {
        flex-direction: column;

        img {
          width: 120px;
        }
      }
    }
  }
`;

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
