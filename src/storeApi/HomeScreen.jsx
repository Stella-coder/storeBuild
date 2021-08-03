import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pic from "./1.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [fetchData, setFetchData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:2003/api");
    setFetchData(res.data.data);
    console.log(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    await axios
      .delete(`http://localhost:2003/api${id}`)
      .then((cg) => console.log(cg));
    window.location.reload();
  };

  return (
    <Container>
      {fetchData?.map((item) => (
        <Wrapper key={item._id}>
          <Image src={item.image} />
          <Description>{item.description}</Description>
          <Category>{item.category}</Category>
          <Color>
            <Cost
              onClick={() => {
                deleteData(item._id);
                console.log("hy");
              }}
            >
              3000
            </Cost>
            <Vr />
            <Cost>Read More</Cost>
            <Vr />
            <Cost>{fetchData.length}</Cost>
          </Color>
        </Wrapper>
      ))}
    </Container>
  );
};

export default HomeScreen;

const Cost = styled.div``;
const Vr = styled.div`
  height: 60px;
  width: 2px;
  background-color: black;
  opacity: 0.3;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #041422;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(100 100 100 / 69%) 10px 12px 10px -10px;
  color: black;
  margin: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;
const Description = styled.div`
  margin-top: 20px;
`;
const Category = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 20px;
  flex: 1;
`;

const Color = styled.div`
  width: 100%;
  background-color: #eb2b0a;
  height: 70px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
