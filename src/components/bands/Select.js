import React from 'react';
import axios from 'axios';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/instruments')
      .then(result => {
        this.setState({ instruments: result.data });
        console.log('instruments?', this.state);
      });
  }

  render() {
    return(
      <div>
        <label htmlFor="lookingForInstrument">Instrument you are looking for</label>
        <select>
          {this.state.instruments
            ?
            this.state.instruments.map(instrument => <option key={instrument._id} value="lookingForInstrument.{instrument.name}" name="lookingForInstrument">{instrument.name}</option>)
            :
            <p>Just a minute...</p>
          }
        </select>
      </div>
    );
  }
}

export default Select;

//
// componentDidMount() {
//     axios.get('/api/characters')
//       .then(result => this.setState({ characters: result.data }));
//   }
//   render() {
//     return (
//       <div>
//         <label htmlFor="instruments">Instrument you're looking for</label>
//         {this.state.characters
//           ?
//           this.state.characters.map(character => <Container key={character._id} character={character} />)
//           :
//           <p>Just a minute...</p>
//         }
//       </div>
//     );
//   }
// }
//
//
//
// <select id="pet-select">
//     <option value="">--Please choose an option--</option>
//     <option value="dog">Dog</option>
//     <option value="cat">Cat</option>
//     <option value="hamster">Hamster</option>
//     <option value="parrot">Parrot</option>
//     <option value="spider">Spider</option>
//     <option value="goldfish">Goldfish</option>
// </select>
