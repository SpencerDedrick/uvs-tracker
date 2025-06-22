import  { createContext, useContext, useState, type ReactNode } from "react"

interface PlayerContextProps {
    player1: number
    player2: number
    setPlayer1: (value: number) => void
    setPlayer2: (value: number) => void
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined)

export const PlayerContextProvider = ({children}: {children: ReactNode}) => {
    const [player1, setPlayer1] = useState(25)
    const [player2, setPlayer2] = useState(25)

    return (
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2}}>{children}</PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    const context = useContext(PlayerContext)
    if (!context) throw new Error('player context error')
    return context
}