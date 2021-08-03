import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const InputScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(image);
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    await axios
      .post("http://localhost:2003/api/", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    window.location.reload();
  };
  return (
    <Container1>
      <Wrapper1>
        <input
          placeholder="Enter your title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="Enter your desc"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          placeholder="Enter your category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          placeholder="Enter your price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <a>
          <input
            type="file"
            onChange={(e) => {
              handleUpload(e);
            }}
          />
        </a>
        <Button
          onClick={() => {
            postData();
          }}
        >
          Add
        </Button>
      </Wrapper1>
    </Container1>
  );
};

export default InputScreen;

const Container1 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #041422;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
`;
const Wrapper1 = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 300px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
  }
  a {
    input {
      width: 300px;
      height: 40px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
    }
  }
`;
const Button = styled.div`
  height: 40px;
  width: 100px;
  background-color: aquamarine;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: azure;
  }
`;
