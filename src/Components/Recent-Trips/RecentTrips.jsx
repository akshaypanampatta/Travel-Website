import React from "react";
import "./RecentTrips.css";
import { RecentTripsList } from "./RecentTripsList";

function RecentTrips() {
  return (
    <div className="recenttrips">
      <div className="rcnt-trip-hdlne-sub">
        <p className="recent-trip-hdlne">Recent Trips</p>
        <p className="recent-trip-sub">
          You can discover unique destinations using Google Maps
        </p>
      </div>
      <div className="cards">

      {RecentTripsList.map((trips) => (
        
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top1"
              src={trips.image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{trips.title}</h5>
              <p class="card-text">
                {trips.content}
              </p>
            </div>
          </div>
        
      ))}
      </div>
      
      
    </div>
  );
}

export default RecentTrips;
