import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pic from "./1.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const { id } = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:2003/api/${id}`);
    console.log(res);
  };
  getData();
  return (
    <Container>
      <Wrapper>
        <Image src={pic} />
        <Holder>
          <Category>Women</Category>
          <div>this is {id} </div>
          <Price>450</Price>
        </Holder>
        <Description>des</Description>
      </Wrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 600px;
  font-weight: bold;
`;
const Image = styled.img`
  height: 400px;
  width: 100%;
  border-radius: 10px;
`;
const Holder = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: lightblue;
  margin-top: 30px;
  height: 50px;
  align-items: center;
  border-radius: 5px;
`;
const Category = styled.div``;
const Price = styled.div``;
const Description = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;
