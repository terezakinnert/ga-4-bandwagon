import React from 'react';

function SelectFind({ instruments, onChange, instrumentsPlayed }) {
  // console.log('instruments', instruments);
  return(
    <div>
      <h3>Find a musician by instrument</h3>
      <label htmlFor="instrumentsPlayed">Instrument: </label>
      <select onChange={onChange} value={instrumentsPlayed} name="instrumentsPlayed">
        <option value="instrumentsPlayed" name="instrumentsPlayed">Select one...</option>
        {instruments
          &&
          instruments.map(instrument => <option key={instrument._id} name="instrumentsPlayed" value={instrument._id}>{instrument.name}</option>)}
      </select>
    </div>
  );
}

export default SelectFind;
