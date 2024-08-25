import { ChangeEvent, useState } from 'react';

interface Props {
  symbol: 'X' | 'O';
}

const SAVE_TEXT = 'Save';
const EDIT_TEXT = 'Edit';

export function Player({ symbol }: Props) {
  const [playerName, setPlayerName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  return (
    <span className="player">
      {isEditing ? (
        <input type="text" value={playerName} onChange={handleChange} />
      ) : (
        <span className="player-name">{playerName}</span>
      )}

      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>
        {isEditing ? SAVE_TEXT : EDIT_TEXT}
      </button>
    </span>
  );
}
