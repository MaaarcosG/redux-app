import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodosByIdQuery } from './store/apis/todoApi'

export const TodoApp = () => {

  // const { data: todo = [], isLoading, isFetching } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const {data: todo, isLoading} = useGetTodosByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId( todoId + 1);
  };

  const prevTodo = () => {
    
    if(todoId === 1) return;
    
    setTodoId( todoId - 1);
  };

  return (
    <>
      <h1> TodoApp - RTK Query </h1>
      <hr />

      <h4> isLoading: {isLoading ? 'True' : 'False'} </h4>

      <pre>{ JSON.stringify(todo) }</pre>

      <button onClick={prevTodo}> Prev TODO </button>
      <button onClick={nextTodo}> Next TODO </button>

      {/* <ul>
        {todo.map(i => (
          <li key={i.id}>
            <strong> {i.completed ? 'DONE:' : 'PENDING:'} </strong>
            {i.title}
          </li>
        ))}
      </ul> */}

    </>
  )
}
