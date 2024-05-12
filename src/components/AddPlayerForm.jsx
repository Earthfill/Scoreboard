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
    <div className="p-0 rounded-b-lg">
      {players.length < 8 && (
        <form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-7 py-2"
        >
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Player Name"
            className="border col-span-2 md:col-span-3 lg:col-span-6 border-gray-300 text-neutral p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            className="bg-primary hover:bg-blue-500 text-base-100 font-bold w-full justify-self-end py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add Player
          </button>
        </form>
      )}
    </div>
  )
}

export default AddPlayerForm