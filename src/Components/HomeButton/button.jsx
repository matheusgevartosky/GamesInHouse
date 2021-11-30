import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@material-ui/system';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
  const navigate = useNavigate();
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
        <Button onClick={() => navigate(`/games`)}>Click here to get started!</Button>
        <Button onClick={() => navigate(`/news`)} >Click Here to see the lestest games news!</Button>
      </ButtonGroup>
    </Box>
  );
}