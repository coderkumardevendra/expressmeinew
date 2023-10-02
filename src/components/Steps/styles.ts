import { Box } from "@mui/material";
import styled from "styled-components";

export const StepsContainer = styled(Box)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;

  @media screen and (max-width: 767px) {
    .labelStep {
      .MuiStepLabel-label {
        display: none;
      }
    }
  }

  .content {
    display: block;
    width: 100%;

    p {
      color: var(--main-blue);
      font-size: 1.2rem;
      font-weight: 500;
      margin: 0;
      margin-bottom: 1rem;
      font-family: 'Open Sans', sans-serif;
    }

    .step1,
    .step2,
    .step3 {
      .persoanlDataForm,
      .cnpjDataForm,
      .adressForm {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .slice {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }

        .checkbox-slice {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          color: var(--text) !important;

          @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            
          }
        }

        .link-term {
          color: var(--main-blue);
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .step4 {
      position: relative;
      .payment-form {
        position: relative;
      }
    }
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      font-family: 'Open Sans', sans-serif;
    }
  }
`;
