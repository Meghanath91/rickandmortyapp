import React from 'react'
import PropTypes from 'prop-types'

function Characters({ character }) {

  return (
    <div >
      {" "}
      <img
        className="profile-pic"
        src={character.image}
        alt="Tim Baker Profile Pic"
      />
      <li key={character.id}>{character.name}</li>
    </div>
  )
}

Characters.propTypes = {
  props: PropTypes.object
}

export default Characters

