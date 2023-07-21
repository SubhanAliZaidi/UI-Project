import React from "react";

export default function SearchFilter() {
  return (
    <>
      <div className="searchfilter">
        <button>Filter</button>
        <button>Premium Filters</button>
        <p className="floattitle">New</p>
        <div className="main">
          <div className="resetbtn">Reset</div>

          <div>
            <div className="titleheading">BHK Type</div>
            <div className="sizecontent">
              <span>1RK</span>
              <span>1 BHK</span>
              <span>2 BHK</span>
              <span>3 BHK</span>
              <span>4 BHK</span>
              <span>4+ BHK</span>
            </div>

          </div>

          <div>
            <div className="titleheading mt-3">Rent Range: Rs 0 to Rs 5 Lacs</div>
            <div className="rangecontent">
              <input type="range" className="slider mt-3" />
            </div>

          </div>

          <div>
            <div className="titleheading mt-3">Availability</div>
            <div className="availabilitycontent mt-3">

              <div className="radiobtn">
                <input type="radio" id="child" name="age" value="child" />
                <label for="child">Immediate</label>

              </div>

              <div className="radiobtn">
                <input type="radio" id="child" name="age" value="child" />
                <label for="child">Within 15 Days</label>

              </div>

              <div className="radiobtn">
                <input type="radio" id="child" name="age" value="child" />
                <label for="child">Within 30 Days</label>
              </div>

              <div className="radiobtn">
                <input type="radio" id="child" name="age" value="child" />
                <label for="child">After 30 Days</label>

              </div>
            </div>
          </div>


          <div>
            <div className="titleheading mt-3">Preferred Tenants</div>

            <div className="tenantcontent mt-3">

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Family</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Bachelor</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Company</label>
              </div>
            </div>

          </div>



          <div>
            <div className="titleheading mt-3">Property Type</div>

            <div className="apartmentcontent mt-3">
              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Apartment</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Independent House/Villa</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Gated Community Villa</label>
              </div>

            </div>
          </div>

          <div>
            <div className="titleheading mt-3">Furnishing</div>

            <div className="furnishingcontent mt-3">

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Full</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Semi</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">None</label>
              </div>

            </div>
          </div>



          <div>
            <div className="titleheading mt-3">Parking</div>

            <div className="parkingcontent mt-3">

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">2 Wheeler</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">4 Wheeler</label>

              </div>

              <div className="radiobtn">
                <input type="checkbox" id="child" name="age" value="child" />
                <label for="child">Only Show Lease Property</label>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
