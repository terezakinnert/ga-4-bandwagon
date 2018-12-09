import React from 'react';
// import axios from 'axios';

function Select({ instruments }) {
  console.log('instruments', instruments);
  return(
    <div>
      <label htmlFor="lookingForInstrument">Instrument you are looking for</label>
      <select>
        <option value="lookingForInstrument" name="lookingForInstrument">Select one...</option>
        {instruments
          ?
          instruments.map(instrument => <option key={instrument._id} value="lookingForInstrument" name="lookingForInstrument">{instrument.name}</option>)
          :
          <p>Just a minute...</p>
        }
      </select>
    </div>
  );
}

export default Select;


// class Select extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
// render(){}
