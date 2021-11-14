import { Box } from '@material-ui/system';
import react from 'react';
import BackgroudVideo from '../Components/BackgroudVideo/homeBg/index'
import { Container } from '@material-ui/core';
import HomeButton from '../Components/HomeButton/button';




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
          marginTop: '10%',
        }}
      >
        <h1>Welcome to GameInHouse!</h1>
        <h3 style={{ marginTop: '10px' }}><i>
          GameInHouse is a platform for gamers to share their experiences with other gamers.
        </i></h3>
        <div style={{ marginTop: '15px' }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
          >
            <h4>
              <i>
                We are a team of gamers who love to play games.
              </i>
            </h4>
            </Box>
          </div>
      
        <div>
          <HomeButton />
        </div>

      </Container>
        
      
    </>
  );
};