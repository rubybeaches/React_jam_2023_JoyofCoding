import { useEffect, useState } from "react"
import "./App.css"
import type { Players, PlayerId } from "rune-games-sdk/multiplayer"
import { GameState } from "./logic.ts"
import GameZone from "./components/GameZone";
import ReactHowler from 'react-howler'
import Music from "./assets/sounds/ES_Twinkle Mind - Stationary Sign.mp3"
//import pop from "./assets/sounds/pop.mp3"

//const popSound = new Audio(pop)
//const popBallons (or swallow, or surprose)  = new Audio("relative path to sound file")

function App() {
  const [game, setGame] = useState<GameState>()
  const [players, setPlayers] = useState<Players>({})
  const [yourPlayerId, setYourPlayerId] = useState<PlayerId>()

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, players, yourPlayerId,  }) => {
        setGame(game)
        setPlayers(players)
        setYourPlayerId(yourPlayerId)
          // PRIOR ONCHANGE BEFORE RUNE UPDATE:
          // onChange: ({ newGame, players, yourPlayerId,  }) => {
          //     setGame(newGame)
          //     setPlayers(players)
          //     setYourPlayerId(yourPlayerId)
          //    // if (action && action.action === "popBalloons") {
          //    //   popSound.play()
          //    // }

          },
        }
    )
  }, [])

  if (!game) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ReactHowler src={Music} playing={true} loop={true} preload={true} volume={.4}/>
      <GameZone game={game} players={players} yourPlayerId={yourPlayerId} numPlayers={0} playerIds={[]} avatarUrl={""}/>

    </>
  )
}

export default App
