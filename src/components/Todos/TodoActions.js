import { RiDeleteBin2Fill, RiRefreshFill } from "react-icons/ri";
import Button from "../UI/Button";

const TodoActions = ({
  deleteAllTodos,
  deleteCompletedTodos,
  todosExists,
  completedTodosExists,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        disabled={!todosExists}
        className="btn-secondary mx-2"
        title="Reset todos"
        onClick={deleteAllTodos}
      >
        <RiRefreshFill className="me-2" />
        Delete all todos
      </Button>
      <Button
        disabled={!completedTodosExists}
        className="btn-secondary ms-2"
        title="Delete completed todos"
        onClick={deleteCompletedTodos}
      >
        <RiDeleteBin2Fill className="me-2" />
        Delete Completed todos
      </Button>
    </div>
  );
};

export default TodoActions;
