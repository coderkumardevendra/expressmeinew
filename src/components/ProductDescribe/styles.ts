import styled from "styled-components";

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e1e4e8;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 20px;
  color: var(--text);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  
  th,
  td {
    padding: 8px 16px;
    border: 1px solid #e1e4e8;
  }

  .text-bold {
    font-weight: 700;
  }
`;