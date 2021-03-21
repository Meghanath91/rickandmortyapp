import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { GET_CHARACTER } from "../GraphQL/getCharacter";
import Episodes from "./Episodes";

function Character(props) {
  let { id } = useParams();
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState([]);
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      console.log(data.character, "this is what you want");
      setCharacter(data.character);
      if (data.character.episode) {
        setEpisode(data.character.episode);
      }
      if (data.character.location) {
        setLocation(data.character.location)
      }
    }
  }, [data]);

  const displayEpisodes = () => {
    return episode.map((episode) => {
      return (
        <Link to={`/episode/${episode.id}`} key={episode.id}>
          <Episodes id={episode.id} key={episode.id} episode={episode} />
        </Link>
      );
    })
  }

  return (
    <div>
      <div>
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <p>{location.name}</p>
        <h4>Episodes</h4>
        {displayEpisodes()}
      </div>
    </div>
  );
}

Character.propTypes = {};

export default Character;
