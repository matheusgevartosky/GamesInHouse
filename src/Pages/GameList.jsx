import { Container } from "@mui/material";
import React from "react";
import Background from '../Components/BackgroudVideo/GamesListBg/index'
import {GameCard} from '../Components/GameCard/GameCard'

export default function GameList(props) {
  const { games } = props;
  
  return (
    <>
      <Background />
      <box marginTop={6} >
        <h1>Games</h1>
        <Container>
          <GameCard />
          
        </Container>
      </box>
    </>
  );
}