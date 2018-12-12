import React from 'react';

function Select({ instruments, onChange, lookingForInstrument }) {
  console.log('instruments in select', instruments);
  return(
    <div className="">
      <div className="">
        <label className="label" htmlFor="lookingForInstrument">Instrument you are looking for</label>
        <select onChange={onChange} value={lookingForInstrument._id} name="lookingForInstrument._id">
          <option value="lookingForInstrument" name="lookingForInstrument">Select one...</option>
          {instruments
            &&
            instruments.map(instrument => <option key={instrument._id} name="lookingForInstrument">{instrument.name}</option>)}
        </select>
      </div>
    </div>
  );
}

export default Select;
//
// <div class="field">
//   <div class="control">
//     <div class="select is-primary">
//       <select>
