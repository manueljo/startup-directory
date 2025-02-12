import React from "react";
import SearchForm from "../../components/SearchForm";

const Home = async ({searchParams}) => {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
};

export default Home;
