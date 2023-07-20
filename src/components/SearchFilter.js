import React from "react";

export default function SearchFilter() {
  return (
    <>
      <div className="searchfilter">
        <button>Filter</button>
        <button>Premium</button>
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
            <div className="titleheading mt-2">Rent Range: Rs 0 to Rs 5 Lacs</div>
            <div className="rangecontent">
              <input type="range" className="slider mt-3" />
            </div>

          </div>

          <div>
            <div className="titleheading mt-2">Availability</div>
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
            <div className="titleheading mt-2">Availability</div>
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


        </div>
      </div>
    </>
  );
}
