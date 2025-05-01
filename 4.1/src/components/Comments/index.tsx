import React, { FC } from 'react';
import { useComments } from './useComments';
import { Box, Button, Divider, List, Typography } from '@mui/material';
import RefreshIcon from "@mui/icons-material/Refresh";
import { LoadingContainer } from '../LoadingContainer';
import { Comment } from './Comment';

type CommentsProps = {
  postId: string;
};

export const Comments: FC<CommentsProps> = ({ postId }) => {
  const { isLoading, comments, error, refresh } = useComments(postId)
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, p: 2 }}>
        <Typography variant="h6">
          Комментарии ({comments.length})
        </Typography>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={refresh}
          disabled={isLoading}
        >
          Обновить
        </Button>
      </Box>

      <LoadingContainer isLoading={isLoading} error={error}>
        <List>
          {comments.map((comment, index) => (
            <React.Fragment key={index}>
              <Comment {...comment} />
              {index < comments.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </LoadingContainer>
    </>
  );
};