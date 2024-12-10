import React, { useState } from "react";
import "./styles.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // List of todos
  const [newTodo, setNewTodo] = useState(""); // Input for a new todo
  const [editIndex, setEditIndex] = useState(null); // Index of the todo being edited
  const [editValue, setEditValue] = useState(""); // Temporary value for editing a todo

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo(""); // Clear input field
    }
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Enable edit mode
  const enableEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  // Save the edited todo
  const saveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editValue.trim() : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
    setEditValue(""); // Clear temporary value
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      {/* Input Group */}
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {/* Edit Mode */}
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="edit-input"
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              // View Mode
              <div>
                <span>{todo}</span>
                <button
                  className="edit-btn"
                  onClick={() => enableEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
