import React from 'react'
import locationimg from '../assets/list_location_icon.png'

export default function ResultCard() {
  return (
    <>
      <section className="actualresult">
        <div className="firstchild">
          <div className="houseinfo">
            <a>1 RK House For Rent In Esplande Road, Chandni Chowk</a>
            <p>Independent House, Netaji Subhash Marg, Near Red fort <img src={locationimg} alt="" width={'17px'} /> <a>Explore Nearby</a></p>
          </div>

          <button>2</button>
        </div>

        <div className="secondchild">
          <div className='rentinfo'>
            <div>Rs. 11,000+</div>
            <div>Rent (Non-Negotiable)</div>
          </div>
          <div className='rentinfo'>
            <div>Rs. 11,000</div>
            <div>Deposit</div>
          </div>
          <div className='rentinfo'>
            <div>401 sqft</div>
            <div>Builtup</div>
          </div>
        </div>

        <div className="thirdchild">
          <div className="imagecontainer">Image</div>

          <div className="infocontainer">
            <div className="roominfo">

              <div className="sections">
                <div className="sectionimg"><i className="fa-solid fa-couch fa-xl"></i></div>
                <div className="sectioninfo">
                  <div>Semi Furnished</div>
                  <div>Furnishing</div>
                </div>
              </div>

              <div className="sections">
                <div className="sectionimg"><i className="fa-solid fa-building fa-xl"></i>
                </div>
                <div className="sectioninfo">
                  <div>1 RK</div>
                  <div>Apartment Type</div>
                </div>
              </div>

              <hr />

              <div className="sections">
                <div className="sectionimg"><i className="fa-solid fa-users fa-xl"></i>
                </div>
                <div className="sectioninfo">
                  <div>All</div>
                  <div>Preferred Tenants</div>
                </div>
              </div>


              <div className="sections">
                <div className="sectionimg"><i className="fa-solid fa-key fa-xl "></i></div>
                <div className="sectioninfo">
                  <div>Ready To Move</div>
                  <div>Available From</div>
                </div>
              </div>


            </div>
            <div className="ownerinfo">
              <button>Get Owner Details</button>
              <button><i className="fa-regular fa-heart fa-lg"></i></button>
              <button><i className="fa-solid fa-flag fa-lg"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}