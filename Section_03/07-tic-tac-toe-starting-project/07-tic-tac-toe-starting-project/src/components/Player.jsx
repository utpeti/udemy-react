import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input />
        ) : (
          <span className="player-name">{props.name}</span>
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
