import React from 'react'
import PropTypes from 'prop-types'

function Character({ character }) {

  return (
    <div>
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

Character.propTypes = {

}

export default Character

