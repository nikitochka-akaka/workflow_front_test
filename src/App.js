import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Modal from './Modal/Modal.js'



function App() {
    let [todos, setTodos] = React.useState([
        {id: 1, completed: true , title: 'Buy a brain'},
        {id: 2, completed: false , title: 'Buy a book'},
        {id: 3, completed: false , title: 'Buy some eat'}
    ])


    function toggleTodo(id){
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        )

    }
    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed : false,
                }
            ])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="App">
                <h1>
                    Todo List <Modal />
                </h1>
                <AddTodo onCreate={addTodo} />
                {todos.length ?
                    <TodoList todos={todos} onToggle={toggleTodo} /> :
                    <p style={{color: "wheat"}}> Your todo list is empty</p>
                }
            </div>
        </Context.Provider>
    );
}

export default App;
