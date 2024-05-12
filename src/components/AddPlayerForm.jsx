import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../features/scoresSlice";
import toast from "react-hot-toast";

const AddPlayerForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const players = useSelector(state => state.scores);

  const handleChange = (event) => {
    const inputName = event.target.value;
    if (inputName.length <= 12) {
      setName(inputName);
    } else {
      toast.error('You can only input a maximum of 8 characters')
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      dispatch(addPlayer({ name }));
      toast.success(`Added ${name}`);
      setName("");
    } else {
      toast.error('You have to input a name!')
    }
  };
  
  return (
    <div className="bg-black p-2 rounded-b-lg">
      {players.length < 8 && (
        <form 
          onSubmit={handleSubmit} 
          className="flex items-center justify-center"
        >
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Player Name"
            className="border border-gray-300 text-neutral rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            className="bg-primary hover:bg-blue-500 text-base-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Player
          </button>
        </form>
      )}
    </div>
  )
}

export default AddPlayerForm