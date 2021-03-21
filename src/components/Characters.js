import React from 'react'
import PropTypes from 'prop-types'

function Characters({ character }) {
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <div onClick={handleClick}>
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

}

export default Characters

