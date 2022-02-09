import styled from "@emotion/styled";



export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: ${props=>props.title?'space-between':'flex-end'};
  h2 {
    display: inline-block;
    vertical-align: sub;
    margin-right: 16px;
  }
  .fa-plus-circle{
    font-size: 24px
  }
`;
export const Logout = styled.div`
  align-self: center;
  cursor: pointer;
  span {
    margin-right: 16px;
    vertical-align: top;
  }
  .fa-sign-out-alt{
    font-size: 24px
  }
  
`;