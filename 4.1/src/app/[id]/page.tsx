'use client'
import { Divider, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostItem } from '@/components/PostItem';
import { Comments } from '@/components/Comments';

const queryClient = new QueryClient()

const Page = () => {
  const params = useParams();
  const postId = String(params.id);

  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <IconButton
          edge="start"
          color="inherit"
          component={Link}
          href="/"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            К списку новостей
          </Link>
        </Typography>
      </Header>

      <Container>
        <PostItem postId={postId} />
        <Divider />
        <Comments postId={postId} />
      </Container>
    </QueryClientProvider>
  );
}

export default Page;
