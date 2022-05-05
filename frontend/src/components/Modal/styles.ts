import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 80px;
  overflow-y: auto;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      margin-right: 40px;
      border: 0
    }

    h1 {
      font-size: 50px;
      font-weight: 600;
    }
  }

  iframe {
    width: 600px;
    height: 300px;
    @media (max-width: 600px) {
      & {
        width: 400px;
      }
    }

    @media (max-width: 400px) {
      & {
        width: 350px;
      }
    }
  }

  >button {
    position: absolute;
    top: -20px;
    right: -20px;
    height: 70px;
    width: 70px;
    z-index: 999;
    border-radius: 50%;
    border: 0;
    background-color: #fe7940;
    font-size: 30px;
    color: #fefefe;
  }

  @media (max-width: 1500px) {
    padding: 40px;
  }

  @media (max-height: 904px) {
    > button {
      top: 0;
      right: 0;
      color: #fe7940;
      background-color: transparent;
    }
  }

  p {
    margin: 30px 0 20px 0;
    font-size: 25px;
  }

  @media (max-width: 800px) {
    header {
      img {
        width: 80px;
        height: 80px;
      }

      h1 {
        font-size: 40px;
      }
    }

    p {
      font-size: 20px;
    }
  }

  a, span {
    display: block;
  }

  span {
    margin-bottom: 20px;
  }

  > div {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1465px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }
`;

export const Votebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7380F3;
  color: #fefefe;
  width: 500px;
  height: 300px;
  padding: 4rem 6rem;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    input {
      border: 0;
      padding: 10px;
    }

    button {
      background-color: #fe7940;
      padding: 8px;
      border: 0;
      color: #fefefe;
      font-size: 20px;
    }

    span {
      font-size: 14px;
      margin-top: 10px;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
  }
`;
