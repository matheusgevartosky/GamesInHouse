import React from "react";
import Background from '../Components/BackgroudVideo/GamesListBg/index'

export default function GameList(props) {
    const { games } = props;
    return (
        <div>
            <Background />
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