import { useState } from "react";
import styled from "styled-components";
import db from "./firebase";
import firebase from "firebase";
import Todos from "./components/Todos";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const AppSection = styled.div`
  background-color: whitesmoke;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;

  > form {
    > button {
      margin-left: 10px;
      padding: 10px 20px;
      text-transform: uppercase;
      color: white;
      background-color: chocolate;
      cursor: pointer;
      border: 1px solid whitesmoke;
      border-radius: 13px;
      transition: 0.3s;

      :hover {
        background-color: orange;
        border: 1px solid gray;
      }

      :active {
        transform: scale(0.97);
      }
    }

    > input {
      padding: 10px;
      border-radius: 999px;
      border: none;
      outline: none;
      padding-left: 20px;
      border: 1px solid whitesmoke;
      transition: 0.3s;

      ::placeholder {
        letter-spacing: 2px;
        color: rgb(180, 179, 179);
        font-size: 12px;
      }

      :focus {
        border: 1px solid rgb(180, 179, 179);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
    }
  }
`;

const BottomSection = styled.div``;

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputValue) {
      db.collection("todos")
        .add({
          name: inputValue,
          checked: false,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setInputValue("");
        });
    }
  };

  return (
    <AppContainer>
      <AppSection>
        <TopSection>
          <form>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Wpisz zadanie..."
            />
            <button onClick={handleAddTodo}>dodaj</button>
          </form>
        </TopSection>

        <div
          style={{
            height: "1px",
            backgroundColor: "chocolate",
            margin: "20px 0",
          }}
        />

        <BottomSection>
          <Todos />
        </BottomSection>
      </AppSection>
    </AppContainer>
  );
}

export default App;
