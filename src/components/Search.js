import React from 'react'
import listmenuimg from '../assets/listIconWhite.png'

export default function Search() {
  return (
    <>
      <div className="navbar search">
        <div className="searchchild">
          <span>Jama Masjid</span>
          <input type="text" placeholder={"Add More..."} />
          <button>Search</button>
        </div>

        <p>save search</p>

        <div className="searchchild2">
          <div className='list'>
          <div><img src={listmenuimg} alt="" />List</div>

          </div>
          <div className='map'>
          <div>Map</div>

          </div>
        </div>

      </div>
    </>
  )
}
