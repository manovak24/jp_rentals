import React from 'react';
import './App.css';

import HomePage from './pages/home-page';
import LocationsPage from './pages/locations-page';
import ContactPage from './pages/contact-page';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <LocationsPage />
        <ContactPage />
      </div>
    )
  }
}

export default App;