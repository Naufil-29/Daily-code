import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [displayTime, setDisplayTime] = useState("00:00:00");
  const [totalTime, setTotalTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 200;
  const circumference = 2 * Math.PI * radius;

  const progress = totalTime === 0 ? 0 : timeLeft / totalTime;
  const offset = circumference * (1 - progress);

    function timeToSeconds(time) { 
    const[h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  function secondsTotime(seconds){ 
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;

    return ( 
      String(hours).padStart(2, "0") +
      ":"+
      String(minutes).padStart(2, "0") +
      ":"+
      String(second).padStart(2, "0")
    )
  }

  useEffect(() => {

    if (!isRunning) return;

    const interval = setInterval(() => {

      setTimeLeft(prev => {

        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          setDisplayTime("00:00:00");
          return 0;
        }

        const next =  prev - 1;
        setDisplayTime(secondsTotime(next));
        return next;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [isRunning]);



  function startTime() {

  if (isRunning) {
    setIsRunning(false)
    return
  }

  if (timeLeft === 0) {
    const seconds = timeToSeconds(displayTime)
    setTotalTime(seconds)
    setTimeLeft(seconds)
  }

  setIsRunning(true)
}

  function resetTimer() {

    setIsRunning(false)
    setTimeLeft(0)
    setTotalTime(0)
    setDisplayTime("00:00:00")

  }

  function formatInput(value){ 
    const numbers = value.replace(/\D/g, "").slice(0, 6)
    const padded = numbers.padStart(6, "0");

    const h = padded.slice(0, 2)
    const m = padded.slice(2, 4)
    const s = padded.slice(4, 6)

    return `${h}:${m}:${s}`
  }

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
          cx="220"
          cy="220"
          r={radius}
          stroke="cyan"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 220 220)"
        />

      </svg>

      <h1 className="text-4xl font-bold mt-6" contentEditable={!isRunning} suppressContentEditableWarning onInput={(e) => { 
        const formatted = formatInput(e.target.innerText)
        setDisplayTime(formatted)
        e.target.value = formatted
      }}>{displayTime}</h1>

      <div className="flex gap-4 mt-4 text-black">
      

        <button
          className="bg-green-500 px-4 py-2 rounded"
          onClick={startTime}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          className="bg-red-500 px-4 py-2 rounded"
          onClick={resetTimer}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default App
