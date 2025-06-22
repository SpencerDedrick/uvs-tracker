import React from "react"
import { useAttackContext } from "../../context/attackContext/attackContext"
import './attack.css'

export default function Attack(){
    const {speed, setSpeed, damage, setDamage, zone, setZone} = useAttackContext()

    
    const handleMinusSpeed=()=>{
        setSpeed(speed -1)

    }
    const handlePlusSpeed=()=>{
        setSpeed(speed + 1)

    }
    const handleMinusDamage=()=>{
        setDamage(damage-1)

    }
    const handlePlusDamage=()=>{
        setDamage(damage+1)

    }
    const handleChangeZone=()=>{
        if(zone === 'mid'){
            setZone('high')
        } else if(zone === "high"){
            setZone('low')
        } else {setZone('mid')}

    }
    return <div className="attack">
        <div className={`${zone} attack-section`}>
            <button className="minus-button" onClick={handleMinusSpeed}>-</button>
            <button onClick={handleChangeZone} className="speed-number">Speed: {speed}</button>
            <button className="plus-button" onClick={handlePlusSpeed}>+</button>
        </div>
        <div className='attack-section'>
            <button className="minus-button" onClick={handleMinusDamage}>-</button>
            <button className="damage-number">Damage: {damage}</button>
            <button className="plus-button" onClick={handlePlusDamage}>+</button>
        </div>

    </div>
}