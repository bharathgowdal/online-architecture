import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./UI/Container";
import Numbered from "./UI/Numbered";
import Select from "react-select";
import FlexRow from "./UI/FlexRow";
import Input from "./UI/Input";
import FlexColumn from "./UI/FlexColumn";
import EWNS from "./Assets/EWNS.png";
import Button from "./UI/Button";

const One = () => {
  const [isOther, setIsOther] = useState(false);
  const [length, setLength] = useState(29);
  const [width, setWidth] = useState(30);
  const [total, setTotal] = useState(600);

  const siteMeasurements = [
    { label: "20 x 30", value: 1 },
    { label: "30 x 40", value: 2 },
    { label: "30 x 50", value: 3 },
    { label: "40 x 60", value: 4 },
    { label: "60 x 80", value: 5 },
    { label: "others", value: 6 },
  ];
  const siteFacing = [
    { label: "NORTH", value: 1 },
    { label: "SOUTH", value: 2 },
    { label: "EAST", value: 3 },
    { label: "WEST", value: 4 },
    { label: "NORTH-EAST (NE)", value: 5 },
    { label: "NORTH-WEST (NW)", value: 6 },
    { label: "SOUTH-EAST (SE)", value: 7 },
    { label: "SOUTH-WEST (SW)", value: 8 },
  ];
  const SelectStyle = {
    control: (base) => ({
      ...base,
      minWidth: "12rem",
      border: "2px solid black",
    }),
  };
  useEffect(() => {
    setTotal(length * width);
  }, [length, width]);

  const areaHandler = (e) => {
    if (e.label === "others") {
      setIsOther(true);
    } else {
      setIsOther(false);
      let [length, width] = e.label.split("x");
      setLength(length);
      setWidth(width);
    }
  };
  return (
    <Section>
      <Container>
        <Numbered>1</Numbered>
        <label>* Enter site dimensions & facing direction :</label>
        <FlexRow className="site_msr">
          <div>Site Measurement (Sq ft) :</div>
          <div className="site_msr_select">
            <Select
              styles={SelectStyle}
              options={siteMeasurements}
              onChange={(e) => {
                areaHandler(e);
              }}
            />
          </div>
          {isOther ? (
            <FlexColumn className="msr_other">
              <div className="msr_other_label">* If others please specify:</div>
              <div className="site_msr_other">
                <input
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <span>&nbsp;x&nbsp;</span>
                <input
                  value={width}
                  onChange={(e) => {
                    setWidth(e.target.value);
                  }}
                />
              </div>
            </FlexColumn>
          ) : (
            ""
          )}
        </FlexRow>
        <FlexRow className="total_msr">
          <div>Total Measurement in Sq ft :</div>
          <div>
            <Input value={total} type="text" className="total_val" />
          </div>
        </FlexRow>
        <div className="note">
          * Note : For odd & large site measurements please contact us: +91
          9740811065
        </div>
        <div className="divider" />
        <FlexRow className="facing">
          <div>* Your Site Facing :</div>
          <div className="site_msr_select">
            <Select styles={SelectStyle} options={siteFacing} />
          </div>
        </FlexRow>

        {/*2 upload  */}

        <img src={EWNS} className="news_image" />
        <FlexColumn>
          <Button>PROCEED</Button>
        </FlexColumn>
      </Container>
    </Section>
  );
};

export default One;

const Section = styled.div`
  position: relative;
  font-size: 16px;
  label {
    margin-bottom: 20px;
    font-size: 22px;
  }
  FlexRow {
    margin-bottom: 1rem;
  }

  .site_msr {
    margin-bottom: 20px;
  }
  .site_msr_select {
    margin-left: 20px;
  }
  .msr_other_label {
    font-size: 12px;
  }
  .msr_other {
    width: 12rem;
  }
  .total_msr {
    margin-bottom: 20px;
  }
  .total_val {
    margin-left: 20px;
    font-size: 16px;
  }
  .site_msr_other {
    input {
      max-width: 3rem;
      height: 2.4rem;
      border: 2px solid black;
      border-radius: 5px;
      padding: 10px;
    }
    span {
      font-weight: bold;
      padding: 5px;
    }
  }
  .note {
    font-size: 12px;
    font-weight: bold;
    color: #2f69f0;
  }
  .divider {
    margin-bottom: 20px;
    width: 100%;
    border-bottom: 2px dashed black;
  }
  .facing {
    margin-left: 50px;
  }
  .news_image {
    margin-top: 30px;
    width: 25%;
  }
  Button {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    .site_msr {
      flex-direction: column;
    }
    .site_msr_select {
      margin: 10px 0;
    }
    .total_msr {
      flex-direction: column;
    }
    .total_val {
      margin: 10px 0;
    }
    .facing {
      flex-direction: column;
      margin: 10px 0;
    }
    .news_image {
      margin: auto;
    }
  }
`;
