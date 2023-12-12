import { useState } from "react";
import {
  RiTodoFill,
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiSave2Fill,
  RiCheckDoubleFill,
} from "react-icons/ri";

import Button from "../UI/Button";

const Todo = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  const [todoText, setTodoText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);
  const todoClasses = [
    "list-group-item",
    "d-flex",
    "align-items-center",
    "overflow-hidden",
    "user-select-none",
    "py-3",
  ];

  if (todo.isCompleted) {
    todoClasses.push(
      "text-decoration-line-through text-body-tertiary bg-body-secondary",
    );
  }

  const editTodoTextHandler = () => {
    setIsEditing(true);
  };

  const todoEditFormOnSubmitChangeHandler = (e) => {
    e.preventDefault();
    updateTodo({
      ...todo,
      text: todoText,
    });
    setIsEditing(false);
  };

  return (
    <div
      className={todoClasses.join(" ")}
      onDoubleClick={() =>
        updateTodo({ ...todo, isCompleted: !todo.isCompleted })
      }
    >
      <RiTodoFill className="me-3" />
      <span className="me-auto">{todo.text}</span>
      <Button
        className="btn-sm btn-primary me-2"
        onClick={() => updateTodo({ ...todo, isCompleted: !todo.isCompleted })}
      >
        <RiCheckDoubleFill />
      </Button>
      <Button
        className="btn-sm btn-secondary me-2"
        onClick={editTodoTextHandler}
      >
        <RiEdit2Fill />
      </Button>
      <Button className="btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
        <RiDeleteBin2Fill />
      </Button>
      {isEditing && (
        <form
          className="position-absolute top-0 bottom-0 start-0 end-0 p-2 d-flex align-items-center bg-light"
          onSubmit={(e) => todoEditFormOnSubmitChangeHandler(e)}
        >
          <input
            type="text"
            className="form-control me-2"
            placeholder="Write todo here"
            defaultValue={todo.text}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button type="submit" className="btn-primary text-nowrap">
            <RiSave2Fill className="me-2" />
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default Todo;
