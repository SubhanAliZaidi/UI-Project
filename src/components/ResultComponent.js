import React from 'react';
import img1 from '../assets/icon-usp6.png';
import img2 from '../assets/72ab4bb0b57577337af1b4499c3ff120.png'
import ResultCard from './ResultCard';

export default function ResultComponent() {
  return (
    <>
      <div className="result-parent">

        <div className="result">
          <div className="result-child">

            <div className="directorypath">
              <div className="pathchild">
                <div className="path">Home / Delhi / Jama Masjid</div>

                <div className="sort">
                  <label for="sortBy">Sort By :</label>
                  <select name="sortBy" id="sortBy">
                    <option value="NoBroker Rank">NoBroker Rank</option>
                    <option value="Posted On (Newest First)">Posted On (Newest First)</option>
                    <option value="Posted On (Oldest First)">Posted On (Oldest First)</option>
                    <option value="Rent (Low To High)">Rent (Low To High)</option>
                    <option value="Rent (High To Low)">Rent (High To Low)</option>
                  </select>
                </div>

              </div>
              <div className="pathchild">
                <span>0 - Flats, Apartments for Rent in Jama Masjid, Delhi | Rental Properties in Jama Masjid</span>
              </div>
            </div>

            <div className="directorypath">
              <div className='showingresult'>
                <img src={img1} className="" alt='location icon' width={'110px'}></img>

                <div>Showing properties near Jama Masjid</div>

              </div>
            </div>

            <ResultCard />

          </div>
        </div>


        <div className="quicklinkbar">
          <div className="quicklink-card">
            <div className='quicklink-heading'>Quick links</div>
            <hr />
            <p>People also searched for</p>

            <ul>
              <li>Flats in Daryaganj for rent</li>
              <li>Flats in Barakhamba for rent</li>
              <li>Flats in Maulana Azad Medical College Campus for rent</li>
              <li>Flats in Paharganj for rent</li>
              <li>Flats in Sadar Bazaar for rent</li>
              <li>Flats in Mori Gate for rent</li>
            </ul>

          </div>

          <img src={img2} alt="ads" />
        </div>


      </div>
    </>
  )
}
