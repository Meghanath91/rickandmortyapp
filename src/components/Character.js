import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_CHARACTER } from "../GraphQL/queries/getCharacter";
import Episodes from "./Episodes";
import Error from "./Error";
import Loading from "./Loading";

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
        <Link to={`/episode/${episode.id}`} key={episode.id}>
          <Episodes episode={episode} />
        </Link>
      );
    });
  };

  const displayLocation = () => {
    return (
      <Link to={`/location/${location.id}`}>
        <p>{location.name}</p>
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
            <div>
              <h3>{character.name}</h3>
              <p>{character.status}</p>
              {displayLocation()}
              <h4>Episodes</h4>
              {displayEpisodes()}
            </div>
          )}
    </div>
  );
}

Character.propTypes = {};

export default Character;
