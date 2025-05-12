'use client'
import React from 'react';
import { Post } from "./types";
import { Button, Card, CardActions, CardContent, Divider, ListItem, Typography } from '@mui/material';

export const PostItem: React.FC<Post> = props => (
  <ListItem disablePadding>
    <Card elevation={3} sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {props.body}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button variant="text" href={`/${props.id}`}>
          Открыть полностью
        </Button>
      </CardActions>
    </Card>
  </ListItem>
);