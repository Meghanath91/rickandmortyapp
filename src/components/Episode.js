import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import PropTypes from 'prop-types'
import { GET_EPISODE } from '../GraphQL/getEpisode';

function Episode(props) {
  const { id } = useParams();
  const [episode, setEpisode] = useState({})
  const [characters, setCharacters] = useState([])
  console.log(id)
  const { error, loading, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      console.log(data.episode);
      setEpisode(data.episode);
      setCharacters(data.episode.characters)
    }
  }, [data]);

  const displayCharacters = () => {
    return characters.map(character => {
      return (
        <li key={character.id}> {character.name}</li>
      )
    })
  }
  return (
    <div>
      <h1>{episode.name} {episode.episode}</h1>
      <h4>{displayCharacters()}</h4>
    </div>
  )
}

Episode.propTypes = {

}

export default Episode

