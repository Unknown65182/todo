import React from 'react';
import { TodoListItem } from './TodoListItem';

import { Todo, ToggleTodo } from '../types/index';

interface IProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<IProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo, index) => (
          <TodoListItem
            key={`${todo.text}_${index}`}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}
    </ul>
  );
};
