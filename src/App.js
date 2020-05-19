import React, {Component} from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';

import './bootstrap.min.css';
import './assets/css/styles.css';

import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasNarrowScreen: false
    }
  }

  resize = () => {
    let isNarrowScreen = (window.innerWidth <= 550);

    if (isNarrowScreen !== this.state.hasNarrowScreen) {
      this.setState({hasNarrowScreen: isNarrowScreen});
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  render() {
    const en= runtimeEnv();

    return (

        <div className="App.container">
          <code>Runtime env var example: {env.REACT_APP_HELLO}</code>
          <HeaderNav hideBanner={this.state.hasNarrowScreen}/>
          <Routes /> {/* Put this here, otherwise page content is inside the header*/}
          <Footer/>
        </div>
    );
  }

}

export default App;

