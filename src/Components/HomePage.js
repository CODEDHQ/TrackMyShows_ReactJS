import React from "react";
import ShowsList from "./ShowsList";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div className="container-responsive">
      <div className="col-12">
        <SearchBar />
        <ShowsList />
      </div>
    </div>
  );
}

export default HomePage;
