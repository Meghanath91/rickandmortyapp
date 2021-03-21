import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../GraphQL/queries/getLocation";
import Error from "./Error";
import Loading from "./Loading";

function Location() {
  const { id } = useParams();
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const { error, loading, data } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setLocation(data.location);
      setResidents(data.location.residents);
    }
  }, [data]);

  const displayResidents = () => {
    return residents.map((resident) => {
      return (
        <Link
          className="entity-link"
          to={`/character/${resident.id}`}
          key={resident.id}
        >
          <div className="card">{resident.name}</div>
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
              <h1>{location.name}</h1>
              <h4>Residents</h4>
              <div className="entity-container">{displayResidents()}</div>
            </div>
          )}
    </div>
  );
}

Location.propTypes = {};

export default Location;
