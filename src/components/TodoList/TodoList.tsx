import React from 'react';
import { Todo } from '../../model';
import SingleTodo from './SingleTodo/SingleTodo';
import './TodoList.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompleteTodos,
}) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Tasks</span>
        {todos.map((todo, index) => (
          <SingleTodo
            index={index}
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

/*      <div className="todos remove">
        <span className="todos_heading">Completed Tasks</span>
        {completedTodos.map((todo, index) => (
          <SingleTodo
            index={index}
            todo={todo}
            key={todo.id}
            todos={completedTodos}
            setTodos={setCompleteTodos}
          />
        ))}
      </div>
      */
