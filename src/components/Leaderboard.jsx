import React from 'react'
import {players} from '../assets/sample_data.js'
const Leaderboard = () => {
  return (
    <div className='w-full mx-auto p-6 '>
      <h1 className='text-5xl font-bold mb-6 mt-4 p-10' >🏆 LEADERBOARD</h1>
      <div className='grid grid-cols-3 bg-gray-800 text-white font-medium mt-4 py-3 px-4 '>
        <div className='text-center'>RANK</div>
        <div className='text-center'>NAME</div>
        <div className='text-center'>SCORE</div>
      </div>
      <div className='min-h-screen w-full'>
      {players.map((player, index) => (
        <div
            key={index}
            className={` text-3xl text-black text-center grid grid-cols-3 items-center p-2 border-b last:border-b-0 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
        >
        <div>{index + 1}.</div>
        <div>{player.name}</div>
        <div className="text-center">{player.score}</div>
    </div>
    ))}
      </div>
      

      {/*
            map is used to loop
         index is the position in the array 
        */} 
    </div>
  )
}
export default Leaderboard