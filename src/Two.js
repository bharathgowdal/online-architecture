import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./UI/Container";
import FlexColumn from "./UI/FlexColumn";
import FlexRow from "./UI/FlexRow";
import Input from "./UI/Input";
import Numbered from "./UI/Numbered";
import { BiUpload } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Button from "./UI/Button";
const Two = () => {
  const [noOfFloor, setNoOfFloor] = useState(0);
  const [basement, setBasement] = useState(false);
  const [ground, setGround] = useState(false);
  const [floorDetails, setFloorDetails] = useState([]);
  const handelBasement = () => {
    setBasement(!basement);
  };
  const handelGround = () => {
    setGround(!ground);
  };
  useEffect(() => {
    setFloorDetails([]);
    if (basement) {
      setFloorDetails([...floorDetails, { label: "Basement" }]);
    }
    if (ground) {
      setFloorDetails([...floorDetails, { label: "Still" }]);
    }
    if (noOfFloor > 0) {
      for (let i = 1; i <= noOfFloor; i++) {
        setFloorDetails([...floorDetails, { label: `Floor ${i}` }]);
      }
    }
    console.log(floorDetails);
  }, [noOfFloor, setNoOfFloor, basement, setBasement, ground, setGround]);

  return (
    <Section>
      <Container>
        <Numbered>2</Numbered>
        <label className="details">
          * Select basement, ground & number of floors. Enter space features
          like kitchen, living room etc., and upload rough sketch or image.
        </label>
        <div className="floors">
          <FlexRow className="base_ground">
            <FlexRow>
              <Input
                type="checkbox"
                value={basement}
                onChange={handelBasement}
                name="basement"
                className="checkbox"
              />
              &nbsp;<label htmlFor="basement">Basement</label>
            </FlexRow>
            <FlexRow>
              <Input
                type="checkbox"
                name="ground"
                value={ground}
                onChange={handelGround}
                className="checkbox"
              />
              &nbsp;<label htmlFor="ground">Still Floor</label>
            </FlexRow>
          </FlexRow>
          <FlexRow className="no_floor">
            <label htmlFor="floors">No. of Floors</label>
            <Input
              type="number"
              name="floors"
              value={noOfFloor}
              onChange={(e) => setNoOfFloor(e.target.value)}
              className="floor_input"
            />
          </FlexRow>
          <table>
            <thead>
              <tr>
                <th>No. Floors</th>
                <th>Details</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>
              {floorDetails.map((value, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <label>{value.label}:</label>
                    </td>
                    <td>
                      <Input type="text" className="details" />
                    </td>
                    <td>
                      <FlexColumn>
                        <button className="styled_button">
                          <BiUpload className="upload_button" />
                        </button>
                        <span className="upload_info">
                          <AiOutlineInfoCircle />
                          &nbsp;Upload Sketch/Image
                        </span>
                      </FlexColumn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* discription */}

          <FlexColumn>
            <Button>PROCEED</Button>
          </FlexColumn>
        </div>
      </Container>
    </Section>
  );
};

export default Two;

const Section = styled.div`
  position: relative;
  font-size: 16px;
  margin-top: 2rem;
  .details {
    margin-bottom: 20px;
    font-size: 22px;
  }
  .checkbox {
    height: 12px;
    width: 12px;
    min-width: auto;
  }

  .base_ground,
  .no_floor {
    margin-bottom: 20px;
  }
  .floor_input {
    margin-left: 20px;
  }
  table {
    width: 100%;
    border: none !important;
    border-collapse: collapse;
  }
  th {
    padding: 10px;
    border: hidden !important;
    background-color: #f4f4f4;
  }
  td {
    padding: 10px;

    border: none !important;
    border-collapse: collapse;
  }
  .details {
    height: 4rem;
  }
  .styled_button {
    padding: 5px 40px;
    background: transparent;
    border-radius: 5px;
  }
  .upload_button {
    font-size: 24px;
    padding: 3px;
    background: rgb(254, 152, 0);
    background: linear-gradient(
      90deg,
      rgba(254, 152, 0, 1) 0%,
      rgba(255, 235, 0, 1) 100%
    );
    border-radius: 20px;
  }
  .upload_info {
    font-size: 8px;
    margin-top: 4px;
  }
  Button {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
