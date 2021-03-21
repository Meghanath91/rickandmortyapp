import React from "react";
import PropTypes from "prop-types";
import '../css/style.css'
function Characters({ character }) {
  return (
    <div className="characterlist-container">
      {" "}
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
      />
      <p>{character.name}</p>
    </div>
  );
}

Characters.propTypes = {
  props: PropTypes.object,
};

export default Characters;
