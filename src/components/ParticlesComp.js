import React, { Component } from 'react';
import Responsive from 'react-responsive-decorator'
import Particles from 'particlesjs'
  
class ParticlesComp extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isHidden: false
    }
  }
  
  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isHidden: false
      });
      
      Particles.init({
        selector: '.background',
        maxParticles: 70,
        connectParticles: true,
        color: '#7952b3',
      });
    });
    
    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isHidden: true
      });
    });
  }

  componentWillUnmount() {
    this.props.media({ minWidth: 768 }, () => {
      Particles.destroy();
    });
  }

  render() {
    const {isHidden} = this.state;
    console.log(isHidden);
    return (
      <div>
        {isHidden ? <div></div> :
        <div className="canvas-container">
          <canvas className="background" id="canvas"></canvas>
        </div>}
      </div>
    );
  }
}

// we can use the responsive decorator as a HOC
export default Responsive(ParticlesComp);