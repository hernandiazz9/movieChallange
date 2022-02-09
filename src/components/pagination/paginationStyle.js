import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 120px;
`;

export const PaginationButton = styled.button`
  color:white;
  background-color: transparent;
  border: none;
  margin-left: 8px ; 
  margin-right: 4px ; 
`;

export const PageNumber = styled.span`
  background-color: ${props=>`var(${props.btnColor})`};
  padding: 4px 12px;
  margin: 0 0 0 4px;
  border-radius: 4px;
  cursor:pointer;
`