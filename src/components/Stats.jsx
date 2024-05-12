import { useSelector } from "react-redux";

const Stats = () => {
  const players = useSelector(state => state.scores);

  return (
    <div className="bg-black px-5 py-2 rounded-t-lg">
      Total Players: {players.length}
    </div>
  )
}

export default Stats