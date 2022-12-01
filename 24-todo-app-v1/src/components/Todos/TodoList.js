import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos, deleteTodo } = props;
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>To do list is epmty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todos} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
