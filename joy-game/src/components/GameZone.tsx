import React from "react";
import './GameZone.css'
import { GameState } from "../logic.ts"
import { motion } from "framer-motion"
import Controls from "./Controls.tsx";
import Table from "./Table.tsx";
import Player from "./Player.tsx";
//import Header from "./Header.tsx";
import {useState} from  'react'
import {HelpPopup} from './HelpPopup.tsx'

interface GameZoneProps {
    numPlayers: number,
    playerIds: string[],
    game: GameState,
    players: Record<string, { playerId: string, displayName: string, avatarUrl: string }>,
    yourPlayerId: string | undefined,
    avatarUrl: string,
}

const GameZone: React.FC<GameZoneProps> = ({game: game, players: players, yourPlayerId: yourPlayerId})=> {
    const [open, setOpen] = useState(false);

    const playerIds = Object.keys(players)
    const numPlayers = playerIds.length

    return (
        <div className='game-play-container'>



                {/*<motion.div className="display-player-name" transition={{ duration: 1.2 }} animate={{y:0}} initial={{y:-150}}   >*/}
                {/*    */}
                {/*    <Header displayName={players[yourPlayerId].displayName} challengeCounter={0} challengeStatus={false} />*/}
                {/*</motion.div>*/}



                <div className='top-section'>

                    <motion.div className="players" transition={{ duration: 2 }} animate={{x:0}} initial={{x:-150}} >
                    {numPlayers > 0 ? (
                        
                            
                        <Player  playerId={playerIds[0]} players={players} game={game} playerNum={1}/>

                        ) : (
                            <div className='player-1-name  player-flex'>
                                Waiting on player 1
                            </div>
                        )}
                    </motion.div>


                     <div>
                        {open && <HelpPopup closePopup={() => setOpen(false)} />}
                        <motion.button  whileHover={{ scale: 1.1 }} className="helpButton" onClick={() => setOpen(true)}><h1>?</h1></motion.button>
                    </div>       
                    
                        
                    <motion.div className="players"  transition={{ duration: 2 }} animate={{x:0}} initial={{x:150}} >
                        {numPlayers > 1 ? (

                            <Player playerId={playerIds[1]} players={players} game={game} playerNum={2} />

                        ) : (
                            <div className='player-2-name player-flex'>
                                Waiting on player 2
                            </div>
                        )}
                    </motion.div>

                </div>


                <Table
                    game={game}
                    playerId={yourPlayerId}
                    playerIds ={playerIds}
                    yourPlayerId={yourPlayerId}
                    players = {players}
                />

             
            <div className='bottom-section'>

                    <motion.div className="players"   transition={{ duration: 2 }} animate={{x:0}} initial={{x:-150}}>
                    {numPlayers > 5 ? (

                        <Player playerId={playerIds[5]} players={players} game={game} playerNum={6}  />

                    ) : (
                               <div className='player-flex player-6-name'>
                                   Waiting on player 6
                               </div>
                           )}
                    </motion.div>


                    <Controls game={game} players={players} yourPlayerId={yourPlayerId} />


                    <motion.div className="players"   transition={{ duration: 2 }} animate={{x:0}} initial={{x:150}}>

                    {numPlayers > 2 ? (

                        <Player playerId={playerIds[2]} players={players} game={game} playerNum={3} />

                    ) : (
                        <div className=" player-flex player-3-name ">
                            <b>Waiting on player 3</b>
                        </div>
                    )}

                    </motion.div>


            </div> {/* end bottom section container */ }
            <div className='bottom-section'>
            <motion.div className="players"   transition={{ duration: 2 }} animate={{x:0}} initial={{x:-150}}>
                    {numPlayers > 4 ? (

                        <Player playerId={playerIds[4]} players={players} game={game} playerNum={5}  />

                    ) : numPlayers > 0 ? (
                               <div className='player-flex player-5-name'>  
                                   Waiting on player 5
                               </div>
                           ) : (<div></div>)}
            </motion.div>

            <div className='placeholder'></div>

            <motion.div className="players"   transition={{ duration: 2 }} animate={{x:0}} initial={{x:150}}>

            {numPlayers > 3 ? (

                <Player playerId={playerIds[3]} players={players} game={game} playerNum={4} />

            ) : numPlayers > 0 ? (
                <div className=" player-flex player-4-name ">
                    <b>Waiting on player 4</b>
                </div>
            ): (<div></div>)}

            </motion.div>
            </div>
        </div> // full container
    );
}

export default GameZone;

{/* //grid layout start by ChatGPT
//typescript editing Chat GPT
// Image by <a href="https://www.freepik.com/free-vector/top-view-modern-restaurant-table-with-flat-design_2847028.htm#query=dining%20table%20top%20view&position=9&from_view=keyword&track=ais">Freepik</a> */}
{/* <a href="https://www.freepik.com/free-photo/faded-gray-wooden-textured-flooring-background_16246476.htm#page=2&query=flooring&position=8&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}
{/* <a href="https://www.freepik.com/free-vector/oak-wood-textured-design-background_16339756.htm#page=2&query=flooring&position=31&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}