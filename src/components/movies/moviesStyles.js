import styled from "@emotion/styled";

export const MovieContainer = styled.div`
  margin-top: 80px;
  max-width: 100%;
  display: grid;
  column-gap: 32px;
  row-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 850px) {
    margin-top: 120px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardStyle = styled.div`
  color: white;
  :hover {
    background-color: var(--input-color);
  }
  background-color: var(--card-color);
  border-radius: 12px;
  margin: 0 auto;
  height: 504px;
  width: 282px;
  height: 100%;
  padding: 8px;
  text-decoration: none;
  a {
    text-decoration: none;
  }
`;
export const DeleteBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  color: var(--white);
  padding: 8px 12px;
  :hover {
    color: var(--error);
    font-size: 32px;
  }
`;

export const DataMovie = styled.div`
  padding: 8px 16px 16px 16px;
  span {
    color: white;
    display: block;
    padding-top: 8px;
  }
`;

export const ImgMovie = styled.div`
  
  img {
    width: 266px;
    height: 400px;
  }
`;
