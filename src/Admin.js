import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./UI/Button";
import Container from "./UI/Container";

const data = [
  {
    id: 1,
    length: "243",
    width: "69",
    area: "64-965-0972",
  },
  {
    id: 2,
    length: "2",
    width: "0030",
    area: "65-367-5282",
  },
  {
    id: 3,
    length: "8824",
    width: "9195",
    area: "69-438-7563",
  },
  {
    id: 4,
    length: "9",
    width: "3523",
    area: "60-795-8060",
  },
  {
    id: 5,
    length: "1",
    width: "3",
    area: "71-220-3999",
  },
  {
    id: 6,
    length: "51",
    width: "2",
    area: "66-848-8125",
  },
  {
    id: 7,
    length: "777",
    width: "895",
    area: "20-300-5159",
  },
  {
    id: 8,
    length: "971",
    width: "4687",
    area: "18-883-8019",
  },
  {
    id: 9,
    length: "43",
    width: "37110",
    area: "08-766-1448",
  },
  {
    id: 10,
    length: "825",
    width: "0",
    area: "74-836-1641",
  },
];
const Admin = () => {
  return (
    <Container>
      <StyledDiv>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Length</th>
              <th>Width</th>
              <th>Area</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, i) => {
              return (
                <tr key={i}>
                  <td>{value.id}</td>
                  <td>{value.length}</td>
                  <td>{value.width}</td>
                  <td>{value.area}</td>
                  <td>
                    <Link to={`project/${value.id}`} state={{ details: value }}>
                      <Button>Visit</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledDiv>
    </Container>
  );
};

export default Admin;

const StyledDiv = styled.div`
  text-align: center;
  table {
    width: 100%;
    border: 1px solid #f4f4f4;
  }
  th {
    padding: 10px;
    background-color: #f4f4f4;
  }
  td {
    padding: 10px;
  }
`;
