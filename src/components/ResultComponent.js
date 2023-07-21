import React from 'react';
import img1 from '../assets/icon-usp6.png';

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
                  Sort By:
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

            <section className="actualresult">
              
            </section>
            
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
        </div>


      </div>
    </>
  )
}
