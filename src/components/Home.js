import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../GraphQL/queries";
import InfiniteScroll from "react-infinite-scroll-component";
import Characters from "./Characters";
import { Link } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: nextPage },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setCharacters(data.characters.results);
    }
  }, [data]);

  const fetchMoreData = () => {
    if (data) {
      setNextPage(data.characters.info.next);
      setCharacters([...characters, ...data.characters.results]);
    }
  };

  const displayCharacters = () => {
    return characters.map((character) => {
      return <Link to={`/character/${character.id}`} key={character.id}>
        <Characters
          id={character.id}
          character={character}
        />
      </Link>;
    });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchMoreData}
        loader={<h4>Loading...</h4>}
        hasMore={nextPage}
        height="50vh"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>That's it !!!</b>
          </p>
        }
      >
        {displayCharacters()}
      </InfiniteScroll>
    </div>
  );
}
