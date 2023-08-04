import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [todoTitle, setTodoTiTle] = useState("");

  const changeTodoTitle= (event)=>{
    setTodoTiTle(event.target.value);
  }

  const addTodo = (event)=>{
    event.preventDefault();
    setListTodo([...listTodo,{id: uuid(), value: todoTitle}]);
    setTodoTiTle("");
  }

  const deleteTodo = (id)=>{
    setListTodo([...listTodo].filter(el => {
      return el.id !== id
    }));
  }

  const updateTodo= (updatedTodo)=>{
    setListTodo([...listTodo].map(el => el.id === updatedTodo.id ? updatedTodo : el));
  }
  return (
    <div>
      <form action="submi" onSubmit={addTodo}>
        <input type="text" value={todoTitle} onChange={changeTodoTitle} required={true} />
        <button>Add</button>
      </form>
      <ul>
        {listTodo.map(el => <Todo key={el.id} el={el}  updateTodo={updateTodo} onClick={deleteTodo}/>)}
      </ul>
    </div>
  );
}

export default App
