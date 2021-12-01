import { Container } from "@mui/material";
import React from "react";
import Background from '../Components/BackgroudVideo/GamesListBg/index'
import {GameCard} from '../Components/GameCard/GameCard'
import { useEffect, useState } from "react";

export default function GameList() {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    const getData = {
      method: "GET",
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '6d5a22aab0msh469a854fcd52f5ap1fc699jsn0e2f7a8ce394'
    },
    }
    fetch("https://mmo-games.p.rapidapi.com/games", getData)
    .then (response =>  response.json()).then(data => { 
    setGames(data)
    })  
  }, [])
  const sample = games[1];
  console.log(sample)

  return (
    <>
      <Background />
      <box marginTop={6} >
        <h1>Games</h1>
        <Container>
          <GameCard 
          title={sample.title}
          description={sample.short_description} 
          thumb={sample.thumbnail} 
          genre={""} 
          /> 
        </Container>
      </box>
    </>
  );
}