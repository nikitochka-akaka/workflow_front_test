import React,{useState} from 'react'



function useInputValue(defaultValue = ''){
    const [value, setValue] = useState('');
    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo({onCreate}){
    const input = useInputValue('');
    function submitHandler(event){
        event.preventDefault();

        if(input.value().trim()){ // проверяем, если value пустой ,у даля пробелы
            onCreate(input.value());
            input.clear()
        }
    }

    return (
        <form className ='FormAddTodo' onSubmit={submitHandler}>
             <input {...input.bind} className='InputAddTodo'  />
                <button
                    type='submit'
                    className="BtnAddTodo"
                    onClick={AddTodo}>
                    Add task
                </button>

        </form>
    )
}



export default AddTodo