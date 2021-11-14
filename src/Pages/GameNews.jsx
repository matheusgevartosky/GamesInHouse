import React from "react";
import Backgroud from '../Components/BackgroudVideo/GameNewsBg/index'

export default function GameNews(props) {
    const { games } = props;
    return (
        <div>
            <Backgroud />
        <h1>Games</h1>
        {/* <ul>
            {games.map(game => (
            <li key={game.id}>
                <a href={`/games/${game.id}`}>{game.name}</a>
            </li>
            ))}
        </ul> */}
        </div>
    );
    }
