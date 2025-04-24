import React, { FC, useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';

export const MUIRating: FC = () => {
  const [value, setValue] = useState<number | null>(3);
  const [disabled, setDisabled] = useState(false)
  
  return (
    <Box sx={{ width: 200, '& > legend': { mt: 2 } }}>
      <Typography component="legend">Оцените</Typography>
      <Rating
        name="rating"
        value={value}
        disabled={disabled}
        onChange={(_, newValue) => {
          setValue(newValue);
          setDisabled(true);
        }}
       />
    </Box>
  )
}
