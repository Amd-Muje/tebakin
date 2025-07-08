
import { CheckCircle, XCircle } from 'lucide-react';
import type { Question } from '../types/quiez';

interface QuestionCardProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  totalQuestion: number;
  currentQuestion: number;
}

export default function QuestionCard({question,onAnswerSelect,selectedAnswer,totalQuestion,currentQuestion}: QuestionCardProps) {

  const getButtonClasses = (index: number): string => {
    if(selectedAnswer === null) return 'hover:bg-gray-100';
    if(index === question.correct) return 'bg-green-100 border-green-500';
    if(selectedAnswer === index) return 'bg-red-100 border-red-500';

    return "opacity-50";
  }

  return (
    <div>
      <h2 className='text-xl font-semibold text-gray-800 mb-2'>
        Question {currentQuestion + 1} of {totalQuestion}
      </h2>
      <p className='text-gray-600 mb-4'>
        {question.question}
      </p>

      <div className="space-y-3">
        {question.options.map((option,index) => (
          <button onClick={() => selectedAnswer === null && onAnswerSelect(index)} key={index} className={`w-full p-4 text-left border rounded-lg transition-all duration-300${getButtonClasses(index)}`}>
            <div className='flex items-center justify-between'>
            <span>{option}</span>
            {selectedAnswer !== null && index === question.correct && <CheckCircle className='w-5 h-5 text-green-500'/>}
            {selectedAnswer === index && index !== question.correct && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            
            </div>
            </button>
        ))}
      </div>
    </div>
  )
}
