import React from 'react';

function Select({ instruments, onChange, instrumentsPlayed }) {
  console.log('instruments', instruments);
  return(
    <div>
      <label htmlFor="instrumentsPlayed">What are you playing</label>
      <select onChange={onChange} value={instrumentsPlayed} name="instrumentsPlayed">
        <option value="instrumentsPlayed" name="instrumentsPlayed">Select one...</option>
        {instruments
          &&
          instruments.map(instrument => <option key={instrument._id} name="instrumentsPlayed">{instrument.name}</option>)}
      </select>
    </div>
  );
}

export default Select;
