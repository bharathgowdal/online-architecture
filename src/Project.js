import { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "./UI/Container";
import FlexColumn from "./UI/FlexColumn";
import FlexRow from "./UI/FlexRow";

const Project = (props) => {
  const location = useLocation();
  const [data, setData] = useState(location.state.details);
  console.log(location.state.details);
  return (
    <Container>
      <FlexColumn>
        <FlexRow style={{ justifyContent: "space-between" }}>
          <div>Id</div>
          <div>{data.id}</div>
        </FlexRow>
        <FlexRow style={{ justifyContent: "space-between" }}>
          <span>Width</span>
          <span>{data.width}</span>
        </FlexRow>
        <FlexRow style={{ justifyContent: "space-between" }}>
          <span>Length</span>
          <span>{data.length}</span>
        </FlexRow>
        <FlexRow style={{ justifyContent: "space-between" }}>
          <span>Area</span>
          <span>{data.area}</span>
        </FlexRow>
      </FlexColumn>
    </Container>
  );
};

export default Project;
