import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getComments = useCallback(() => {
    setIsLoading(true);
    setComments([]);
    setError('');

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => setComments(res.data))
      .catch(() => setError('Произошла ошибка при получении данных.'))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(getComments, []);

  const refresh = useCallback(getComments, [getComments]);

  return {
    isLoading,
    error,
    comments,
    refresh,
  }
}
