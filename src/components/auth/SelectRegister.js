import React from 'react';

function Select({ instruments, onChange, instrumentsPlayed }) {
  // console.log('instruments', instruments);
  return(
    <div className="field column is-12">
      <label className="label select-label" htmlFor="instrumentsPlayed">What are you playing</label>
      <div className="select">
        <select onChange={onChange} value={instrumentsPlayed} name="instrumentsPlayed">
          <option value="instrumentsPlayed" name="instrumentsPlayed">Select one...</option>
          {instruments
            &&
            instruments.map(instrument => <option key={instrument._id} name="instrumentsPlayed" value={instrument._id}>{instrument.name}</option>)}
        </select>
      </div>
    </div>
  );
}

export default Select;
