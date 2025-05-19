import { useState } from 'react';
import { Pencil, Trash2, CheckCircle, RotateCcw, Save } from 'lucide-react';

function ToDoItem({ todo, toggleComplete, deleteTodo, toggleEdit, editTodo }) {
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTodo(todo.id, editedText);
    }
  };

  const handleEditClick = () => {
    editTodo(todo.id, editedText);
  };

  return (
    <div className="bg-amber-50 shadow-md p-4 rounded-md flex justify-between items-center transition-all duration-300 animate-fadeIn">
      <div className="flex-grow">
        {todo.isEditing ? (
          <input
            type="text"
            className="w-full border px-3 py-1 rounded text-gray-900 bg-purple-100"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleEditKeyDown}
          />
        ) : (
          <span
            className={`text-base font-medium ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center space-x-3 ml-4">
        {!todo.completed && !todo.isEditing && (
          <div className="flex flex-col items-center">
            <button
              onClick={() => toggleEdit(todo.id)}
              className="text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
            >
              <Pencil size={20} />
            </button>
            <span className="text-xs text-gray-500">Edit</span>
          </div>
        )}

        {todo.isEditing && (
          <div className="flex flex-col items-center">
            <button
              onClick={handleEditClick}
              className="text-green-600 hover:text-green-800 transition cursor-pointer"
            >
              <Save size={20} />
            </button>
            <span className="text-xs text-gray-500">Save</span>
          </div>
        )}

        <div className="flex flex-col items-center">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`${
              todo.completed
                ? 'text-purple-600 hover:text-purple-800'
                : 'text-green-600 hover:text-green-800'
            } transition cursor-pointer`}
          >
            {todo.completed ? <RotateCcw size={20} /> : <CheckCircle size={20} />}
          </button>
          <span className="text-xs text-gray-500">
            {todo.completed ? 'Undo' : 'Done'}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-600 hover:text-red-800 transition cursor-pointer"
          >
            <Trash2 size={20} />
          </button>
          <span className="text-xs text-gray-500">Delete</span>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
