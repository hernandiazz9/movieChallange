import styled from "@emotion/styled";

export const CreateEditMovieContainer = styled.div`
  display: flex;
  height: 504px;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
`;

export const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 473px;
  height: 100%;
  background-color: var(--input-color);
  border: 2px dashed #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  .fa-download {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const FormMovieData = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

export const ContainerInputs = styled.div`
  margin-bottom: 64px;
`;
export const InputText = styled.input`
  color: white;
  background-color: var(--input-color);
  display: block;
  margin-bottom: 24px;
  border-radius: 10px;
  border: none;
  padding-left: 16px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const Button = styled.button`
  background-color: ${(props) =>
    props.btnColor ? "var(--primary)" : "transparent"};
  /* border: none; */
  border-color: white;
  border: ${(props) => props.btnColor && "none"};

  color: white;
  border-radius: 10px;
  padding: 16px 59px;
  margin-right: 16px;
`;

export const CreateMSG = styled.h3`
  margin-top: 24px;
  margin-left: 12px;
  color: var(--primary);
`;
