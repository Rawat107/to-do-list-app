import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleComplete, toggleEdit, editTodo }){
    return (
        <div className="mt-6 space-y-3">
            {todos.map(todo => (
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
    )
}

export default ToDoList;