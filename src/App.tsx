import React, { useState } from 'react';
import './App.css';
import InputField from './components/InpuField/InputField';
import ProjectList from './components/ProjectList/ProjectList';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompleteTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };
  return (
    <div className="App">
      <div className="heading">
        <span className="title">Project Management App</span>
      </div>
      <div className="App_main">
        <ProjectList />
        <div className="App_container">
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompleteTodos={setCompleteTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
