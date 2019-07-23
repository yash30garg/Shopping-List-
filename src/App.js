import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './Components/AppNAvbar'
import ShoppingList from './Components/ShoppingList'
import { Provider } from 'react-redux';
import store from './store' 
import ItemModal from './Components/ItemModal'
import {Container }  from 'reactstrap'



function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <AppNavBar />
     <Container>
     <ItemModal />

     <ShoppingList />
     </Container>
    </div>
    </Provider>
  );
}

export default App;
