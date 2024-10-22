import { useState,useEffect } from "react"
import './card.css'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AirIcon from '@mui/icons-material/Air';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Card(){

  return(
    <>
      <div className="legendary-card">
        <span className="type-container">
          <WhatshotIcon className="type" style={{color: "red"}}/>
          <AirIcon className="type" style={{color: "skyblue"}}/>
        </span>
        <div className="name">
          Flareonyx
        </div>

        <div className="desc">
          A blazing phoenix with wings of fire
        </div>

        <div className="stats">
          <div className="health">
            <FavoriteIcon className="icon"/>
            : 75
          </div>
          <div className="defense">
            <ShieldIcon className="icon"/>
            : 70
          </div>
          <div className="speed">
            <SpeedIcon className="icon"/>
            : 85
          </div>
        </div>

        <div className="abilities">
          <div className="ability">
            <div className="ability-stats">
              <div className="ability-name">
                Inferno Wave
              </div>
              <div className="ability-damage">
                50
              </div>
            </div>
            <div className="ability-desc">
              A large wave of fire engulfs all enemies, dealing significant damage.
            </div>
          </div>

          <div className="ability">
            <div className="ability-stats">
              <div className="ability-name">
                Gust
              </div>
              <div className="ability-damage">
                20
              </div>
            </div>
            <div className="ability-desc">
              A strong gust of wind pushes back the enemy, dealing light damage and possibly reducing their accuracy.
            </div>
          </div>

          <div className="special-skill">
              <div style={{fontWeight: 'bold'}}>Pheonix Rebirth</div>
              <div>
                Revives once with half health after being knocked out
              </div>
          </div>

        </div>
      </div>
    </>
  )
}