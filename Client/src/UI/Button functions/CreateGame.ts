import axios from 'axios';

export default function CreateGame(playerName: string, navigate: any){
    saveGameToServer(playerName, navigate);
}

function saveGameToServer(playerName: string, navigate: any) {
    axios.post('http://localhost:4000/create', { playerName }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        const { roomCode } = response.data;
        navigate(`/room/${roomCode}`, { state: { playerName } });
    }).catch(error => {
        console.error('Error creating game:', error);
    });
}