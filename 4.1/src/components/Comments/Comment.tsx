import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Comment as TComment } from './types';

export const Comment: FC<TComment> = props => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: "primary.main" }}>
        {props.email.slice(0, 2).toUpperCase()}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {props.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {props.email}
          </Typography>
        </Box>
      }
      secondary={
        <Typography
          component="span"
          variant="body2"
          color="text.primary"
          sx={{ display: "inline-block", mt: 1 }}
        >
          {props.body}
        </Typography>
      }
    />
  </ListItem>
);