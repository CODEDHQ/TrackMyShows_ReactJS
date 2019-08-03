import React from "react";
import ShowsList from "./ShowsList";
import TopNavBar from "./TopNavBar";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div className="container-responsive">
      <div>
        <TopNavBar />
      </div>
      <div className="col-12">
        <SearchBar />
        <ShowsList />
      </div>
    </div>
  );
}

export default HomePage;
