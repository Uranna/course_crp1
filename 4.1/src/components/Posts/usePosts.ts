'use client'
import { useEffect, useState } from "react"
import { Post } from "./types";

const PER_PAGE = 10;

export const usePosts = (totalPosts: number) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const countPage = Math.ceil(totalPosts / PER_PAGE);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    setPosts([]);
    setError('');
    
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PER_PAGE}`, {
          signal: abortController.signal,
        });

        const result = await response.json();

        if (!abortController.signal.aborted) {
          setPosts(result);
        }
      } catch {
        if (!abortController.signal.aborted) {
          setError('Произошла ошибка при загрузке');
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchPost();

    return () => {
      abortController.abort();
    }
  }, [page]);

  return  {
    isLoading,
    posts,
    error,
    countPage,
    page,
    setPage,
  }
}