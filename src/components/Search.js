import React from 'react'

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
          <div>List</div>

          </div>
          <div className='map'>
          <div>Map</div>

          </div>
        </div>

      </div>
    </>
  )
}
