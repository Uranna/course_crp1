import { render, screen } from "@testing-library/react";
import { server } from "../../mocks/server";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import { BASE_URL as MockBaseUrl, TODOS } from "../../mocks/constants";

jest.mock('../../api/todosApi', () => ({
  ...jest.requireActual('../../api/todosApi'),
  getTodos: async() => fetch(MockBaseUrl).then(res=> res.json()),
  addTodo: async(text) => fetch(MockBaseUrl, {
    method: 'POST',
    body: JSON.stringify({ text }),
  }).then(res=> res.json()),
}));

describe('Проверка работы с замоканными запросами.', () => {
  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
  });
  
  afterAll(() => server.close());

  it('Проверка рендера полученного списка дел.', () => {
    render(<App />);

    TODOS.forEach(async (todo) => {
      const todoItem = await screen.findByText(todo.text);
      expect(todoItem).toBeInTheDocument();
    })
  })

  it('Проверка добавление новой задачи в список.', async() => {
    render(<App />)

    const input = await screen.findByPlaceholderText('Add new todo...');
    const submitButton = screen.getByTestId('add-button');

    const newTodo = 'Write "Hello, World!"'
    
    await userEvent.type(input, newTodo);
    await userEvent.click(submitButton);

    const todoItem = await screen.findByText(newTodo);
    expect(todoItem).toBeInTheDocument();
  });
});

