import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import app from "../base";
import firebase from "firebase";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const [myTask, setMyTask] = useState("");

  const deleteTask = async (id) => {
    await app.firestore().collection("task").doc(id).delete();
  };

  const createTask = async () => {
    await app.firestore().collection("task").doc().set({
      title: myTask,
      done: false,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMyTask("");
  };

  const updateData = async (id) => {
    await app.firestore().collection("task").doc(id).update({ done: true });
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("task")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        console.log(item);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Holder>
      <InputHolder>
        <input
          placeholder="Enter your task"
          value={myTask}
          onChange={(e) => {
            setMyTask(e.target.value);
          }}
        />
        <Button onClick={createTask}>Add</Button>
      </InputHolder>
      <Container>
        {data?.map(({ title, id, done }) => (
          <Wrapper key={id}>
            {done ? (
              <Color clr>
                <AiFillDelete
                  onClick={() => {
                    deleteTask(id);
                    console.log(id);
                  }}
                />
              </Color>
            ) : (
              <Color>
                <AiFillDelete
                  onClick={() => {
                    deleteTask(id);
                  }}
                />
              </Color>
            )}
            <span>{title}</span>
            <Icons>
              <AiFillEdit
                onClick={() => {
                  updateData(id);
                  console.log(id);
                }}
              />
            </Icons>
          </Wrapper>
        ))}
      </Container>
    </Holder>
  );
};

export default HomeScreen;

const Holder = styled.div`
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
`;

const Button = styled.div`
  height: 40px;
  width: 100px;
  border: 2px solid white;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px 0px 20px 0px;
  background-color: #db2424;
  transition: all 350ms;
  &:hover {
    background-color: transparent;
  }
`;

const InputHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
  flex-direction: column;
  input {
    width: 280px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding-left: 5px;
  }
`;

const Container = styled.div`
  background-color: antiquewhite;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 50px;
  width: 280px;
  //background-color: #b8db1b;
  border: 2px solid white;
  border-radius: 30px;
  margin: 20px;
  box-shadow: rgb(0 0 0 / 79%) 0px 19px 10px -10px;
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 5px;
    flex: 1;
  }
  //color: white;
`;
//#1bdb5b
const Color = styled.div`
  height: 100%;
  width: 50px;
  background-color: ${({ clr }) => (clr ? "green" : "red")};
  border-radius: 30px 0px 40px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Icons = styled.div`
  margin-right: 10px;
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #1bdb5b;
  cursor: pointer;
`;
