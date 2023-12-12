import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todoText) {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="mb-3">
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Write todo here"
          aria-label="Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button className="btn-primary text-nowrap" type="submit">
          <RiAddCircleLine className="me-2" />
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
