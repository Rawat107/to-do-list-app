import { useEffect, useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css'
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false, isEditing: false },
      ]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-xl mx-auto">
        <Header />
        <div className="flex flex-col sm:flex-row gap-2 mt-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a task..."
            className="flex-grow px-4 py-2 bg-yellow-50 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 text-base"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto"
          >
            Add
          </button>
        </div>
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          toggleEdit={toggleEdit}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
