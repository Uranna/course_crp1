import { http, HttpResponse, rest } from 'msw';
import { BASE_URL, TODOS } from './constants'

let todos = [...TODOS];

export const handlers = [
  http.get(BASE_URL, () => {
    return HttpResponse.json([...todos], {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }),

  http.post(BASE_URL, async ({ request }) => {
    const { text } = await request.json();

    if (!text) {
      return HttpResponse.json(
        { error: 'Text is required' },
        { status: 400 },
      );
    }

    const newTodo = { id: Date.now(), text, completed: false };
    todos.push(newTodo)
    return HttpResponse.json(
      newTodo,
      { status: 201 },
    )
  }),
];