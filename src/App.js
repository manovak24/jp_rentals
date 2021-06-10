import React from 'react';
import './App.css';

import HomePage from './pages/home-page';
import LocationsPage from './pages/locations-page';
import ContactPage from './pages/contact-page';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <LocationsPage />
        <ContactPage />
        <Footer />
      </div>
    )
  }
}

export default App;