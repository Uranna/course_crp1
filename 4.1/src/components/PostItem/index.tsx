import React, { FC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { LoadingContainer } from '../LoadingContainer';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { fetchPost, PostItem as TPostItem } from './fetchPost';

type PostItemProps = {
  postId: string;
}

export const PostItem: FC<PostItemProps> = ({ postId }) => {
  const { data: post, error, isLoading }: UseQueryResult<TPostItem, Error> = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });

  return (
    <LoadingContainer isLoading={isLoading} error={error?.message || ''}>
      <Card elevation={0} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {post?.title}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1">
            {post?.body}
          </Typography>
        </CardContent>
      </Card>
    </LoadingContainer>
  );
};
