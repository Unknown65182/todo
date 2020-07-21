import React from 'react';
import styled from 'styled-components';

import { Todo, ToggleTodo } from '../types/index';

const Label = styled.label<{ checked: boolean }>`
  text-decoration: ${({ checked }) => (checked ? 'line-through' : {})};
`;

interface IProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<IProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <Label checked={todo.complete}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </Label>
    </li>
  );
};
