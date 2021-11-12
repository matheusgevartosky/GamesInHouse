import { Box } from '@material-ui/system';
import react from 'react';
import BackgroudVideo from '../Components/BakcgroudVideo/index';
import { Container } from '@material-ui/core';




export const Home = () => {
  return (
    <>
      <BackgroudVideo />
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff10',
          backdropFilter: 'blur(15px)',
          borderRadius: '10px',
          width: '50%',
        }}
      >
        <h1>Teste!!</h1>
      </Container>
        
      
    </>
  );
};