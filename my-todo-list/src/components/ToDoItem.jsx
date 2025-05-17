import { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, toggleEdit, editTodo }) {
  const [editedText, setEditedText] = useState(todo.text);

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-md shadow-sm ${
        todo.completed ? 'bg-gray-200 text-gray-500 line-through' : 'bg-white text-gray-800'
      }`}
    >
      {todo.isEditing ? (
        <input
          type="text"
          className="border px-3 py-1 rounded w-full mr-3 text-gray-900"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className="flex-grow font-medium text-base">{todo.text}</span>
      )}

      <div className="flex gap-2 ml-3">
        {todo.isEditing ? (
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => editTodo(todo.id, editedText)}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={() => toggleEdit(todo.id)}
          >
            Edit
          </button>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Done'}
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
