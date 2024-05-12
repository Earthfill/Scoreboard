const Init = ({ setNewOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen"
    >
      <div className="text-4xl mb-4">Welcome to the Scorer App</div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setNewOpen(false)}
      >
        Click to Proceed
      </button>
    </div>
  )
}

export default Init