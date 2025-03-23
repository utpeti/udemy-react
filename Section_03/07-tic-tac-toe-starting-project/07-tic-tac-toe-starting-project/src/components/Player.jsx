import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span className="player">
        <span className="player-name">{props.name}</span>
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
