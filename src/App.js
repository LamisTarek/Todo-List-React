import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import { Component } from 'react';



class App extends Component {
  render() { 
    return (
      <RouterProvider router={Routes}/>
    );
  }
}
 
export default App;