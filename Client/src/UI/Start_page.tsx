import React from "react";
import { useNavigate } from 'react-router-dom';
import './Start.css';
import CreateGame from "./Button functions/CreateGame";

export default function Start(){
    const [createPlayerName, setPlayerName] = React.useState("");
    const [gameCode, setGameCode] = React.useState("");
    const [joinPlayerName, setJoinPlayerName] = React.useState("");
    const navigate = useNavigate();

    return <div className="Start-page">
        <h1>Islamic Codenames</h1>
        <div className="Create-Join-container">
            <div className="Create-game-box">
                <h2>Create Game</h2>
                <form>
                    <label id="create-name-label">
                        Your Name:
                        <input type="text" value={createPlayerName} onChange={e => setPlayerName(e.target.value)} />
                    </label>
                    <br />
                </form>
                <button onClick={() => CreateGame(createPlayerName, navigate)}>Create Game</button>
            </div>
            <div className="divider"/>
            <div className="Join-game-box">
                <h2>Join Game</h2>
                <form>
                    <label id="join-name-label">
                        Your Name:
                        <input type="text" value={joinPlayerName} onChange={e => setJoinPlayerName(e.target.value)} />
                    </label>
                    <br />
                    <label id="join-gamecode-label">
                        Game Code:
                        <input type="text" value={gameCode} onChange={e => setGameCode(e.target.value)} />
                    </label>
                    <br />
                </form>
                <button>Join Game</button>
            </div>
        </div>
    </div>;
};