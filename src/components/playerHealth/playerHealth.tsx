import React, { useCallback } from "react"
import { usePlayerContext,  } from "../../context/playerContext/playerContext"
import "./playerHealth.css"

interface Props {
    player: 'player1' | 'player2'
}

const PLAYER_LABELS = {
    player1: 'Player 1',
    player2: 'Player 2'
}

export default function PlayerHealth({player}: Props){
    const {player1, player2, setPlayer1, setPlayer2} = usePlayerContext()

    const playerHealth = player === "player1" ? player1 : player2

    const handleLoseHealth = useCallback(() => {
        if(player === "player1"){
            setPlayer1(player1 - 1)
        } else {
            setPlayer2(player2 -1)
        }
    },[player, player1, player2, setPlayer1, setPlayer2])

    const handleGainHealth = useCallback(() => {
        if(player === "player1"){
            setPlayer1(player1 + 1)
        } else {
            setPlayer2(player2 +1)
        }
    },[player, player1, player2, setPlayer1, setPlayer2])

    

    return <div className={`player-health ${player}`}>
        <span className="player-label">{PLAYER_LABELS[player]}</span>
        <span className="health-section">
        <button className="minus-button" onClick={handleLoseHealth}>-</button>
        <span className="health-number">{playerHealth}</span>
        <button className="plus-button" onClick={handleGainHealth}>+</button>
        </span>
  
    </div>
}