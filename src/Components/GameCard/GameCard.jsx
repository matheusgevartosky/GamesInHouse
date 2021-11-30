import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GameCard = ({ title, description, thumb }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, color:"dark"}}>
        <CardMedia component="img" height="194" image={thumb} alt={title}  />
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/games`)} >See More!</Button>
      </CardActions>
    </Card>
  );
}