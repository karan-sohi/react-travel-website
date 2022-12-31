import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navigation from './components/Navigation';
import Home from './components/Home';
import {Fragment} from 'react';
import AllCards from './components/AllCards';

function App() {
  return (
    <Fragment>
    <Navigation></Navigation>
    <Home/>
    <AllCards/>
    </Fragment>
  );
}

export default App;
