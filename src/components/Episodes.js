import React from 'react'
import PropTypes from 'prop-types'

function Episodes({ episode }) {
  return (
    <div>
      {episode.name}
    </div>
  )
}

Episodes.propTypes = {
  props: PropTypes.object
}

export default Episodes

