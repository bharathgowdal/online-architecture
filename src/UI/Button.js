import styled from "styled-components";

const Button = styled.button`
  background: rgb(254, 152, 0);
  background: linear-gradient(
    90deg,
    rgba(254, 152, 0, 1) 0%,
    rgba(255, 235, 0, 1) 100%
  );
  color: black;
  width: auto;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: rgb(254, 152, 0);
    background: linear-gradient(
      90deg,
      rgba(254, 180, 0, 1) 0%,
      rgba(255, 245, 0, 1) 100%
    );
  }
`;

export default Button;
