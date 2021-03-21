import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_CHARACTER } from "../GraphQL/queries/getCharacter";
import Error from "./Error";
import Loading from "./Loading";
import '../css/style.css'
function Character() {
  let { id } = useParams();
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState([]);
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setCharacter(data.character);
      if (data.character.episode) {
        setEpisode(data.character.episode);
      }
      if (data.character.location) {
        setLocation(data.character.location);
      }
    }
  }, [data]);

  const displayEpisodes = () => {
    return episode.map((episode) => {
      return (
        <Link className="episode-link" to={`/episode/${episode.id}`} key={episode.id}>
          <div>
            {episode.name}
          </div>
        </Link>
      );
    });
  };

  const displayLocation = () => {
    return (
      <Link to={`/location/${location.id}`}>
        <p>Location : {location.name}</p>
      </Link>
    );
  };

  return (
    <div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
            <section className="character-container">
              <div className="character-card">
                <img
                  className="character-img"
                  src={character.image}
                  alt={character.name}
                />
                <h3>{character.name}</h3>
                <p>Status : {character.status}</p>
                {displayLocation()}
              </div>
              <div className="episode-main-container">
                <h4>Episodes</h4>
                <div className="episodes-container">
                  {displayEpisodes()}
                </div>
              </div>
            </section>
          )}
    </div>
  );
}

Character.propTypes = {};

export default Character;
