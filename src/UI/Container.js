import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  width: 700px;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 800px) {
    max-width: 600px;
    margin: auto;
  }
  @media screen and (max-width: 700px) {
    width: 500px;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: auto;
    //450px;
  }
`;

export default Container;
