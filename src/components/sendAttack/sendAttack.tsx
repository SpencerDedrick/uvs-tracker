import React, { useCallback } from 'react'

import { usePlayerContext } from '../../context/playerContext/playerContext'
import { useAttackContext } from '../../context/attackContext/attackContext'
import './sendAttack.css'

export default function SendAttack ({player}: {player: 'player1'|'player2'}){

    const {damage, setDamage, setZone, setSpeed} = useAttackContext()
    const {player1, player2, setPlayer1, setPlayer2} = usePlayerContext()

    const resetAttack = () => {
        setDamage(4)
        setZone('mid')
        setSpeed(4)
    }

    const handleFullBlock = useCallback(() => {
        resetAttack()
    },[player, damage, setDamage, setZone, setSpeed, player1, player2, setPlayer1, setPlayer2])

    const handleNoBlock=useCallback(()=>{
        if(player === 'player1'){
            setPlayer2(player2 - damage)
        }else setPlayer1(player1 - damage)
       resetAttack()
    },[player, damage, setDamage, setZone, setSpeed, player1, player2, setPlayer1, setPlayer2])

    const handlePartialBlock= useCallback(() => {
        const dmg = Math.round(damage/2) 
        if(player === 'player1'){
            setPlayer2(player2 - dmg)
        }else setPlayer1(player1 - dmg)
       resetAttack()
    },[player, damage, setDamage, setZone, setSpeed, player1, player2, setPlayer1, setPlayer2])

    return <div className={`send-attack ${player}`}>
         <button onClick={handleNoBlock}>No block </button>
         <button onClick={handlePartialBlock}>Partial block</button>
        <button onClick={handleFullBlock}>Full block </button>
       
       
    </div>
}