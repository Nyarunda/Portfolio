import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Aux from './hoc/Aux';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ezra Nyagaka',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Hi, Am Ezra Nyagaka,',
        subTitle: 'Am Looking For Opportunities,',
        lastTitle: 'Python, Django, JavaScript and React.',
      },
      about: {
        title: 'About Ezra.',
        subTitle: 'Am passionate in technology and programming.',
      },
      contact: {
        title: 'Contact Me',
      },
    };
  }
  render() {
    return (
      <Aux>
        <Navbar />
        <HomePage
          title={this.state.home.title}
          subTitle={this.state.home.subTitle}
          lastTitle={this.state.home.lastTitle}
        />
        <AboutPage
          about={this.state.about.title}
          subTitle={this.state.about.subTitle}
        />
        <Footer />
      </Aux>
    );
  }
}

export default App;
