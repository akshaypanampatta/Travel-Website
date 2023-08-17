import React from "react";
import VideoSection from "../Components/VideoSection/VideoSection";
import PopularDestinations from "../Components/Popular-Destinations/PopularDestinations";
import RecentTrips from "../Components/Recent-Trips/RecentTrips";


function Home() {
  return (
    <div>
        <VideoSection />
        <PopularDestinations />
        <RecentTrips />
    </div>
  );
}

export default Home;
