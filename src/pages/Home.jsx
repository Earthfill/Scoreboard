import { useState } from "react"
import { AddPlayerForm, Header, Init, Player, Stats } from "../components"

const Home = () => {
  const [newOpen, setNewOpen] = useState(true);

  return (
    <div className="mx-5 md:mx-0 grid text-base-100">
      {newOpen ? (
        <Init setNewOpen={setNewOpen} />
      ) : (
        <div className="w-full md:w-2/3 md:align-element">
          <Header title='SCORER APP' />
          <Stats />
          <Player />
          <AddPlayerForm />
        </div>
      )}
    </div>
  )
}

export default Home