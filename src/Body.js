import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Four from "./Four";
import One from "./One";
import Relax from "./Relax";
import Three from "./Three";
import Two from "./Two";
import FlexColumn from "./UI/FlexColumn";
const Body = () => {
  return (
    <Section>
      <FlexColumn>
        <One />
        <Two />
        {/* <Three /> */}
        <Four />
        <Relax />
      </FlexColumn>
      <Footer />
    </Section>
  );
};

export default Body;

const Section = styled.section`
  width: 100%;
  position: absolute;
  margin-top: 100vh;
  padding: 4rem 0 0 0;
`;
