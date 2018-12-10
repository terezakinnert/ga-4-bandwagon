import React from 'react';

function Select({ instruments, onChange, lookingForInstrument }) {
  // console.log('instruments', instruments);
  return(
    <div>
      <label htmlFor="lookingForInstrument">Instrument you are looking for</label>
      <select onChange={onChange} value={lookingForInstrument} name="lookingForInstrument">
        <option value="lookingForInstrument" name="lookingForInstrument">Select one...</option>
        {instruments
          &&
          instruments.map(instrument => <option key={instrument._id} name="lookingForInstrument">{instrument.name}</option>)}
      </select>
    </div>
  );
}

export default Select;
