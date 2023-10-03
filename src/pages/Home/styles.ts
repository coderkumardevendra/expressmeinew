import styled from "styled-components";
import Wave from "@/assets/wave.svg";

export const FirstCallContainer = styled.div`
  background-color: white; // var(--bg-blue);
  margin-bottom: 1rem;
  padding: 2rem 0;
  position: relative;
  z-index: 1;

  /* &::before {
    content: "";
    transform: rotate(180deg);
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Wave});
    opacity: 0.5;
    z-index: -1;
  } */

  & > div {
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    max-width: 400px;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--main-blue);
    }

    p {
      font-size: 1rem;
      color: var(--text-light);
    }

  }
  @media screen and (max-width: 767px) {
    padding-top: 0;

    .info {
      h1 {
        display: none;
      }

      p {
        font-size: 1rem !important;
        text-align: center;
      }
    }
  }

  .image {
    img {
      width: 480px;
      height:auto;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1rem 0;
    .info {
      align-items: flex-start;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.75rem;
      }
    }

    .image {
      text-align: center;
      margin: 1rem auto;

      img {
        width: 300px !important;
        height:auto !important;
      }
    }
  }
`;

export const ServicesContainer = styled.div`
  flex-direction: column;
  .call {
    h2 {
      font-size: 1.5rem;
      color: var(--text-light);
      font-weight: 300;
      text-align: start;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 2rem;
      color: var(--text);
      font-weight: 500;
      text-align: start;

      span {
        color: var(--main-blue);
      }
    }

    @media screen and (max-width: 767px) {
      h2 {
        font-size: 1.125rem;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 1rem;

    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const AboutMeiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem 0;

  h2 {
    font-size: 1.5rem;
    color: var(--text);
    font-weight: 700;
    text-align: start;

    @media screen and (max-width: 767px) {
      font-size: 1.125rem;
    }
  }

  ul {
    list-style: none;
    color: var(--text);
    margin-top: 1rem;
    li {
      margin-left: 1rem;
      position: relative;
      margin-bottom: 0.5rem;

      p {
        max-width: 300px;
      }
    }
    li::before {
      position: absolute;
      display: inline-block;
      top: 4px;
      left: -1rem;
      content: "";
      width: 8px;
      height: 8px;
      background: var(--main-blue);
      color: var(--main-blue);
      border-radius: 50%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  p {
    font-size: 1rem;
    color: var(--text);
    margin-top: 1rem;
    max-width: 500px;
  }

  @media screen and (max-width: 767px) {
    gap: 1rem;
    color: red;
    grid-template-columns: repeat(1, 1fr);

    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
    }

    ul {
      li {
        font-size: 0.875rem;
      }
    }
  }
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;

  .image {
    width: 100%;
    img {
      width: 80%;

    }
  }

  .content {
    h1 {
      font-size: 2rem;
      color: var(--text);
      font-weight: 500;
      text-align: start;
      margin-bottom: 0.5rem;
      line-height: 1.3;

      span {
        color: var(--main-blue);
      }
    }

    p {
      font-size: 1rem;
      color: var(--text-light);
      margin-top: 1rem;
      line-height: 1.4;
    }
  }

  @media screen and (max-width: 767px) {
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem 0;

    .image {
      order: 2;
      text-align: center;

      img {
        width: 180px;
        height:auto;
      }
    }

    .content {
      order: 1;
    }
  }
`;

export const ContactUsContainer = styled.div`
  margin-top: 1.5rem;
  background: var(--bg-blue);

  .title {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0 0;

    h1 {
      font-size: 2rem;
      color: var(--text);
      font-weight: 500;
      text-align: start;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    p {
      font-size: 1rem;
      color: var(--text-light);
      line-height: 1.4;
    }
  }
`;

export const ContactUsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 0 0 0;
    gap: 1rem;

    .MuiFormControl-root {
      max-width: 400px;
    }

    button {
      width: 200px;
      font-family: 'Open Sans', sans-serif;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    img {
      width: 480px;
      height:auto;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem 0;

    .content {
      padding: 1rem 0 0 0;
    }

    .image {
      margin-top: 1rem;
      img {
        width: 100%;
        height:auto;
      }
    }
  }
`;