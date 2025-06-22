import React, { createContext, useContext, useState, type ReactNode } from "react"

interface AttackContextProps {
  speed: number
  setSpeed: (value: number) => void
  damage: number
  setDamage: (value: number)=> void
  zone: string
  setZone:(value: string)=> void
}

const AttackContext = createContext<AttackContextProps | undefined>(undefined)

export const AttackContextProvider = ({children}: {children: ReactNode}) => {
    
    const [speed, setSpeed] = useState(4)
    const [damage, setDamage] = useState(4)
    const [zone, setZone] = useState('mid')

    return (
        <AttackContext.Provider value={{speed, setSpeed, damage, setDamage, zone, setZone}}>{children}</AttackContext.Provider>
    )
}

export const useAttackContext = () => {
    const context = useContext(AttackContext)
    if (!context) throw new Error('attack context error')
    return context
}