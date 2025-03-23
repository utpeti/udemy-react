import { useState } from "react";

export default function Player(props) {
  const [playerName, setPlayerName] = useState(props.initialName);
  const [isEditing, setIsEditing] = useState(false);

  let nameField = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    nameField = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
