'use client';
import React from 'react';
import { usePosts } from './usePosts';
import { Box, List, Pagination } from '@mui/material';
import { PostsProps } from './types';
import { PostItem } from './Post';
import { LoadingContainer } from '../LoadingContainer';

export const Posts: React.FC<PostsProps> = ({ totalPosts }) => {
  const { isLoading, error, page, countPage, posts, setPage } = usePosts(totalPosts);

  return (
    <Box>
      <LoadingContainer isLoading={isLoading} error={error}>
        <List>
          {posts.map(post => <PostItem key={post.id} {...post} />)}
        </List>
      </LoadingContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={countPage}
          page={page}
          onChange={(_, nextPage) => setPage(nextPage)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
