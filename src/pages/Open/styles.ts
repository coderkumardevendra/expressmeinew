import styled from "styled-components";

export const OpenPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  .call {
    text-align: center;
    align-self: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }

    h1 {
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: var(--text);

      span {
        color: var(--main-blue);
      }

      @media screen and (max-width: 767px) {
        font-size: 2.5rem;

        p {
          text-align: center;
        }
      }

      .value {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--text-light);

        span {
          color: var(--main-blue);
        }

        @media screen and (max-width: 767px) {
          display: block;
          margin-top: 0.5rem;
        }
      }
    }

    p {
      font-size: 1.125rem;
      font-weight: 400;
      color: var(--text-light);
    }

    @media screen and (max-width: 767px) {
      margin-top: 1rem;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        .value {
          font-size: 1rem;
        }

        p {
          font-size: 1rem;
        }
      }

      p {
        font-size: .875rem;
        margin-top: 1rem;
      }
    }
  }
`;

export const PaymentContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .fill-data {
    font-size: 1.225rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 1rem;

    @media screen and (max-width: 767px) {
      font-size: 1rem;
    }
  }

  .personalData, .cnpjData, .adressData .termsData, .faturamentoData {
    h3 {
      margin-top: 1rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);

    @media screen and (max-width: 767px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--text-light);
    margin-top: 0.5rem;
    margin-bottom: 1rem;

  }

  .button-payment-choose {
    @media screen and (max-width: 767px) { // mobile
      display: none;
    }
  }

  .input-mask {
    margin-top: 1rem;
  }

  .slice {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) { // mobile
      flex-direction: column;
    }
  }

  .Mui-error {
    margin: 0 !important;
    padding: 0 !important;
    color: var(--error-text) !important;
  }

  .checkbox-title {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .description-payment {
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text);
    margin-bottom: 1rem;
  }

  .label-payment {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
  }

  .label-input {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);

    a {
      color: var(--main-blue);
      text-decoration: none;
      margin: 0 0.5rem;

      &:hover {
        text-decoration: underline;
      }
    }
    div {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;

    }

    .big {
      @media screen and (max-width: 767px) { // mobile
        font-size: 0.9rem;
        max-width: 90%;

        input {
          margin-right: 0.5rem;
          height: 1rem;
          width: 1rem;
        }
      }
    }

    @media screen and (max-width: 767px) { // mobile
      font-size: .875rem;
    }
  }

  .button-payment {
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    background-color: var(--main-blue);
    border: none;
    border-radius: 0.25rem;
  }

  @media screen and (max-width: 767px) { // mobile
    grid-template-columns: 1fr;
  }
`;
