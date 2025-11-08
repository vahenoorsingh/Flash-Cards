import './App.css'
import { useState } from 'react'

// const qList = [
//   { id : 1, question: "What is the capital of France?", answer: "Paris" },
//   { id : 2, question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
//   { id : 3, question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
// ]

const qList = [
  { id: 1, question: "What is the capital of France?", answer: "Paris" },
  { id: 2, question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { id: 3, question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { id: 4, question: "What gas makes up most of Earth's atmosphere?", answer: "Nitrogen" },
  { id: 5, question: "What is the unit of electrical resistance?", answer: "Ohm" },
  { id: 6, question: "Name the largest moon of Saturn.", answer: "Titan" },
  { id: 7, question: "What is the process of a solid turning directly into a gas?", answer: "Sublimation" },
  { id: 8, question: "Who painted the Sistine Chapel ceiling?", answer: "Michelangelo" },
  { id: 9, question: "What compound gives blood its red color?", answer: "Hemoglobin" },
  { id: 10, question: "Which chemical element has the symbol Au?", answer: "Gold" },
  { id: 11, question: "What force keeps a planet in orbit around the Sun?", answer: "Gravity" },
  { id: 12, question: "What is the official language of Brazil?", answer: "Portuguese" },
];

function App() {
  const [curIndex, setCurIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const totalQuestion = qList.length;

  const next = () => {
    if(curIndex < totalQuestion - 1){
      setCurIndex(prevIndex => prevIndex + 1);
      setShowAnswer(false);
    }
  }
  const previous = () => {
    if(curIndex > 0){
      setCurIndex(prevIndex => prevIndex - 1);
      setShowAnswer(false);
    }
  }
  let perc = ((curIndex + 1) / totalQuestion) * 100; 
  return (
    <div className='app-container'>
      <div className='title-container'>
        flash card
      </div>

      <div className='progress-container'>
        <div
          className='progress-fill'
          style={{ width: `${perc}%` }}
        >{`${Math.round(perc || 0)}%`}</div>
      </div>

      <div className='slide-container'>
        <div className='slide-display'>
          {!showAnswer &&
            <div className='slide-question'>
              {qList[curIndex].question}
            </div>}

          {showAnswer &&
            <div className='slide-answer'>
              {qList[curIndex].answer}
            </div>}
        </div>

        <div className='slide-navigation'>
          <button onClick={previous}>{`< Previous`}</button>
          <button onClick={() => {
            setShowAnswer(!showAnswer)
          }}>
            {showAnswer ? `Hide Answer` : `Show Answer`}
          </button>
          <button onClick={next}>{`Next >`}</button>
        </div>
      </div>
    </div>
  )
}

export default App
