import './App.css'
import Attack from './components/attack/attack'
import PlayerHealth from './components/playerHealth/playerHealth'
import SendAttack from './components/sendAttack/sendAttack'
import './styles/typography.css'

function App() {


  return (
    <div className="app">
      <PlayerHealth player="player2"/>
      <SendAttack player='player2'/>
      <Attack />
      <SendAttack player='player1'/>
      <PlayerHealth player="player1"/>
    </div>
  )
}

export default App
