import React from 'react'
import PropTypes from 'prop-types'
import { GET_LOCATION } from '../GraphQL/'

function Location(props) {
  const { error, loading, data } = useQuery(GET_LOCATION, {
    variables: { page: nextPage },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setCharacters(data.characters.results);
    }
  }, [data]);
  return (
    <div>
      hi
    </div>
  )
}

Location.propTypes = {

}

export default Location

