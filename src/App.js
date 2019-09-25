import React from 'react';
import './App.css';

class App extends React.Component {

  constructor ( props ) {
      super(props)
      this.state = {
        'img' : props.img,
        'tips' : props.tips

      }
      console.log('state is', this.state)
     
  }

  render () {
    var tips = this.state.tips.map((tip) =>
      <div class="tooltip" style={{ left: tip.x + "%", top: tip.y + "%" }}> 
          <span class="tooltiptext">{ tip.text }</span>
      </div>

    );
    return (
      <div className="App">
          <img src={this.state.img} className="background" alt="logo" />
          <div class="overlay">
            {tips}
          </div>
      </div>
    );
  }



}

export default App;
