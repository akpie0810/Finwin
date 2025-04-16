import React, {useState,useEffect} from 'react'
import Leaderboard from '../components/Leaderboard'
const StartAChallenge = () => {
    const words=[
        "dividend",
        "inflation",
        "investment",
        "liability",
        "equity",
        "portfolio",
        "asset",
        "stock",
        "debt",
        "savings",
    ];
    // state variables
    const [secretWord,setSecretWord]=useState('');
    const [guessedLetters,setGuessedLetters]=useState([]);
    const [wrongGuesses, setWrongGuesses]=useState(0);
    const maxWrong=10;
    //1
    useEffect(()=>{
      const randomWord=words[Math.floor(Math.random()*words.length)];
      setSecretWord(randomWord);
    },[]);
    //2
    const handleClick=(letter,onclick)=>{
      if(guessedLetters.includes(letter)) return;
      setGuessedLetters(prev=>[...prev,letter]);
      if(!secretWord.includes(letter)){
        setWrongGuesses(prev=>prev+1)
      }
    }
    const displayWord=()=>{
      return secretWord.
      split('').
      map(letter=>guessedLetters.includes(letter)?letter:' _').
      join('');
    }
    const isWin=secretWord&&secretWord.split('').every(letter=>guessedLetters.includes(letter));
    const isLose=wrongGuesses>=maxWrong
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-green-900 via-black to-green-900 text-white items-center justify-around px-4 my-10'>
      <h1 className='font-bold text-8xl text-center my-6'>💰 Guess the Finance Word!</h1>
      <p className='text-4xl mb-6 flex flex-col items-center justify-around'>
        {displayWord()}
      </p>
      {/* letter buttons */}
      <div className='grid grid-cols-7 gap-2 mb-6 text-6xl flex flex-col items-center justify-center'>
        {'abcedfghijklmnopqrtsuvwxyz'.split('').map(letter=>(
          <button
          key={letter}
          onClick={()=>handleClick(letter)}
          disabled={guessedLetters.includes(letter)||isLose||isWin}
          className='bg-gray-900 hover:bg-green-500 text-white px-3 py-2 rounded uppercase disabled:opacity-40 flex flex-col items-center justify-center text-7xl'
          >
            {letter}
          </button>
        ))}
      </div>
      {isWin && <p className="text-green-400 text-2xl font-semibold">🎉 You won! The word was “{secretWord}”</p>}
      {(isLose) && <p className="text-red-400 text-2xl font-semibold">❌ You lost! The word was “{secretWord}”</p>}
      {(isWin || isLose) && (
        <button
        onClick={() => window.location.reload()}
        className="mt-6 px-30 py-30 bg-gradient-to-r from-green-500 to-lime-500 text-black text-2xl font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out"
      >
        🔁 Play Again
      </button>
      
      )}
      <div className=" text-white ">
      <Leaderboard />
    </div>
    </div>
  )
}

export default StartAChallenge 