import { useEffect, useState } from 'react'
import StartScreen from './components/start-screen'
import QuestionCard from './components/question-card'
import GameOver from './components/game-over'
import type { GameState } from './types/quiez'
import { QUESTIONS } from './data/question'
import Timer from './components/timer'

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);


  useEffect(() => {
    let timer: number ;
    if(gameState === "playing" && timeLeft >0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      },1000)
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("end")
    }
    return () => clearInterval(timer);
  },[timeLeft, gameState])
  const handleStart = () => {
    setGameState("playing");
    setTimeLeft (10);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null)
  }

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);

    const isCorrect = index === QUESTIONS[currentQuestion].correct;
    if(isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(()=> {
      if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      } else {
        setGameState("end")
      }
    }, 1500)
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>

      {gameState === "start" && <StartScreen onStart={handleStart}/>}
      {gameState === "playing" && 
        <div className='p-8'> 
          <Timer timeLeft={timeLeft}/>
          <QuestionCard question={QUESTIONS[currentQuestion]} selectedAnswer={selectedAnswer} onAnswerSelect={handleAnswer}
          totalQuestion={QUESTIONS.length} currentQuestion={currentQuestion}
          />

          <div className='mt-6 text-center text-gray-600'>
            Score: {score} / {QUESTIONS.length}
          </div>
        </div>
        }
      {gameState === "end" && <GameOver onRestart={handleStart} totalQuestion={QUESTIONS.length} score={score} />}
      </div>
    </div>
  )
}

export default App
