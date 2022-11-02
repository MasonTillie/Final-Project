import React, { useState } from 'react'



export default function PlayerInfo() {
  const [playerName, setPlayerName] = useState('')
  const [playerPosition, setPlayerPosition] = useState('')
  const [playerHeight, setPlayerHeight] = useState('')
  const [playerWeight, setPlayerWeight] = useState('')
  const [playerTeam, setPlayerTeam] = useState('')

  const getPlayer = async () => {
    const responce = await fetch('https://www.balldontlie.io/api/v1/players?search=lebron')
    const data = await responce.json()
    console.log(data)
    setPlayerName(data['first_name'])
    setPlayerPosition(data['position'])
    setPlayerHeight(data['height_feet'])
    setPlayerWeight(data['weight_pounds'])
    setPlayerTeam(data['full_name'])


    const name = data.data[0].first_name
    const lastname = data.data[0].last_name
    const pos = data.data[0].position
    const height = data.data[0].height_feet
    const height_inch = data.data[0].height_inches
    const weight = data.data[0].weight_pounds
    const team_full_name = data.data[1].full_name


    document.querySelector('#playername').innerText = 'Player Name: ' + name + " " + lastname
    document.querySelector('#playerheight').innerText = 'Player Height: ' + height + " " + height_inch
    document.querySelector('#playerPos').innerText = 'Player Pos: ' + pos
    document.querySelector('#playerWeight').innerText = 'Player Weight: ' + weight
    document.querySelector('#playerheight').innerText = 'Player Height: ' + height + " " + height_inch
    document.querySelector('#teamName').innerText = 'Team Name: ' + team_full_name


  }
  getPlayer()

  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/utgfcacoxl6hwd2bj2ay/10-most-influential-nba-players-2022-original-nonw?fimg-ssr-default" className="card-img-top" alt="Sunset Over the Sea" />
        <div className="card-body">
          <p className="card-text" id='playername'>Player Name</p>
          <p className="card-text" id='playerteam'>Player Team</p>
          <p className="card-text" id='playerPos'>Player Position</p>
          <p className="card-text" id='playerheight'>Player Height</p>
          <p className="card-text" id='playerWeight'>Player Weight</p>
          <p className="card-text" id='teamName'>Team Name</p>
          <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary btn-md" onClick={getPlayer}>ENTER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
