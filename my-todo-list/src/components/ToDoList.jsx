import ToDoItem from "./ToDoItem";

<<<<<<< HEAD
function ToDoList({ todos, deleteTodo, toggleComplete, toggleEdit, editTodo }){
    return (
        <div className="mt-6 space-y-4">
            {todos.map(todo => (
                <ToDoItem 
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    toggleEdit={toggleEdit}
                    editTodo={editTodo}
                />
=======
function ToDoList({ todos, deleteTodo, toggleComplete, toggleEdit, editTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="mt-6 space-y-6">
      {/* Active Section */}
      {activeTodos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Active</h3>
          <div className="space-y-4">
            {activeTodos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                toggleEdit={toggleEdit}
                editTodo={editTodo}
              />
>>>>>>> 10deb1beeb69a5bb62c378c1a698d443a26bba8f
            ))}
          </div>
        </div>
      )}

      {/* Completed Section */}
      {completedTodos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed</h3>
          <div className="space-y-4">
            {completedTodos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                toggleEdit={toggleEdit}
                editTodo={editTodo}
              />
            ))}
          </div>
        </div>
      )}

      {/* No tasks at all */}
      {activeTodos.length === 0 && completedTodos.length === 0 && (
        <p className="text-center text-gray-500">No tasks yet. Add one!</p>
      )}
    </div>
  );
}

export default ToDoList;
