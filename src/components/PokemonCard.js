import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ 
  name,
  hp,
  sprites
 }) {
  const [sprite, setSprite] = useState(true)
  
  // SPRITE SWITCHER
  function switchSprites() {
    setSprite(!sprite)
  }

  return (
    <Card onClick={switchSprites}>
      <div>
        <div className="image">
          <img src={ sprite ? sprites.front : sprites. back} />
          {/* <img alt={name} /> */}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
