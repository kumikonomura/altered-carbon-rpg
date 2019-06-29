import React from 'react'
import './App.css'
import Characters from './components/Characters'

class App extends React.Component {
  state = {
    character1: 'https://www.nycjackets.com/wp-content/uploads/2018/09/Altered-Carbon-Takeshi-Kovacs-Coat-Left.jpg',
    character2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_gjlkTsLTPMKXng3IzA-msQ0scyS-zAxRv1sBQY2zP_TDYVE',
    character3: 'https://static.tvmaze.com/uploads/images/medium_portrait/145/363727.jpg',
    character4: 'https://vignette.wikia.nocookie.net/altered-carbon/images/2/2c/Mister_Leung.png/revision/latest?cb=20180208001152',
    HP1: 180,
    HP2: 130,
    HP3: 180,
    HP4: 160
  }
  // When character 1 is selected
  handleCharacter1 = _ => {
    
  }
  
  render () {
    return (
      <>
      <h1 style={{ color: 'white' }}>Altered Carbon RPG</h1>
      <Characters
      character1={this.state.character1}
      character2={this.state.character2}
      character3={this.state.character3}
      character4={this.state.character4}
      clickCharacter={this.handleCharacter}
      />
      </>
    )
  }
}

export default App
