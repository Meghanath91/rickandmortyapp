import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import { GET_LOCATION } from '../GraphQL/getLocation'

function Location(props) {
  const { id } = useParams();
  const [location, setLocation] = useState({})
  const [residents, setResidents] = useState([])
  console.log(id)
  const { error, loading, data } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      console.log(data.location.residents);
      setLocation(data.location);
      setResidents(data.location.residents)
    }
  }, [data]);

  const displayResidents = () => {
    return residents.map(resident => {
      return (
        <p key={resident.id}>{resident.name}</p>
      )
    })
  }
  return (
    <div>
      <h1>{location.name}</h1>
      <h4>Residents</h4>
      {displayResidents()}
    </div>
  )
}

Location.propTypes = {

}

export default Location

