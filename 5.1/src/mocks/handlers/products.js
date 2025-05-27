import { http, HttpResponse } from 'msw'
import { products } from '../constants'

const data = [...products];

export const getProducts = http.get(`${process.env.NEXT_PUBLIC_API_URL}/products`, () => {
  return HttpResponse.json({ data }, { status: 200, headers: {
    // Обязательно разрешите CORS для внешнего домена
    'Access-Control-Allow-Origin': '*',
  }, });
})