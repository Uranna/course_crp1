import TodoList from '@components/TodoList';
import { render, screen } from '@testing-library/react';
import * as TodoItem from '@components/TodoItem';
import userEvent from '@testing-library/user-event';

describe('', () => {
    const mockTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: false },
    ];
    
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
  
    const renderComponent = () => {
      render(
        <TodoList
          todos={mockTodos}
          onToggle={mockOnToggle}
          onDelete={mockOnDelete}
        />
      );
    };

  it('Проверка вызова рендера всех элементов списка.', () => {
    const TodoItemMock = jest.fn(TodoItem.default); 
    jest.spyOn(TodoItem, 'default').mockImplementation(TodoItemMock);

    renderComponent();

    expect(TodoItemMock).toHaveBeenCalledTimes(mockTodos.length);

    mockTodos.forEach((todo, index) => {
      expect(TodoItemMock.mock.calls[index][0]).toMatchObject({
        todo,
        onToggle: mockOnToggle,
        onDelete: mockOnDelete,
      });
    });
  });

  it('Проверка, что передаваемое событие onToggle вызывается при изменении состояния.', async () => {
    renderComponent();
    const todo = mockTodos[0];
    
    const checkbox = screen.getByTestId(`toggle-${todo.id}`);
    await userEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledWith(todo.id);
  });

  it('Проверка, что передаваемое событие onDelete вызывается при попытки удаления задачи.', async () => {
    renderComponent();
    const todo = mockTodos[0];

    const deleteButton = screen.getByTestId(`delete-${todo.id}`);
    await userEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(todo.id);
  });
});