import React,{ useContext } from "react";
import Context from '../context'

const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '50px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '.5rem'
    }
}


export default function TodoItem( {todo, index, onChange}){
    console.log( 'todo', todo)
    const classes = []
    const { removeTodo } = useContext(Context)
    if (todo.completed){
        classes.push('done');
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       style={styles.input}
                       onChange={() => onChange(todo.id)}
                       checked={todo.completed}
                />
                <strong style={styles.input}>{index + 1}</strong>
                {todo.title}
            </span>

            <button
                className='remove'
                onClick={removeTodo.bind(null,todo.id)}
            >&times;
            </button>
        </li>
    )
}

