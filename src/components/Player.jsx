import { useDispatch, useSelector } from "react-redux";
import { FaCrown, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
import { decrementScore, incrementScore, removePlayer } from "../features/scoresSlice";

const Player = () => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.scores);

  if (players.length < 1) {
    return (
      <div></div>
    )
  }

  const highestScore = Math.max(...players.map(player => player.score), 1);
  
  return (
    <div className="grid text-base-100 bg-primary text-lg rounded-lg py-5 px-2">
      {players.map(player => (
        <div 
          key={player.id}
          className="flex items-center justify-between gap-3"
        >
          <div 
            onClick={() => dispatch(removePlayer(player.id))}
            className="flex-none hover:bg-blue-800 rounded-full p-2"
          >
            <FaXmark />
          </div>
          <div 
            className="flex-none hover:bg-blue-800 rounded-full p-2"
          >
            <FaCrown className={`${player.score === highestScore ? 'text-yellow-500' : ''}`} />
          </div>
          <div className="flex-auto rounded-full p-2 w-16">
            {player.name}
          </div>
          <div
            onClick={() => dispatch(decrementScore(player.id))}
            className={`${player.score === 0 ? '' : 'bg-blue-700'} flex-none hover:bg-blue-800 p-2`}
          >
            <FaMinus />
          </div>
          <div className="flex-none rounded-full font-bold p-2">
            {player.score}
          </div>
          <div 
            onClick={() => dispatch(incrementScore(player.id))}
            className="flex-none bg-blue-700 hover:bg-blue-800 p-2"
          >
            <FaPlus />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Player