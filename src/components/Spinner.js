import { DotLoader } from "react-spinners";

const override = `
  display: block;
  margin: 0 auto;
  color: red;
`;
function Spinner() {
  return (
    <div className="sweet-loading">
      <DotLoader color="var(--primary)" css={override} size={50} />
    </div>
  );
}

export default Spinner;
