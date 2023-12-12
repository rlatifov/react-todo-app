import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/UI/Container";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodoActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (todoText) => {
    setTodos((prevTodos) => [
      { id: uuidv4(), text: todoText, isCompleted: false },
      ...prevTodos,
    ]);
  };

  const updateTodoHandler = (updatedTodo) => {
    setTodos((prevTodos) => {
      const todoIndex = prevTodos.findIndex(
        (todo) => todo.id === updatedTodo.id,
      );
      prevTodos[todoIndex] = updatedTodo;
      return [...prevTodos];
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="py-4">
      <Container type="small">
        <p className="lead">Todo App</p>
        <TodoForm addTodo={addTodoHandler} />
        <TodoActions
          completedTodosExists={completedTodosCount > 0}
          deleteAllTodos={deleteAllTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
        <hr className="border-secondary mx-2" />
        <TodoList
          todos={todos}
          updateTodo={updateTodoHandler}
          deleteTodo={deleteTodoHandler}
        />
        {completedTodosCount > 0 && (
          <div className="mt-3 ms-2">
            You have completed {completedTodosCount} todo.
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
