import { render, screen } from '@testing-library/react';
import AddTodo from '@components/AddTodo';
import userEvent from '@testing-library/user-event';

describe('AddTodo', () => {
  const mockOnAdd = jest.fn();

  const renderComponent = () => {
    render(<AddTodo onAdd={mockOnAdd} />);
  };

  it('Проверка введенного значения.', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText('Add new todo...');
    await userEvent.type(input, 'Hello World');

    expect(input).toHaveValue('Hello World');
  });

  it('Проверка, что ввод текста и отправка формы вызывают добавление задачи.', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText('Add new todo...');
    const submitButton = screen.getByRole('button', { type: 'submit' });
    
    await userEvent.type(input, 'Hello World');
    await userEvent.click(submitButton);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith('Hello World');
  });

  it('Проверка, что форма очищается после отправки.', async () => {
    renderComponent();

    const input = screen.getByPlaceholderText('Add new todo...');
    const submitButton = screen.getByRole('button', { type: 'submit' });
    
    await userEvent.type(input, 'Hello World');
    await userEvent.click(submitButton);

    expect(input).toHaveValue('');
  });

});