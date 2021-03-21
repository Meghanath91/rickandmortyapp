import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../GraphQL/queries/getEpisode";

function Episode() {
  const { id } = useParams();
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);
  console.log(id);
  const { error, loading, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setEpisode(data.episode);
      setCharacters(data.episode.characters);
    }
  }, [data]);

  const displayCharacters = () => {
    return characters.map((character) => {
      return (
        <Link to={`/character/${character.id}`}>
          <p key={character.id}> {character.name}</p>
        </Link>
      );
    });
  };
  return (
    <div>
      <h1>
        {episode.name} {episode.episode}
      </h1>
      <h4>{displayCharacters()}</h4>
    </div>
  );
}



export default Episode;
