import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [totalTime, setTotalTime] = useState(0)
  const [inputTime, setInputTime] = useState("")
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 200;
  const circumference = 2 * Math.PI * radius;

  const progress = timeLeft / totalTime;
  const offset = circumference * (1 - progress);

  useEffect(() => {

    if (!isRunning) return;

    const interval = setInterval(() => {

      setTimeLeft(prev => {

        if (prev === 0) {
          clearInterval(interval);
          setIsRunning(false)
          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [isRunning]);

  function startTime() {

  if (isRunning) {
    setIsRunning(false)
    return
  }

  let time = Number(inputTime)

  if (timeLeft === 0) {
    setTotalTime(time)
    setTimeLeft(time)
  }

  setIsRunning(true)
}

const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white">

      <svg className='border border-white' width="440" height="440">

        <circle
          cx="220"
          cy="220"
          r={radius}
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
        />

        <circle
          cx="0"
          cy="220"
          r={radius}
          stroke="cyan"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 110 110)"
        />

      </svg>

      <h1 className="text-4xl mt-6">{minutes}:{seconds}s</h1>

      <div className="flex gap-4 mt-4 text-black">
        <input className='text-white' type='number' value={inputTime} placeholder='enter time' onChange={(e) => setInputTime(e.target.value)}/>

        <button
          className="bg-green-500 px-4 py-2 rounded"
          onClick={startTime}
        >
          Start / Pause
        </button>

        <button
          className="bg-red-500 px-4 py-2 rounded"
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(totalTime);
          }}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default App
