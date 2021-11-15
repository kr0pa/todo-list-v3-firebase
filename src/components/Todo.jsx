import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import db from "../firebase";
import { useState } from "react";

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  cursor: default;
`;

const TodoSectionRight = styled.div`
  display: flex;
  align-items: center;

  > .MuiIconButton-root {
    transition: 0.3s;
  }

  > .MuiIconButton-root:nth-child(1) {
    background-color: orange;

    :hover {
      background-color: yellow;
    }
  }

  .MuiSvgIcon-root {
    font-size: 13px;
  }

  > .MuiIconButton-root:nth-child(2) {
    background-color: chocolate;
    margin-left: 5px;

    :hover {
      background-color: chartreuse;
    }

    .MuiSvgIcon-root {
      color: white;
    }
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 8px;

  :focus {
    background-color: #f3eded;
  }
`;

function Todo({ id, name, checked }) {
  const [task, setTask] = useState(name);

  const handleChecked = () => {
    db.collection("todos").doc(id).set(
      {
        checked: !checked,
      },
      { merge: true }
    );
  };

  const handleDelete = () => {
    db.collection("todos").doc(id).delete();
  };

  const handleChange = (e) => {
    setTask(e.target.value);

    db.collection("todos").doc(id).update(
      {
        name: e.target.value,
      },
      { merge: true }
    );
  };

  return (
    <TodoContainer>
      <div>
        <Input
          value={task}
          onChange={handleChange}
          type="text"
          style={{
            textDecoration: checked ? "line-through" : null,
          }}
        />
        <p
          style={{
            fontSize: "9px",
            fontWeight: 700,
            color: "chocolate",
            marginTop: "10px",
          }}
        >
          By edytować wpisz nową wartość!
        </p>
      </div>

      <TodoSectionRight>
        <IconButton onClick={handleChecked}>
          <AddIcon />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </TodoSectionRight>
    </TodoContainer>
  );
}

export default Todo;
