import React from "react";
import styled from "styled-components";
import Container from "./UI/Container";
import FlexColumn from "./UI/FlexColumn";
import FlexRow from "./UI/FlexRow";
import Numbered from "./UI/Numbered";
import Logo from "./Assets/Logo.png";
import Sketch from "./Assets/sketch.jpg";
import InputBtmBrd from "./UI/InputBtmBrd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const Four = () => {
  return (
    <Section>
      <Container>
        <Numbered>4</Numbered>
        <FlexRow className="flex-direction">
          <FlexColumn>
            <img src={Logo} className="logo" />
            <img src={Sketch} className="sketch" />
          </FlexColumn>
          <FlexColumn>
            <span>Create Account</span>
            <FlexRow>
              <InputBtmBrd placeholder="First Name" className="first_name" />
              <InputBtmBrd placeholder="Last Name" />
            </FlexRow>
            <InputBtmBrd placeholder="Mobile Number" required />
            <InputBtmBrd placeholder="Email" required />
            <InputBtmBrd type="password" placeholder="Choose Password" />
            <button className="sign_up">Sign Up</button>
            <span className="grey">Or</span>
            <FlexRow>
              <button className="other_sign_up">
                <FlexRow style={{ justifyContent: "center" }}>
                  <FcGoogle className="g_logo" />
                  &nbsp;GOOGLE
                </FlexRow>
              </button>
              <button className="other_sign_up">
                <FlexRow style={{ justifyContent: "center" }}>
                  <FaFacebook className="f_logo" />
                  &nbsp;FACEBOOK
                </FlexRow>
              </button>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </Container>
    </Section>
  );
};

export default Four;

const Section = styled.div`
  position: relative;
  font-size: 16px;
  margin-top: 2rem;
  .logo {
    max-height: 50px;
    padding-top: 0px;
  }
  .sketch {
    padding-top: 80px;
    width: 100%;
    opacity: 0.3;
  }
  .first_name {
    margin-right: 15px;
  }
  .sign_up {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #828282;
    color: white;
    margin: 20px;
  }
  .grey {
    font-size: 10px;
    color: #828282;
  }
  .other_sign_up {
    width: 100%;
    margin: 20px 5px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    background-color: #dbd9d9;
  }
  .g_logo {
    font-size: 18px;
  }
  .f_logo {
    font-size: 18px;
    color: #0036fd;
  }
  @media screen and (max-width: 700px) {
    .flex-direction {
      flex-direction: column;
    }
    .sketch {
      padding-top: 20px;
    }
  }
`;
