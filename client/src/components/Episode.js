import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../GraphQL/queries/getEpisode";
import Error from "./Error";
import Loading from "./Loading";

/**
 * @func Episode
 * @return {HTML}
 */
function Episode() {
  const { id } = useParams();
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);
  const { error, loading, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setEpisode(data.episode);
      setCharacters(data.episode.characters);
    }
  }, [data]);

  /**
   * @func displayCharacters
   * @return {HTML}
   */
  const displayCharacters = () => {
    return characters.map((character) => {
      return (
        <Link to={`/character/${character.id}`} className="entity-link">
          <div className="card">{character.name}</div>
        </Link>
      );
    });
  };
  return (
    <div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
            <div className="location-container">
              <h1>
                {episode.name} : {episode.episode}
              </h1>
              <div className="entity-container">
                {displayCharacters()}
              </div>
            </div>
          )}
    </div>
  );
}

export default Episode;
