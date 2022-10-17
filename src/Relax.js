import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import FlexColumn from "./UI/FlexColumn";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
const Relax = () => {
  return (
    <div>
      <Section>
        <FlexColumn>
          <span className="relax">
            Just sit & relax We plan your dream space to Reality...
          </span>
          <span>Please wait...</span>
          <span>Original & Unique Architectural Design</span>
          <span>for your Space is in progress</span>
          <span>
            Thank you for choosing <b>Online Architects</b>
          </span>
          <Button className="portfolio">
            CLICK HERE TO VIEW OUR PORTFOLIO
          </Button>
          <span>
            We will send the detailed Architectural Plans and Drawings as
            applicable by
          </span>
          <span className="mail_whatsapp">
            <SiGmail className="mail" />
            &nbsp;&nbsp;e-mail&nbsp; & &nbsp;
            <RiWhatsappFill className="whatsapp" />
            &nbsp;&nbsp;Whatsapp.
          </span>
        </FlexColumn>
      </Section>
    </div>
  );
};

export default Relax;

const Section = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  .relax {
    font-size: 32px;
    font-weight: bold;
    color: #828282;
    font-family: "Allura", cursive;
  }
  span {
    padding-top: 10px;
    font-size: 12px;
  }
  .portfolio {
    margin: 10px;
    font-size: 10px;
    font-weight: bold;
  }
  .mail_whatsapp {
    font-size: 14px;
  }
  .mail {
    font-size: 16px;
    color: #ff3b3b;
  }
  .whatsapp {
    font-size: 16px;
    color: #00c700;
  }
`;
