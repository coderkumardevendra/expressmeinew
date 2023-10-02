import styled from "styled-components";

export const PageTitle = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }
`;

export const InfoSectionContainer = styled.section`
  background: var(--white);
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.5rem;

    span {
      color: var(--main-blue);
      font-weight: 700;
    }
  }

  @media screen and (max-width: 767px) {
    align-items: start;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const TerminologySectionContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  p {
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 400;
        color: var(--text);
        margin-bottom: 0.5rem;

        span, a {
          color: var(--main-blue);
          font-weight: 700;
        }
      }

  ul {
    list-style: none;
    margin-left: 1rem;

    li {
      p {
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 400;
        color: var(--text);
        margin-bottom: 0.875rem;

        span, a {
          color: var(--main-blue);
          font-weight: 700;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 1rem;
    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }

    ul {
      margin-left: 1rem;
      li {
        p {
          font-size: 0.875rem;
        }
      }
    }
  }
`;
