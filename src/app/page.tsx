"use client";

import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [running, setRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [totalStartTime, setTotalStartTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [averageTime, setAverageTime] = useState<number>(0);

  const startStopwatch = () => {
    const now = Date.now();
    if (!running) {
      setStartTime(now - elapsedTime);
      setTotalStartTime(now - totalTime);
    }
    setRunning(!running);
  };

  const recordLap = () => {
    if (!running) return;

    const now = Date.now();
    const lapTime = now - startTime;
    const newLaps = [...laps, lapTime];
    setLaps(newLaps);

    // Calcular a média dos tempos das voltas
    const sum = newLaps.reduce((acc, curr) => acc + curr, 0);
    const average = sum / newLaps.length;
    setAverageTime(average);

    // Atualizar o tempo total e zerar o tempo decorrido
    setElapsedTime(0);
    setStartTime(now);
  };

  const resetStopwatch = () => {
    setRunning(false);
    setElapsedTime(0);
    setTotalTime(0);
    setLaps([]);
    setAverageTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (running) {
      timer = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
        setTotalTime(now - totalStartTime);
      }, 100);
    } else if (timer) {
      clearInterval(timer);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running, startTime, totalStartTime]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        startStopwatch();
      } else if (event.code === 'Enter') {
        recordLap();
      } else if (event.code === 'Backspace') {
        resetStopwatch();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [running, elapsedTime, totalTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(2);
    return `${minutes}:${parseFloat(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="container mx-auto p-4 min-h-screen min-w-full bg-[#755139] text-[#F2EDD7]" >
      <style jsx>{`
        .container {
          max-height: 100vh;
          overflow-y: auto;
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        scrollbar-width: thin;
        scrollbar-color: #888 #f1f1f1;
      `}</style>
      <h1 className='text-center text-5xl m-10 text-[#F2EDD7]'>Leiturômetro</h1>
      <div className="text-center mb-4">
        <div className="text-4xl font-bold">
          {formatTime(elapsedTime)}
        </div>
        <div className="text-xl mt-2">
          Tempo total: {formatTime(totalTime)}
        </div>
        <div className="mt-2">
          <button
            className={`px-4 py-2 bg-blue-500 rounded-md ${running ? 'bg-red-500' : ''}`}
            onClick={startStopwatch}
          >
            {running ? 'Pausar' : 'Começar'}
          </button>
          <button
            className="ml-2 px-4 py-2 bg-green-500 rounded-md"
            onClick={recordLap}
            disabled={!running}
          >
            Próxima
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-500 rounded-md"
            onClick={resetStopwatch}
          >
            Resetar
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg mt-10">Páginas:</h3>
        <ul className="mt-2">
          {laps.map((lapTime, index) => (
            <li key={index} className="py-2">
              Página {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Média de tempo por página: {formatTime(averageTime)}
        </p>
      </div>
    </div>
  );
};

export default Stopwatch;
