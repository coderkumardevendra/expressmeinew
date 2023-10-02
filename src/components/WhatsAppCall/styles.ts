import styled from "styled-components";

export const WhatsAppCallContainer = styled.a`
  position: fixed;
  bottom: 5%;
  right: 5%;
  background: var(--sucess-text);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease-in-out;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2) contrast(1.2);
  }

  svg {
    width: 25px;
    height: 25px;
    color: var(--white);
  }
`;