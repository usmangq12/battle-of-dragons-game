import { Grid, Typography } from '@mui/material';
import React from 'react';

type IMessageBox = {
  text: string;
};
export const MessageBox = ({ text }: IMessageBox) => {
  return (
    <Grid
      sx={{
        px: 4,
        py: 2,
        background: '#E1F8FF',
        border: '1px solid #000000',
        boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '4px',
      }}>
      <Typography
        sx={{ fontSize: '22px', fontFamily: 'Roboto', color: '#000000' }}>
        {text} wins!
      </Typography>
    </Grid>
  );
};
