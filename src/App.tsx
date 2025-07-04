import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartScreen from './components/start-screen'
import QuestionCard from './components/question-card'
import GameOver from './components/game-over'

function App() {
  const [] = useState("start")

  return (
    <div>
      <StartScreen />
      <QuestionCard />
      <GameOver />
    </div>
  )
}

export default App
