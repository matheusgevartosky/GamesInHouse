import react from 'react';

export default function GameDetails(props) {
    const { games } = props;
    return (
        <div>
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