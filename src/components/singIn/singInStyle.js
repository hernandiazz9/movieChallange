import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: ${(props) => props.height}vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const Form = styled.form`
  /* margin-top: 20px; */
`;

export const Input = styled.input`
  display: block;
  background-color: var(--input-color);
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 0px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-top: 24px;
  border: ${(props) => (props.error ? " 1px solid red" : "none")};
  color: white;

`;
export const Remember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  input {
    border-radius: 5px;
    background-color: var(--input-color);
    margin-right: 10px;
  }
`;

export const ButtonInput = styled.input`
  margin-top: 24px;
  background-color:${(props) => (props.error ? " var(--error)" : "var(--primary)")} ;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 113px 10px 113px;

`;
