import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './Components/AppNAvbar'
import ShoppingList from './Components/ShoppingList'

function App() {
  return (
    <div className="App">
     <AppNavBar />
     <ShoppingList />
    </div>
  );
}

export default App;
