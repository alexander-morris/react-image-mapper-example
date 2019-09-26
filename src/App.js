import React from 'react';
import ImageMapper from 'react-image-mapper';
// import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      img : props.img,
      map : props.map
    }
  }

  render () {
    return(
          <div style={{ position: "relative" }}>
            <ImageMapper
              src={this.state.img}
              map={this.state.map}
              width={500}
              onLoad={() => this.load()}
              onClick={area => this.clicked(area)}
              onMouseEnter={area => this.enterArea(area)}
              onMouseLeave={area => this.leaveArea(area)}
              onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              onImageClick={evt => this.clickedOutside(evt)}
              onImageMouseMove={evt => this.moveOnImage(evt)}
              lineWidth={4}
              strokeColor={"white"}
            />
            {this.state.hoveredArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}
              >
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            )}
          </div>
    );

  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  getInitialState() {
    return { hoveredArea: null, msg: null, moveMsg: null };
  }

  load() {
    this.setState({ msg: "Interact with image !" });
  }

  clicked(area) {
    this.setState({
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  }

  clickedOutside(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
    });
  }

  moveOnImage(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  }

  enterArea(area) {
    this.setState({
      hoveredArea: area,
      msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  }

  leaveArea(area) {
    this.setState({
      hoveredArea: null,
      msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  }

  moveOnArea(area, evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on ${area.shape} ${
        area.name
      } at coords ${JSON.stringify(coords)} !`
    });
  }
  


}

export default App;
