import React from 'react';

function Select({ instruments, onChange, lookingForInstrument }) {
  // console.log('instruments in select', instruments);
  return(
    <div className="">
      <div className="">
        <label className="label select-label" htmlFor="lookingForInstrument">What instrument are you looking for? </label>
        <div className="select">
          <select onChange={onChange} value={lookingForInstrument._id} name="lookingForInstrument">
            <option>Select one...</option>
            {instruments
              &&
              instruments.map(instrument => <option key={instrument._id} name="lookingForInstrument" value={instrument._id}>{instrument.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
