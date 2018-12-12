import React from 'react';

function SelectFind({ instruments, onChange, lookingForInstrument }) {
  // console.log('instruments', instruments);
  return(
    <div>
      <h3>Find a band by instrument</h3>
      <label htmlFor="lookingForInstrument">Instrument: </label>
      <select onChange={onChange} value={lookingForInstrument} name="lookingForInstrument">
        <option value="lookingForInstrument" name="lookingForInstrument">Select one...</option>
        {instruments
          &&
          instruments.map(instrument => <option key={instrument._id} name="lookingForInstrument" value={instrument._id}>{instrument.name}</option>)}
      </select>
    </div>
  );
}

export default SelectFind;
