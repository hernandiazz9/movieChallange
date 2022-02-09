import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: ${(props) => (props.noHome ? "100vh" : "auto")};
  padding-top: 60px;
  padding-bottom: 60px;
  
  @media screen and (min-width: 600px) {
    padding: 120px;
    padding-bottom: 220px;

  }

`;
