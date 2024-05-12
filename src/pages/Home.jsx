import { useState } from "react"
import { AddPlayerForm, Header, Init, Player, Stats } from "../components"

const Home = () => {
  const [newOpen, setNewOpen] = useState(true);

  return (
    <div className="mx-5 md:mx-0 md:align-element grid text-base-100">
      {newOpen ? (
        <Init setNewOpen={setNewOpen} />
      ) : (
        <>
          <Header title='SCORER APP' />
          <Stats />
          <Player />
          <AddPlayerForm />
        </>
      )}
    </div>
  )
}

export default Home