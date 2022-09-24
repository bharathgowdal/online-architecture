import styled from "styled-components";

const Numbered = ({ children }) => {
  return (
    <Number>
      <div className="number">{children}</div>
    </Number>
  );
};

export default Numbered;

const Number = styled.div`
  padding: 5px;
  border-color: #000;
  border-width: 1px;
  border-style: dashed;
  width: fit-content;
  border-radius: 40px;
  position: absolute;
  top: -25px;
  left: -25px;
  .number {
    background-image: linear-gradient(to right, #ff9f00, #f9eb00);
    border-radius: 40px;
    padding: 18px 22px;
    border-width: 0;
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    position: relative;
    top: 0.25;
    left: 40%;
  }
`;
