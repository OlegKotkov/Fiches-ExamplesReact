import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodosHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const togleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>ToDoApp</h1>
      <TodoForm addTodo={addTodosHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodo={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        togleTodo={togleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have comleted ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;
