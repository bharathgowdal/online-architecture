import React from "react";
import styled from "styled-components";
import Container from "./UI/Container";
import FlexColumn from "./UI/FlexColumn";
import FlexRow from "./UI/FlexRow";
import Numbered from "./UI/Numbered";
import PlanContainer from "./UI/PlanContainer";
import ButtonPlain from "./UI/ButtonPlain";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Button from "./UI/Button";

const Three = () => {
  return (
    <Section>
      <Container>
        <Numbered>3</Numbered>
        <label className="details">Select Architectural plan:</label>
        <PlanContainer>
          <div className="content">
            <FlexRow className="justify">
              <FlexColumn className="justify">
                <span className="plan">Basic Plan</span>
                <span className="plan_amt">₹ 5000</span>
                <span className="plan_gst">+ GST</span>
              </FlexColumn>
              <FlexColumn>
                <ul>
                  <li>Plan view</li>
                  <li>Interior Layout</li>
                </ul>
              </FlexColumn>
              <FlexColumn>
                <ButtonPlain>Try Now</ButtonPlain>
                <ButtonPlain>Select this plan</ButtonPlain>
                <span className="upload_info">
                  <AiOutlineInfoCircle />
                  &nbsp;Upload Sketch/Image
                </span>
              </FlexColumn>
            </FlexRow>
          </div>
        </PlanContainer>
        <PlanContainer>
          <div className="content">
            <FlexRow className="justify">
              <FlexColumn className="justify">
                <span className="plan">Basic Plan</span>
                <span className="plan_amt">₹ 5000</span>
                <span className="plan_gst">+ GST</span>
              </FlexColumn>
              <FlexColumn>
                <ul>
                  <li>Plan view</li>
                  <li>Interior Layout</li>
                </ul>
              </FlexColumn>
              <FlexColumn>
                <ButtonPlain>Try Now</ButtonPlain>
                <ButtonPlain>Select this plan</ButtonPlain>
                <span className="upload_info">
                  <AiOutlineInfoCircle />
                  &nbsp;Upload Sketch/Image
                </span>
              </FlexColumn>
            </FlexRow>
          </div>
        </PlanContainer>
        <PlanContainer>
          <div className="content">
            <FlexRow className="justify">
              <FlexColumn className="justify">
                <span className="plan">Basic Plan</span>
                <span className="plan_amt">₹ 5000</span>
                <span className="plan_gst">+ GST</span>
              </FlexColumn>
              <FlexColumn>
                <ul>
                  <li>Plan view</li>
                  <li>Interior Layout</li>
                </ul>
              </FlexColumn>
              <FlexColumn>
                <ButtonPlain>Try Now</ButtonPlain>
                <ButtonPlain>Select this plan</ButtonPlain>
                <span className="upload_info">
                  <AiOutlineInfoCircle />
                  &nbsp;Upload Sketch/Image
                </span>
              </FlexColumn>
            </FlexRow>
          </div>
        </PlanContainer>
        <FlexColumn className="button_proceed">
          <Button>PROCEED</Button>
        </FlexColumn>
      </Container>
    </Section>
  );
};

export default Three;

const Section = styled.div`
  position: relative;
  font-size: 16px;
  margin-top: 2rem;
  .content {
    width: 85%;
    padding: 5px;
    .justify {
      align-items: start;
    }
  }
  .plan {
    font-size: 14px;
  }
  .plan_amt {
    font-weight: bold;
    padding-top: 20px;
  }
  .plan_gst {
    font-size: 8px;
    font-weight: bold;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  li {
    padding: 5px;
  }
  .upload_info {
    font-size: 8px;
  }
  .button_proceed {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
