import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_CHARACTERS } from "../GraphQL/queries";
export default function Main() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    if (data) {

      console.log(data.characters.results);

      setCharacters(data.characters.results);
    }
  }, [data]);

  return (
    <div>
      {characters.map((character) => {
        return <li key={character.id}>{character.name}</li>;
      })}
    </div>
  );
}
