import { useEffect, useState } from "react";
import db from "../firebase";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setTodos(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
  }, []);

  return (
    <div>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          checked={todo.checked}
        />
      ))}
    </div>
  );
}

export default Todos;
