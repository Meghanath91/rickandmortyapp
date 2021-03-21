import React from "react";
import PropTypes from "prop-types";

function Characters({ character }) {
  return (
    <div>
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
