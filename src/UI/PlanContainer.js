import styled from "styled-components";
import BG from "../Assets/bg.png";

const PlanContainer = ({ children }) => {
  return (
    <PlanContainerdiv>
      <div className="children">{children}</div>
      <div className="white_overlay">
        <div className="diamond"></div>
      </div>
    </PlanContainerdiv>
  );
};

export default PlanContainer;

const PlanContainerdiv = styled.div`
  width: 100%;
  height: 110px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  background-image: url(${BG});
  background-size: cover;
  margin-top: 20px;
  .children {
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  .white_overlay {
    border-radius: 5px;
    border: 1px solid black;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    position: relative;
    top: -6px;
    left: -6px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .diamond {
    left: -1px;
    width: 150px;
    border-bottom: 100px solid #ffd100;
    transform: rotateX(180deg);
    position: absolute;
    border-top-left-radius: 5px;
    border-right: 80px solid transparent;
  }
`;
