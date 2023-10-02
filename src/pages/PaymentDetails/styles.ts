import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--main-blue);
  margin-bottom: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

export const PaymentCustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--main-blue);

    @media screen and (max-width: 767px) {
      font-size: 1rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: .5rem;
    margin-bottom: 1rem;


    h3 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--main-blue);
    }

    p {
      width: 100%;
      font-size: .875rem;
      font-weight: 400;
      color: var(--text);
    }
  }

`;

export const PaymentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  background: var(--white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.5rem;
  padding: 1rem;

  .pix, .boleto {
    width: 100%;
    h3 {
      font-size: 1.25rem;
      font-weight: 500;
      text-align: center;
      color: var(--main-blue);
  
      @media screen and (max-width: 767px) {
        font-size: 1rem;
      }
    }

    .payment_details {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .5rem;

      a {
        color: var(--main-blue);
        font-size: 1rem;
        font-weight: 500;


        &:hover {
          text-decoration: underline;
          color: var(--main-blue-hover);
        }
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-light);
        margin: 1rem 0;

        @media screen and (max-width: 767px) {
          text-align: center;
        }
      }

      .payment_url {
        width: 100%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        @media screen and (max-width: 767px) {
          max-width: 90%;
        }
      }
    }
    
  }

  .credit_card {
    width: 100%;

    .payment_details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      margin-bottom: 1rem;

      p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-light);
        margin: 1rem 0;

        @media screen and (max-width: 767px) {
          text-align: center;
        }
      }
    }

    .order-details {
      h2 {
        font-size: 1.55rem;
        font-weight: 500;
        color: var(--main-blue);
        margin-bottom: 1rem;
        
        @media screen and (max-width: 767px) {
          font-size: 1.25rem;
        }
      }

      .order-details__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        gap: .5rem;
        margin-bottom: 1rem;

        h3 {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--main-blue);
        }

        p {
          width: 100%;
          font-size: 1rem;
          font-weight: 400;
          color: var(--text);
        }
      }
    }
  }

  .max-width {
    max-width: 80%;
  }
`;
