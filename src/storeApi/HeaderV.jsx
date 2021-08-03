import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderV = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/input">
          <span>Add</span>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default HeaderV;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  background-color: darkblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  span {
    margin-left: 20px;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
`;
