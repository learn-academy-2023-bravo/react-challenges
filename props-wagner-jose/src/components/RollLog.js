import React from 'react';
import DiceRoll from './DiceRoll';

const RollLog = ({ DiceRoll }) => {
    return (
      <div>
        <h2>Roll Log:</h2>
        <ul>
          {DiceRoll.map((DiceRoll, index) => (
            <li key={index}>{DiceRoll}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RollLog;