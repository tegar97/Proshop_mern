import React from 'react';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import { HomeScreen } from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header/>
        <main className="main">  
          <Container>
              <HomeScreen/>
          </Container>
        </main>
      <Footer/>
    </>
  );
}

export default App;
