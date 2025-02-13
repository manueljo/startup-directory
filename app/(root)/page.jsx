import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({ searchParams }) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Manuel' },
      _id: 1,
      description: "A new way to connect with entrepreneurs",
      image: "https://cdn.sanity.io/images/3z4z5x8j/production/1b1",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post,index) => (
                <StartupCard key={post?._id} post={post}/>
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )
          }
        </ul>
      </section>
    </>
  );
};

export default Home;
