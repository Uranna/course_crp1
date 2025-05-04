import { render, screen } from '@testing-library/react';
import TodoItem from '@components/TodoItem';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup()

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false,
  };

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  const renderComponent = (todo = mockTodo) => {
    render(
      <TodoItem
        todo={todo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    );
  };

  it('Проверка, что задача отображается корректно.', () => {
    renderComponent();

    expect(screen.getByText(mockTodo.text)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('Проверка, что выполненная задача отображается корректно.', () => {
    renderComponent({ ...mockTodo, completed: true });

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('Проверка, что кнопка удаления вызывает соответствующий обработчик.', async () => {
    renderComponent();

    const checkbox = screen.getByText('Delete');
    await user.click(checkbox);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
  });

  it('Проверка, что переключение статуса (выполнено/не выполнено) работает.', async () => {
    renderComponent();

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });
});