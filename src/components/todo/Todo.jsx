import React, { useState, useEffect, useRef } from 'react';
import './Todo.css';

// import data
import { icons } from '../../hooks/database/db';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [isAllActive, setIsAllActive] = useState(true);
  const [isActiveActive, setIsActiveActive] = useState(false);
  const [isCompletedActive, setIsCompletedActive] = useState(false);
  const [showDoneIcon, setShowDoneIcon] = useState(false);
  const inputRef = useRef(null);

  
  // Function to add a new task
  const addTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now().toString(), // Generate a unique ID
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
    setShowDoneIcon(true);

    setTimeout(() => {
      setShowDoneIcon(false);
      // Reset the input field value and focus
      setNewTodo('');
      inputRef.current.focus(); // Focus on the input element
    }, 2000);
  };

  // Function to handle Enter key press
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addTodo();
    }
  };

  // Function to delete a task
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to handle clicking on a to-do item
  const handleTodoClick = (index) => {
    setSelectedTodoIndex(index);
  };

  // Function to filter tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Function to clear completed tasks
  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };


  return (
    <div className="todo_col">
      <div className="add_input">
        <div className="create_new">
          <button
            type="button"
            onClick={() => {
              addTodo();
              inputRef.current.focus(); // Focus on the input element
            }}
          >
            {showDoneIcon ? icons.done : icons.add}
          </button>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Create a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleEnterKeyPress}
            ref={inputRef}
          />
        </div>
      </div>

      <div className="todo_list_card">
        <div className="display_added_list_row">
          <ul>
            {filteredTodos.map((todo, index) => (
              <li key={index} className={`list_conts ${todo.completed ? 'completed' : ''}`}>
                <div
                  className={`checkbox_container ${selectedTodoIndex === index ? 'selected' : ''}`}
                  onClick={() => toggleCompletion(index)}
                >
                  <input
                    type="radio"
                    id={`todo-${index}`}
                    className="check_box custom_checkbox"
                    checked={todo.completed}
                    onChange={() => { }}
                  />
                  <label className="list-text" htmlFor={`todo-${index}`}>
                    {todo.text}
                  </label>
                </div>
                <div className="cancel_btn">
                  <button className="close-btn" onClick={() => handleDeleteTodo(index)}>
                    {icons.close}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="todo_list_footer">
          <div>
            <span className="display_left_list_num">
              {filteredTodos.length} item{filteredTodos.length !== 1 ? 's' : ''} (s) left
            </span>
          </div>
          <div className="desktop_view_only filtered_col">
            <button
              onClick={() => {
                setFilter('all');
                setIsAllActive(true);
                setIsActiveActive(false);
                setIsCompletedActive(false);
              }}
              className={isAllActive ? 'active' : ''}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter('active');
                setIsAllActive(false);
                setIsActiveActive(true);
                setIsCompletedActive(false);
              }}
              className={isActiveActive ? 'active' : ''}
            >
              Active
            </button>
            <button
              onClick={() => {
                setFilter('completed');
                setIsAllActive(false);
                setIsActiveActive(false);
                setIsCompletedActive(true);
              }}
              className={isCompletedActive ? 'active' : ''}
            >
              Completed
            </button>
          </div>
          <div className='completed_btn'>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>
      </div>

      <div className="mobile_view_only filtered_col">
        <button
          onClick={() => {
            setFilter('all');
            setIsAllActive(true);
            setIsActiveActive(false);
            setIsCompletedActive(false);
          }}
          className={isAllActive ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter('active');
            setIsAllActive(false);
            setIsActiveActive(true);
            setIsCompletedActive(false);
          }}
          className={isActiveActive ? 'active' : ''}
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilter('completed');
            setIsAllActive(false);
            setIsActiveActive(false);
            setIsCompletedActive(true);
          }}
          className={isCompletedActive ? 'active' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Todo;
