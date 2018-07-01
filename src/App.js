import React, { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom'
import Responsive from 'react-responsive-decorator'

import Terms from './components/Terms'
import Privacy from './components/Privacy'
import About from './components/About'
import NotFound from './components/NotFound'
import Particles from 'particlesjs'

import './main.min.css';
import './Navigation.css';
import logo from './media/logo.png'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        
        <Switch>
          {/* if the path matches the component will render */}
          <Route exact path='/' component={Landing}/>
          <Route path='/terms' component={Terms}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/about' component={About}/>
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route
            component={(props) => <NotFound {...props} image={'https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif'} />}
          />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;


// @Responsive
const Display = Responsive(class Display extends Component {
  
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
        // normal options
        selector: '.background',
        maxParticles: 70,
        connectParticles: true,
        color: '#7952b3',

        // // options for breakpoints
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     options: {
        //       maxParticles: 50,
        //     }
        //   }, {
        //     breakpoint: 425,
        //     options: {
        //       maxParticles: 50,
        //     }
        //   }, {
        //     breakpoint: 320,
        //     options: {
        //       maxParticles: 0
        //     }
        //   }
        // ]
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
})

// function outerHeight() {
//   var el = document.getElementById("canvas")
//   var height = el.parentNode.offsetHeight;
//   return height;
// }
// 
// function outerWidth() {
//   var el = document.getElementById("canvas")
//   var width = el.parentNode.offsetWidth;
//   return width;
// }

const Landing = () => {
  return (
    <div>
      <Masthead />
      <Content />
    </div>
  )
}


const Navigation = () => {
  return (
    <header className="navbar navbar-expand navbar-light flex-column flex-md-row fixed-top">
      <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Verite Data Science">
        <img className="d-inline-block align-top" src={logo} width="30" height="30" alt="" /> Verite Data Science
      </a>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-lighter text-secondary mt-4">
      <div className="container font-weight-light">
        <div className="row py-3">
          <div className="col-sm-8">
            <h4>About Us</h4>
            <p className="my-2">We support the digital journey of employees, data, software, and infrastructure to cloud-native technologies.</p>
          </div>
          <div className="col-sm-4">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to='/privacy'>Privacy</NavLink>
              </li>
              <li> 
                <NavLink to='/terms'>Terms of Use</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <p className="small">Copyright © 2018 Verite Data Science, LLC, all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Masthead = () => {
  return (
    <main className="bd-masthead" id="content" role="main">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto col-md-6 order-md-2 d-none d-md-block">
            <Display />
          </div>
          <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
            <h1 className="display-3 mb-3 animation-fast animated fadeInDown bd-text-purple-bright"><img className="d-inline-block align-top" src={logo} width="75" height="75" alt=""/> Verite Data Science</h1>
            <p className="lead bd-text-purple-bright">INNOVATION, POWERED BY DATA</p>
            <p className="lead">Our clients demand deep industry knowledge and experience, coupled with innovation and the ability to roll up our sleeves and make business transformation happen. As technology rapidly evolves, it’s more important than ever to have an innovation advisor on your side. Whether it’s time to create a new vision or put one into place, we can help.</p>
            <div className="d-flex flex-column flex-md-row lead mb-3">
              <a className="btn btn-lg btn-bd-purple mb-3 mb-md-0 mr-md-3" href="/about">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const Content = () => {
  return (
    <div className="container">
      <div className="card-group my-3">
        <div className="card">
          <div className="svg-container mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 120" x="0px" y="0px">
              <path d="M60.012 58.98c-0.424 0-0.852-0.136-1.216-0.412l-8.76-6.72-8.444 6.696c-0.864 0.684-2.128 0.54-2.808-0.324-0.688-0.864-0.54-2.12 0.324-2.808l9.664-7.664c0.716-0.572 1.732-0.576 2.464-0.020l10 7.664c0.876 0.676 1.040 1.924 0.368 2.808-0.4 0.512-0.996 0.78-1.592 0.78z"></path>
              <path d="M50.012 90.98c-1.104 0-2-0.896-2-2v-36c0-1.104 0.896-2 2-2s2 0.896 2 2v36c0 1.104-0.896 2-2 2z"></path>
              <path d="M78 72.98h-17.988c-1.104 0-2-0.896-2-2s0.896-2 2-2h17.988c7.72 0 13.996-6.268 13.996-13.98 0-5.028-2.656-9.556-7.1-12.092-0.664-0.38-1.060-1.112-1-1.88 0.064-0.844 0.1-1.42 0.1-2.012 0-16.54-13.456-30-29.996-30-13.716 0-25.66 9.288-29.044 22.596-0.232 0.916-1.1 1.548-2.028 1.504-0.22-0.012-0.432-0.036-0.648-0.072-10.176-0.072-18.288 8.036-18.288 17.948s8.076 17.976 18 17.976h18.020c1.104 0 2 0.9 2 2 0 1.104-0.896 2.012-2 2.012h-18.012c-12.132 0-22-9.86-22-21.98 0-11.964 9.616-21.728 21.536-21.976 4.356-14.216 17.48-24.004 32.468-24.004 18.744 0 33.996 15.252 33.996 34 0 0.364-0.012 0.728-0.032 1.088 4.98 3.332 8.032 8.928 8.032 14.896-0.004 9.912-8.076 17.976-18 17.976z"></path>
            </svg>
          </div>
          <div className="card-body">
            <h4 className="card-title bd-text-purple-bright">Cloud Migration</h4>
            <p className="card-text">Today cloud computing is a given. The next wave of cloud transformtion involves migrating your systems and applications to cloud-native technologies such as containers, and cloud container orchestration with tools like Kubernetes.  These technologies avoid cloud infrastructure lock-in and enable the next level of cloud efficiency and agility.</p>
          </div>
        </div>
        <div className="card">
          <div className="svg-container mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 120">
              <path d="M82.016 77.984h-68a2 2 0 0 1-2-2v-36a2 2 0 0 1 2-2h68c1.1 0 2 .896 2 2v36c0 1.104-.9 2-2 2zm-66-4h64v-32h-64v32z"></path>
              <path d="M48.016 93.984H31.052a2 2 0 0 1 0-4c6.756 0 8.944-3.164 8.964-4.068v-7.932c0-1.1.896-2 2-2s2 .9 2 2v7.932c0 1.248-.604 2.724-1.848 4.068h5.848a2 2 0 0 1 0 4z"></path>
              <path d="M64.98 93.984H48.016a2 2 0 0 1 0-4h5.848c-1.248-1.344-1.848-2.82-1.848-4.068v-7.932c0-1.1.9-2 2-2s2 .9 2 2v7.932c.016.896 2.208 4.068 8.964 4.068a2 2 0 0 1 0 4zm27.192-32.548c-.316 0-.632-.08-.928-.236a2.002 2.002 0 0 1-.836-2.704 13.915 13.915 0 0 0 1.596-6.492c0-5.036-2.656-9.564-7.096-12.096a1.992 1.992 0 0 1-1.008-1.872c.064-.912.104-1.46.104-2.02 0-16.54-13.456-30-29.996-30-13.716 0-25.66 9.288-29.044 22.596-.232.92-1.084 1.532-2.028 1.508a5.837 5.837 0 0 1-.648-.072h-.064C12.044 30.048 4 38.104 4 47.996c0 3.02.76 6.004 2.196 8.632.532.968.176 2.18-.792 2.716a2.004 2.004 0 0 1-2.716-.792A22.072 22.072 0 0 1 0 47.996C0 36.032 9.616 26.268 21.536 26.02c4.356-14.216 17.48-24.004 32.468-24.004 18.748 0 33.996 15.252 33.996 34 0 .364-.012.728-.032 1.088C92.952 40.432 96 46.028 96 52a17.95 17.95 0 0 1-2.064 8.368 1.965 1.965 0 0 1-1.764 1.068z"></path>
            </svg>
          </div>
          <div className="card-body">
            <h4 className="card-title bd-text-purple-bright">Digital Workplace</h4>
            <p className="card-text">Digital transformation isn’t solely driven by technology. The digtal workplace requires giving employees and partners access to the right data, applications and tools from anywhere. We are changing our culture, including where and when we work, to enable enhanced modes of collaboration for our "digital natives".</p>
          </div>
        </div>
        <div className="card">
          <div className="svg-container d-block mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
              <path d="M25.2 29.3c0-.9-.7-1.6-1.6-1.6h-1.2v-3.5h-13v3.5H8.3c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h15.3c.9 0 1.6-.8 1.6-1.6zm-14.7-4.1h11v2.5h-11v-2.5zm-2.7 4.1c0-.3.3-.6.6-.6h15.3c.3 0 .6.3.6.6s-.3.6-.6.6H8.3c-.3 0-.5-.3-.5-.6zM2 22.1h28c1.1 0 2-.9 2-2v-17c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2zm28-1H2c-.5 0-1-.5-1-1V17l7.2-7.8 6.2 7.5 10-9.6 6.6 7.8v5.2c0 .6-.5 1-1 1zM2 2.1h28c.5 0 1 .5 1 1v10.2l-6.5-7.7-9.9 9.6-6.3-7.5L1 15.5V3.1c0-.5.5-1 1-1z"></path>
            </svg>
          </div>
          <div className="card-body">
            <h4 className="card-title bd-text-purple-bright">Intelligent Analytics</h4>
            <p className="card-text">Data is the currency of business today. A data-powered enterprise integrates analytics and data to generate tangible outcomes by organizing and curating data, while translating it into valuable and actionable insights. It's also about how much data to retain, and how to ensure destruction when it is no longer relevant.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
