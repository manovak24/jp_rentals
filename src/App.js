import React from 'react';
import './App.css';

import HomePage from './pages/home-page';
import LocationsPage from './pages/locations-page';
import ContactPage from './pages/contact-page';
import Footer from './components/footer';
import Hero from './components/hero';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Hero />
        
      </Container>
    )
  }
}

export default App;