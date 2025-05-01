import axios from 'axios';
import { z } from "zod";

const PostItemSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
})

export type PostItem = z.infer<typeof PostItemSchema>;

export const fetchPost = async (postId: string): Promise<PostItem>  => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  
  try {
    return PostItemSchema.parse(response.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Невалидная структура данных.');
    }
    throw error;
  }
}
