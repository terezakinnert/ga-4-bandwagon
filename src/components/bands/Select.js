import React from 'react';

function Select({ instruments }) {
  // console.log('instruments', instruments);
  return(
    <div>
      <label htmlFor="lookingForInstrument">Instrument you are looking for</label>
      <select>
        <option value="lookingForInstrument" name="lookingForInstrument">Select one...</option>
        {instruments
          &&
          instruments.map(instrument => <option key={instrument._id} value="lookingForInstrument" name="lookingForInstrument">{instrument.name}</option>)}
      </select>
    </div>
  );
}

export default Select;
