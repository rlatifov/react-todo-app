import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, updateTodo, deleteTodo } = props;
  return (
    <div className="list-group">
      {!todos.length && (
        <i className="small text-muted ps-2">Todo list is empty.</i>
      )}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
