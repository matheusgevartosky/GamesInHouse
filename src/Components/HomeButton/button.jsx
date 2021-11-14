import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@material-ui/system';

export default function HomeButton() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Click here to get started!</Button>
        <Button>Click Here to see the lestest games news!</Button>
      </ButtonGroup>
    </Box>
  );
}