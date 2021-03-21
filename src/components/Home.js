import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../GraphQL/queries/getCharacters";
import InfiniteScroll from "react-infinite-scroll-component";
import Characters from "./Characters";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: nextPage, name: search, gender: gender, status: status },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  const fetchMoreData = () => {
    if (data) {
      setNextPage(data.characters.info.next);
      setCharacters([...characters, ...data.characters.results]);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };
  const handleGender = (e) => {
    const newGender = e.target.value;
    setGender(newGender);
  };
  const handleStatus = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
  };
  const displayCharacters = () => {
    return characters.map((character) => {
      return (
        <Link to={`/character/${character.id}`} key={character.id}>
          <Characters id={character.id} character={character} />
        </Link>
      );
    });
  };

  return (
    <div>
      <h1>Rick & Morty App</h1>
      <div>
        <TextField
          variant="outlined"
          type="search"
          id="outlined-name"
          label="Search by name"
          onChange={handleSearch}
          value={search}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
          <Select
            native
            value={gender}
            onChange={handleGender}
            label="Gender"
            inputProps={{
              name: "gender",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
          <Select
            native
            value={status}
            onChange={handleStatus}
            label="status"
            inputProps={{
              name: "gender",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </Select>
        </FormControl>
      </div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
            <div>
              <InfiniteScroll
                dataLength={characters.length}
                next={fetchMoreData}
                loader={<h4>Loading...</h4>}
                hasMore={nextPage}
                height="100vh"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>That's it !!!</b>
                  </p>
                }
              >
                {displayCharacters()}
              </InfiniteScroll>
            </div>
          )}
    </div>
  );
}
